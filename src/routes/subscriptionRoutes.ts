import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const router = Router();

//Subscription CRUD

//Create Subscription
router.post('/', async (req, res) => {
    const { isCurrentMonthPayed, dishType, countOfDish, onPlace, notes, personId  } = req.body;
    try{
        const result = await prisma.subscription.create({
            data: {
                isCurrentMonthPayed ,
                dishType,
                countOfDish,
                onPlace,
                notes,
                personId 
            },
        });
    
        res.json(result);
    } catch (e) {
        res.status(400).json({error: "Something went wrong, check if data is unique"})
    }
    
});

//List Subscription
router.get('/', async (req, res) => {
    const allSubscription = await prisma.subscription.findMany();
    res.json(allSubscription);
});

//Get one Subscription
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const subscription = await prisma.subscription.findUnique({where: {id: Number(id)}});
    res.json(subscription);
});

//Update Subscription
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { isCurrentMonthPayed, dishType, countOfDish, onPlace, notes, personId  } = req.body;

    try{
        const result = await prisma.subscription.update({
            where: { id: Number(id)},
            data: {
                isCurrentMonthPayed ,
                dishType,
                countOfDish,
                onPlace,
                notes,
                personId 
            },
        });
        res.json(result);
    } catch (e) {
        res.status(400).json({error: "Unable to update"})
    }

});

//Delete Subscription
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.subscription.delete({where: {id: Number(id)}})
    res.sendStatus(200);
});


export default router;