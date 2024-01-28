// import { Router } from 'express';
// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

// const router = Router();


// //User CRUD

// //Create User
// router.post('/', async (req, res) => {
//     const { Street, HomeNumber, FlatNumber, City  } = req.body;
//     try{
//         const result = await prisma.adress.create({
//             data: {
//                 Street, 
//                 HomeNumber, 
//                 FlatNumber, 
//                 City
//             },
//         });
    
//         res.json(result);
//     } catch (e) {
//         res.status(400).json({error: "Something went wrong, check if data is unique"})
//     }
    
// });

// //List User
// router.get('/', async (req, res) => {
//     const allAdress = await prisma.adress.findMany();
//     res.json(allAdress);
// });

// //Get one User
// router.get('/:id', async (req, res) => {
//     const { id } = req.params;
//     const adress = await prisma.adress.findUnique({where: {id: Number(id)}});
//     res.json(adress);
// });

// //Update User
// router.put('/:id', async (req, res) => {
//     const { id } = req.params;
//     const { Street, HomeNumber, FlatNumber, City} = req.body;

//     try{
//         const result = await prisma.adress.update({
//             where: { id: Number(id)},
//             data: {
//                 Street, 
//                 HomeNumber, 
//                 FlatNumber, 
//                 City
//             },
//         });
//         res.json(result);
//     } catch (e) {
//         res.status(400).json({error: "Unable to update"})
//     }

// });

// //Delete User
// router.delete('/:id', async (req, res) => {
//     const { id } = req.params;
//     await prisma.adress.delete({where: {id: Number(id)}})
//     res.sendStatus(200);
// });


// export default router;