import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const router = Router();

//notLog CRUD

//Get infoBar

router.get('/barInfo/:id', async (req, res) => {
    const { id } = req.params;
    const allinfoBares = await prisma.informationBar.findUnique({where: {id: Number(id)}});
    res.json(allinfoBares);
});


//Get dayDish

router.get('/dayDish/:id', async (req, res) => {
  const { id } = req.params;
  const allinfoBares = await prisma.dayDish.findUnique({where: {id: Number(id)}});
  res.json(allinfoBares);
});

//List dishes
router.get('/dish/menu', async (req, res) => {
  const allDishes = await prisma.dish.findMany();
  res.json(allDishes);
});

export default router;