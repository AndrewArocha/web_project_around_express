// Express server Setup in App.ts

import express, { type Request, type Response } from 'express';
import usersRouter from './routes/users.js';
import cardsRouter from './routes/cards.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON bodies
app.use(express.json());

// Routers
app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

// Catch-all route for non-existent addresses 
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Requested resource not found" });
});

app.listen(PORT);

