import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const router = Router();


//User CRUD

//Create User
router.post('/', async (req, res) => {
    const { email } = req.body;
    try{
        const result = await prisma.user.create({
            data: {email},
        });
    
        res.json(result);
    } catch (e) {
        res.status(400).json({error: "Something went wrong, check if data is unique"})
    }
    
});

//List User
router.get('/', async (req, res) => {
    const allUsers = await prisma.user.findMany({include:{person: true} });
    res.json(allUsers);
});

//Get one User
router.get('/id/:id', async (req, res) => {
    const { id } = req.params;
    const user = await prisma.user.findUnique({where: {id: Number(id)}, include:{person: true}} );
    res.json(user);
});

//get user by email
router.get('/email/:email', async (req, res) => {
    const { email } = req.params;
    const user = await prisma.user.findUnique({where: {email: email}, include:{person: true}} );
    res.json(user);
});

//Update User
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { email, isAdmin, isVerified, personId} = req.body;

    try{
        const result = await prisma.user.update({
            where: { id: Number(id)},
            data: {
                email,
                isAdmin,
                isVerified,
                personId
            },
        });
        res.json(result);
    } catch (e) {
        res.status(400).json({error: "Unable to update"})
    }

});

//Delete User
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.user.delete({where: {id: Number(id)}})
    res.sendStatus(200);
});


export default router;