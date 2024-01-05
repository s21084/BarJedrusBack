import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const router = Router();

//Vacation CRUD

//Create Vacation
router.post('/', async (req, res) => {
    const { dayStart, userId, dayEnd } = req.body;
    try{
        const result = await prisma.vacation.create({
            data: {
                dayStart,
                userId,
                dayEnd 
            },
        });
    
        res.json(result);
    } catch (e) {
        res.status(400).json({error: "Something went wrong, check if data is unique"})
    }
    
});

//List Vacation
router.get('/', async (req, res) => {
    const allVacation = await prisma.vacation.findMany();
    res.json(allVacation);
});

//Get one Vacation
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const vacation = await prisma.vacation.findUnique({where: {id: Number(id)}});
    res.json(vacation);
});
//Update Vacation
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { dayStart, userId, dayEnd } = req.body;

    try{
        const result = await prisma.vacation.update({
            where: { id: Number(id)},
            data: {
                dayStart,
                userId,
                dayEnd 
            },
        });
        res.json(result);
    } catch (e) {
        res.status(400).json({error: "Unable to update"})
    }

});
//Delete Vacation
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.vacation.delete({where: {id: Number(id)}})
    res.sendStatus(200);
});


export default router;