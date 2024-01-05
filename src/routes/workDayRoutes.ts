import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const router = Router();

//infoBar CRUD

//Create infoBar - not sure if it will be used
router.post('/', async (req, res) => {
    const { date, isEvent, informationBarId } = req.body;
    try{
        const result = await prisma.workDay.create({
            data: {
                date, 
                isEvent, 
                informationBarId 
            },
        });
    
        res.json(result);
    } catch (e) {
        res.status(400).json({error: "Something went wrong, check if data is unique"})
    }
    
});

//List infoBar
router.get('/', async (req, res) => {
    const allinfoBares = await prisma.workDay.findMany();
    res.json(allinfoBares);
});

//Update infoBar
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { date, isEvent, informationBarId } = req.body;

    try{
        const result = await prisma.workDay.update({
            where: { id: Number(id)},
            data: {
                date, 
                isEvent, 
                informationBarId 
            },
        });
        res.json(result);
    } catch (e) {
        res.status(400).json({error: "Unable to update"})
    }

});




export default router;