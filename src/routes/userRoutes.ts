import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();


//User CRUD

//Create User
router.post('/', async (req, res) => {
    const { login, personId, email } = req.body;
    try{
        const result = await prisma.user.create({
            data: {
                login,
                personId,
                email
            },
        });
    
        res.json(result);
    } catch (e) {
        res.status(400).json({error: "Something went wrong, chack if data is unique"})
    }
    
});

//List User
router.get('/', async (req, res) => {
    const allUsers = await prisma.user.findMany();
    res.json(allUsers);
});

//Get one User
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const user = await prisma.user.findUnique({where: {id: Number(id)}});
    res.json(user);
});

//Update User
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { email, isAdmin, isVerified} = req.body;

    try{
        const result = await prisma.user.update({
            where: { id: Number(id)},
            data: {
                email,
                isAdmin,
                isVerified
            },
        });
        res.json(result);
    } catch (e) {
        res.status(400).json({error: "Unable to update"})
    }

    res.status(501).json({error: `Not implemented update : ${id}`})
});

//Delete User
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.user.delete({where: {id: Number(id)}})
    res.sendStatus(200);
});


export default router;