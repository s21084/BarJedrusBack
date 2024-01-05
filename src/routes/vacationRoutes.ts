import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const router = Router();

//Vacation CRUD

//Create Vacation
router.post('/', async (req, res) => {
    res.status(501).json({error: "Not implemented"})
});

//List Vacation
router.get('/', async (req, res) => {
    res.status(501).json({error: "Not implemented get list"})
});

//Get one Vacation
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented get one : ${id}`})
});

//Update Vacation
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented update : ${id}`})
});

//Delete Vacation
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented delete : ${id}`})
});


export default router;