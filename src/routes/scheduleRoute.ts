import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const router = Router();

//Schedule CRUD

//Create Schedule
router.post('/', async (req, res) => {
    const { startHour, endHour, weekDayNumber, userId, informationBarId} = req.body;
    try{
        const result = await prisma.schedule.create({
            data: {
                startHour,
                endHour,
                weekDayNumber,
                userId,
                informationBarId
            },
        });
    
        res.json(result);
    } catch (e) {
        res.status(400).json({error: "Something went wrong, check if data is unique"})
    }
    
});


//List Schedule DONE
router.get('/', async (req, res) => {
    const allSched = await prisma.schedule.findMany({include:{user: true} });
    res.json(allSched);
});

//Get one Schedule DONE
router.get('/id/:id', async (req, res) => {
    const { id } = req.params;
    const sched = await prisma.schedule.findUnique({where: {id: Number(id)}, include:{user: true}} );
    res.json(sched);
});


//DONE
router.get('/user/:userId', async (req, res) => {
    const { userId } = req.params;
    const schedule = await prisma.schedule.findMany({where: {userId: Number(userId)}, include:{user: true}} );
    res.json(schedule);
});

//Update Schedule DONE
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { startHour, endHour, weekDayNumber, userId, informationBarId} = req.body;

    try{
        const result = await prisma.schedule.update({
            where: { id: Number(id)},
            data: {
                startHour,
                endHour,
                weekDayNumber,
                userId,
                informationBarId
            },
        });
        res.json(result);
    } catch (e) {
        res.status(400).json({error: "Unable to update"})
    }

});

//Delete Schedule DONE
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.schedule.delete({where: {id: Number(id)}})
    res.sendStatus(200);
});


export default router;