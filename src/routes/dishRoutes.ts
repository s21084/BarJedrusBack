import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const router = Router();

//Dish CRUD

//Create Dish
router.post('/', async (req, res) => {
    const { name, priceForPiece , priceForWeight  } = req.body;
    try{
        const result = await prisma.dish.create({
            data: {
                name,
                priceForPiece,
                priceForWeight  
            },
        });
    
        res.json(result);
    } catch (e) {
        res.status(400).json({error: "Something went wrong, check if data is unique"})
    }
    
});

//List Dish
router.get('/', async (req, res) => {
    const allDishes = await prisma.dish.findMany();
    res.json(allDishes);
});

//Get one Dish
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const dish = await prisma.dish.findUnique({where: {id: Number(id)}});
    res.json(dish);
});

//Update Dish
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, priceForPiece, priceForWeight} = req.body;

    try{
        const result = await prisma.dish.update({
            where: { id: Number(id)},
            data: {
                name,
                priceForPiece,
                priceForWeight
            },
        });
        res.json(result);
    } catch (e) {
        res.status(400).json({error: "Unable to update"})
    }

});


//Delete Dish
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.dish.delete({where: {id: Number(id)}})
    res.sendStatus(200);
});


export default router;