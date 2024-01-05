import { Router } from 'express';

const router = Router();

//Dish CRUD

//Create Dish
router.post('/', (req, res) => {
    res.status(501).json({error: "Not implemented"})
});

//List Dish
router.get('/', (req, res) => {
    res.status(501).json({error: "Not implemented get list"})
});

//Get one Dish
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented get one : ${id}`})
});

//Update Dish
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented update : ${id}`})
});

//Delete Dish
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented delete : ${id}`})
});


export default router;