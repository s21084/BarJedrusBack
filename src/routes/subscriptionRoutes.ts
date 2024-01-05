import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const router = Router();

//Subscription CRUD

//Create Subscription
router.post('/', async (req, res) => {
    res.status(501).json({error: "Not implemented"})
});

//List Subscription
router.get('/', async (req, res) => {
    res.status(501).json({error: "Not implemented get list"})
});

//Get one Subscription
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented get one : ${id}`})
});

//Update Subscription
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented update : ${id}`})
});

//Delete Subscription
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented delete : ${id}`})
});


export default router;