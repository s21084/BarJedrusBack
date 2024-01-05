import { Router } from 'express';

const router = Router();

//Schedule CRUD

//Create Schedule
router.post('/', (req, res) => {
    res.status(501).json({error: "Not implemented"})
});

//List Schedule
router.get('/', (req, res) => {
    res.status(501).json({error: "Not implemented get list"})
});

//Get one Schedule
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented get one : ${id}`})
});

//Update Schedule
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented update : ${id}`})
});

//Delete Schedule
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented delete : ${id}`})
});


export default router;