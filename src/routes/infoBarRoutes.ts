import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const router = Router();

//infoBar CRUD

//Create infoBar - not sure if it will be used
router.post('/', async (req, res) => {
    const { startHour, endHour  , bonusNote   } = req.body;
    try{
        const result = await prisma.informationBar.create({
            data: {
                startHour,
                endHour ,
                bonusNote   
            },
        });
    
        res.json(result);
    } catch (e) {
        res.status(400).json({error: "Something went wrong, check if data is unique"})
    }
    
});

//List infoBar
router.get('/', async (req, res) => {
    const allinfoBares = await prisma.informationBar.findMany();
    res.json(allinfoBares);
});

//Update infoBar
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { startHour, endHour , bonusNote } = req.body;

    try{
        const result = await prisma.informationBar.update({
            where: { id: Number(id)},
            data: {
                startHour,
                endHour ,
                bonusNote 
            },
        });
        res.json(result);
    } catch (e) {
        res.status(400).json({error: "Unable to update"})
    }

});




export default router;