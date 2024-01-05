import { Router } from 'express';

const router = Router();

//Subscription CRUD

//Create Subscription
router.post('/', (req, res) => {
    res.status(501).json({error: "Not implemented"})
});

//List Subscription
router.get('/', (req, res) => {
    res.status(501).json({error: "Not implemented get list"})
});

//Get one Subscription
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented get one : ${id}`})
});

//Update Subscription
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented update : ${id}`})
});

//Delete Subscription
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented delete : ${id}`})
});


export default router;