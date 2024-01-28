import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const router = Router();

const JWT_SECRET = "SUPER SECRET" 
//DayDish CRUD

//Create DayDish
router.post('/', async (req, res) => {
    const { soup, secondDish, price,informationBarId  } = req.body;
    //@ts-ignore
   const user = req.user;
    
    try{
        const result = await prisma.dayDish.create({
            data: {
                soup,
                secondDish, 
                price,
                informationBarId
            },
        });
    
        res.json(result);
    } catch (e) {
        res.status(400).json({error: "Something went wrong, check if data is unique"})
    }
    
});

//List DayDish
router.get('/', async (req, res) => {
    const allDayDishs = await prisma.dayDish.findMany();
    res.json(allDayDishs);
});

//Get one DayDish
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const DayDish = await prisma.dayDish.findUnique({where: {id: Number(id)}});
    res.json(DayDish);
});


//Update DayDish
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { soup, secondDish , price, informationBarId } = req.body;
    
    try{
        const result = await prisma.dayDish.update({
            where: { id: Number(id)},
            data: {
                soup,
                secondDish,
                price,
                informationBarId
            },
        });
        res.json(result);
    } catch (e) {
        res.status(400).json({error: "Unable to update"})
    }

});

//Delete DayDish
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.dayDish.delete({where: {id: Number(id)}})
    res.sendStatus(200);
});


export default router;