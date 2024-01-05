import express from 'express';
import userRoutes from './routes/userRoutes'
import dishRoutes from './routes/dishRoutes'
import eventRoutes from './routes/eventRoutes'
import scheduleRoute from './routes/scheduleRoute'
import vacationRoutes from './routes/vacationRoutes'
import subscriptionRoutes from './routes/subscriptionRoutes'

const app = express();
app.use(express.json());
app.use('/user', userRoutes);
app.use('/event', eventRoutes);
app.use('/dish', dishRoutes);
app.use('/schedule', scheduleRoute);
app.use('/vacation', vacationRoutes);
app.use('/subscriptin', subscriptionRoutes);

app.get('/', (req, res) => {
    res.send('Hello world.');
});

app.listen(3000, () => {
    console.log("Server ready at localhost:3000 :)");
});

