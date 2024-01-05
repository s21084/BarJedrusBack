import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const router = Router();

//Schedule CRUD

//Create Schedule
router.post('/', async (req, res) => {
    const { startHour, endHour, userId } = req.body;
    try{
        const result = await prisma.schedule.create({
            data: {
                startHour,
                endHour,
                userId
            },
        });
    
        res.json(result);
    } catch (e) {
        res.status(400).json({error: "Something went wrong, check if data is unique"})
    }
    
});


//List Schedule
router.get('/', async (req, res) => {
    res.status(501).json({error: "Not implemented get list"})
});

//Get one Schedule
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented get one : ${id}`})
});

//Update Schedule
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented update : ${id}`})
});

//Delete Schedule
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented delete : ${id}`})
});


export default router;