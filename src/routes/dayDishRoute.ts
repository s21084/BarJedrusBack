import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const router = Router();

const JWT_SECRET = "SUPER SECRET" 
//dayDish CRUD

//Create dayDish
router.post('/', async (req, res) => {
    const { soup, secondDish  } = req.body;
    //@ts-ignore
   const user = req.user;
    
    try{
        const result = await prisma.dayDish.create({
            data: {
                soup,
                secondDish
            },
        });
    
        res.json(result);
    } catch (e) {
        res.status(400).json({error: "Something went wrong, check if data is unique"})
    }
    
});

//List dayDish
router.get('/', async (req, res) => {
    const alldayDishs = await prisma.dayDish.findMany();
    res.json(alldayDishs);
});

//Get one dayDish
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const dayDish = await prisma.dayDish.findUnique({where: {id: Number(id)}});
    res.json(dayDish);
});


//Update dayDish
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { soup, secondDish  } = req.body;

    try{
        const result = await prisma.dayDish.update({
            where: { id: Number(id)},
            data: {
                soup,
                secondDish 
            },
        });
        res.json(result);
    } catch (e) {
        res.status(400).json({error: "Unable to update"})
    }

});

//Delete dayDish
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.dayDish.delete({where: {id: Number(id)}})
    res.sendStatus(200);
});


export default router;