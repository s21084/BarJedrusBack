import { Router } from 'express';

const router = Router();

//Vacation CRUD

//Create Vacation
router.post('/', (req, res) => {
    res.status(501).json({error: "Not implemented"})
});

//List Vacation
router.get('/', (req, res) => {
    res.status(501).json({error: "Not implemented get list"})
});

//Get one Vacation
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented get one : ${id}`})
});

//Update Vacation
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented update : ${id}`})
});

//Delete Vacation
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented delete : ${id}`})
});


export default router;