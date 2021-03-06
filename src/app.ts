import express from 'express';
import cors from 'cors';

class App {

    public express: express.Application;

    public constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    private middleware(): void {
        this.express.use(express.json());
        this.express.use(cors());
    }

    private routes (): void {
        this.express.get('/', (req, res) => {
            return res.send('Hello World!');
        });
    }
}


export default new App().express;
