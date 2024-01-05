import { Router } from 'express';

const router = Router();

//Event CRUD

//Create Event
router.post('/', (req, res) => {
    res.status(501).json({error: "Not implemented"})
});

//List Event
router.get('/', (req, res) => {
    res.status(501).json({error: "Not implemented get list"})
});

//Get one Event
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented get one : ${id}`})
});

//Update Event
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented update : ${id}`})
});

//Delete Event
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented delete : ${id}`})
});


export default router;