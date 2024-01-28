import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

//Person CRUD

//Create Person
router.post('/', async (req, res) => {
    const { name, surname, phone, Street, HomeNumber, FlatNumber, City } = req.body;
    try{
        const result = await prisma.person.create({
            data: {
                name, 
                surname, 
                phone, 
                Street,
                HomeNumber,
                FlatNumber,
                City
            },
        });
    
        res.json(result);
    } catch (e) {
        res.status(400).json({error: "Something went wrong, chack if data is unique"})
    }
    
});

//List Person
router.get('/', async (req, res) => {
    const allPerson = await prisma.person.findMany();
    res.json(allPerson);
});

//Get one Person
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const person = await prisma.person.findUnique({where: {id: Number(id)}});
    res.json(person);
});

//Update Person
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, surname, phone, Street, HomeNumber, FlatNumber, City} = req.body;

    try{
        const result = await prisma.person.update({
            where: { id: Number(id)},
            data: {
                name, 
                surname, 
                phone, 
                Street,
                HomeNumber,
                FlatNumber,
                City

            },
        });
        res.json(result);
    } catch (e) {
        res.status(400).json({error: "Unable to update"})
    }

});


//Delete Person
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.person.delete({where: {id: Number(id)}})
    res.sendStatus(200);
});


export default router;