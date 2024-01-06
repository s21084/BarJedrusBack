import express from 'express';
import userRoutes from './routes/userRoutes'
import dishRoutes from './routes/dishRoutes'
import eventRoutes from './routes/eventRoutes'
import scheduleRoute from './routes/scheduleRoute'
import vacationRoutes from './routes/vacationRoutes'
import subscriptionRoutes from './routes/subscriptionRoutes'
import personRoutes from './routes/personRoute'
import infoBarRoute from './routes/infoBarRoutes'
import workDayRoutes from './routes/workDayRoutes'
import authRouters from './routes/authRoutes'
import { authenticateToken } from './middlewares/authMiddleware';

const app = express();
app.use(express.json());
app.use('/user', authenticateToken, userRoutes);
app.use('/event', authenticateToken, eventRoutes);
app.use('/dish', authenticateToken, dishRoutes);
app.use('/schedule', authenticateToken, scheduleRoute);
app.use('/vacation', authenticateToken, vacationRoutes);
app.use('/subscription', authenticateToken, subscriptionRoutes);
app.use('/person', authenticateToken, personRoutes);
app.use('/infoBar', authenticateToken, infoBarRoute);
app.use('/workDay', authenticateToken, workDayRoutes);
app.use('/auth', authRouters);

app.get('/', (req, res) => {
    res.send('Hello world.');
});

app.listen(3000, () => {
    console.log("Server ready at localhost:3000 :)");
});

