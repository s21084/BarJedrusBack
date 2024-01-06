import { Router } from "express";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const router = Router();

const EMAIL_TOKEN_EXPIRATION_MINUTES = 10;
const AUTH_EXPIRATION_HOURS = 24;

//endpoints
//method to generate token
function generateEmailToken(): string {
    return Math.floor(1000000 + Math.random() * 9000000).toString();
  }

//Create user if doesnt exist, generate email token and sed it to email
router.post('/login', async (req, res) =>{
    const{email} = req.body;
    //generate token
    const emailToken = generateEmailToken();
    const expiration = new Date(new Date().getTime() + EMAIL_TOKEN_EXPIRATION_MINUTES*60000);
 try{
    const createdToken = await prisma.token.create({
        data: {
            type: "EMAIL",
            emailToken,
            expiration,
            user: {
                connectOrCreate: {
                    where: { email },
                    create: { email }
                }
            }
            
        }
    });

    console.log(createdToken);
    //send emailtoken to email
    res.sendStatus(200);
 }catch(e){
    console.log(e);
    res.status(400).json({error: "Coudn't start auth process, try again"})
 }
    
});

//Validate emailToken and exchange it for long lives JWT TOKEN
router.post('/authenticate', async (req, res) =>{
    const {email, emailToken} = req.body;
    

    const dbEmailToken = await prisma.token.findUnique({
        where: {
            emailToken,
        },
        include: {
            user: true
        }
    });
    console.log(dbEmailToken);
    if(!dbEmailToken || !dbEmailToken.valid){
        return res.sendStatus(401);
    }
    if(dbEmailToken.expiration < new Date()){
        return res.sendStatus(401).json({error: "Token expired!"});
    }

    if(dbEmailToken?.user?.email != email){
        return res.sendStatus(401);
    } 

    // Here validation that the user is the owner of the email

    //generate an API token
    const expiration = new Date(new Date().getTime() + AUTH_EXPIRATION_HOURS * 60 * 60000);
    const apiToken = await prisma.token.create({
        data:{
            type: "API",
            expiration,
            user:{
                connect: {
                    email,
                }
            }
        }
    });


    res.sendStatus(200);
});

export default router;