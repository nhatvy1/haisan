import express from 'express';
require('dotenv').config();
import cors from 'cors';
import initRoutes from './src/routes';
import connectionDb from './src/config/connectionDb';
const app = express();

app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
        methods: ['POST', 'GET', 'PUT', 'DELETE'],
    }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


initRoutes(app);
connectionDb();

const port = process.env.PORT || 7979;

app.listen(port, () => console.log(`Server is running on the port ${port}`));
