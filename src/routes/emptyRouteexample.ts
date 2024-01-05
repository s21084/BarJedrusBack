import { Router } from 'express';

const router = Router();

//Empty CRUD

//Create Empty
router.post('/', (req, res) => {
    res.status(501).json({error: "Not implemented"})
});

//List Empty
router.get('/', (req, res) => {
    res.status(501).json({error: "Not implemented get list"})
});

//Get one Empty
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented get one : ${id}`})
});

//Update Empty
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented update : ${id}`})
});

//Delete Empty
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented delete : ${id}`})
});


export default router;