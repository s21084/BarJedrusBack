import { Router } from 'express';

const router = Router();

//User CRUD

//Create User
router.post('/', (req, res) => {
    res.status(501).json({error: "Not implemented"})
});

//List User
router.get('/', (req, res) => {
    res.status(501).json({error: "Not implemented get list"})
});

//Get one User
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented get one : ${id}`})
});

//Update User
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented update : ${id}`})
});

//Delete User
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented delete : ${id}`})
});


export default router;