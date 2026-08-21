// Express server Setup in App.ts

import express, { type Request, type Response } from 'express';
import Router from './routes/index.js'
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3000;

//Mongoose connection setup
mongoose.connect('mongodb://127.0.0.1:27017/aroundb')
  .then(() => {
    console.info('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Middleware to parse incoming JSON bodies
app.use(express.json());

// Temp auth with POSTMAN user

app.use((req, res, next) => {
  req.user = {
    _id: "6a882243b5291096ba30acee", 
  };
  next();
});

// Routers
app.use(Router)

// Catch-all route for non-existent addresses 
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Requested resource not found" });
});

app.listen(PORT);

