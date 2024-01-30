import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const router = Router();

//Dish CRUD

//List Dish
router.get('/', async (req, res) => {
    const allDishes = await prisma.token.findMany();
    res.json(allDishes);
});



//Delete Dish
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.token.delete({where: {id: Number(id)}})
  res.sendStatus(200);
});


export default router;