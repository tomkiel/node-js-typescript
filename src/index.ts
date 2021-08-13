import express, { Request, Response } from 'express';

const PORT = process.env.PORT || 8000;

const app = express();

app.get('/', (request: Request, response: Response) => {
    response.json({
        message: 'App running'
    });
});

app.listen(PORT, () => console.log('Server running on PORT: ' + PORT));
