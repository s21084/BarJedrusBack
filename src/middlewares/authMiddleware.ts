import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken' 
import { PrismaClient, User } from '@prisma/client';
const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWS_SECRET || "Super SeCRET"; 

type AuthRequest = Request & {user?: User};

export async function authenticateToken (req: AuthRequest, res: Response, next: NextFunction){
    const authHeader = req.headers['authorization'];
    const jwsToken = authHeader?.split(" ")[1];
    if(!jwsToken){
        return res.sendStatus(401);
    }
    //decode token
    try{
        const payload = await jwt.verify(jwsToken, JWT_SECRET) as {tokenId:number};
        const dbToken = await  prisma.token.findUnique({
            where: {id: payload.tokenId},
            include: {user: true}, 
        });
        
        if(!dbToken?.valid || dbToken.expiration < new Date()){
            return res.sendStatus(401).json({error: "API token expired"});
        }
        console.log(dbToken.user)

        req.user = dbToken.user;
    }catch(e){
        return res.sendStatus(401);
    }
    next();
}