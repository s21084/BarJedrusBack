import { Router } from 'express';

const router = Router();

//Person CRUD

//Create Person
router.post('/', (req, res) => {
    res.status(501).json({error: "Not implemented"})
});

//List Person
router.get('/', (req, res) => {
    res.status(501).json({error: "Not implemented get list"})
});

//Get one Person
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented get one : ${id}`})
});

//Update Person
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented update : ${id}`})
});

//Delete Person
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented delete : ${id}`})
});


export default router;