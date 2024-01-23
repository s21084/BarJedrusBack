import express from 'express';
import userRoutes from './routes/userRoutes'
import dishRoutes from './routes/dishRoutes'
import eventRoutes from './routes/eventRoutes'
import scheduleRoute from './routes/scheduleRoute'
import subscriptionRoutes from './routes/subscriptionRoutes'
import personRoutes from './routes/personRoute'
import infoBarRoute from './routes/infoBarRoutes'
import authRouters from './routes/authRoutes'
import DayDishRoute from './routes/dayDishRoute'
import adressRoute from './routes/adressRoutes'
import { authenticateToken } from './middlewares/authMiddleware';


const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use('/user', authenticateToken, userRoutes);
app.use('/event', authenticateToken, eventRoutes);
app.use('/dish', authenticateToken, dishRoutes);
app.use('/schedule', authenticateToken, scheduleRoute);
app.use('/subscription', authenticateToken, subscriptionRoutes);
app.use('/person', authenticateToken, personRoutes);
app.use('/infoBar', authenticateToken, infoBarRoute);
app.use('/DayDish', authenticateToken, DayDishRoute);
app.use('/adress', authenticateToken, adressRoute);
app.use('/auth', authRouters);






app.get('/', (req, res) => {
    res.send('Hello world.');
});

app.listen(3001,"0.0.0.0", () => {
    console.log("Server ready at localhost:3001 :)");
});

