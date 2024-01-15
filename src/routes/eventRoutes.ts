import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const router = Router();

const JWT_SECRET = "SUPER SECRET" 
//Event CRUD

//Create Event
router.post('/', async (req, res) => {
    const { name, date, decoration, vegeCount, meatCount, prePay, priceFull, notes, informationBarId  } = req.body;
    //@ts-ignore
   const user = req.user;
    
    try{
        const result = await prisma.event.create({
            data: {
                name, 
                date, 
                decoration, 
                vegeCount, 
                meatCount, 
                prePay, 
                priceFull, 
                notes,
                informationBarId
            },
        });
    
        res.json(result);
    } catch (e) {
        res.status(400).json({error: "Something went wrong, check if data is unique"})
    }
    
});

//List Event
router.get('/', async (req, res) => {
    const allEvents = await prisma.event.findMany();
    res.json(allEvents);
});

//Get one Event
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const event = await prisma.event.findUnique({where: {id: Number(id)}});
    res.json(event);
});


//Update Event
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, date, decoration, vegeCount, meatCount, prePay, priceFull, notes, informationBarId  } = req.body;

    try{
        const result = await prisma.event.update({
            where: { id: Number(id)},
            data: {
                name, 
                date, 
                decoration, 
                vegeCount, 
                meatCount, 
                prePay, 
                priceFull, 
                notes, 
                informationBarId
            },
        });
        res.json(result);
    } catch (e) {
        res.status(400).json({error: "Unable to update"})
    }

});

//Delete Event
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.event.delete({where: {id: Number(id)}})
    res.sendStatus(200);
});


export default router;