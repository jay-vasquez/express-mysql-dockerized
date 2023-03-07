import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import dbInit from './src/db/init'
import router from './src/api/routes';

dotenv.config();

const port = process.env.PORT;

export const application = () => {
    const app: Application = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.get('/', async (req: Request, res: Response) => {
        res.send('Express + TypeScript Server');
    });
    app.use('/', router)

    return app;
}

export const start = () => {
    const app = application();
    try {
        dbInit();
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`)
        })
    } catch (error: any) {
        console.log(`Error occurred: ${error.message}`)
    }
}

start();