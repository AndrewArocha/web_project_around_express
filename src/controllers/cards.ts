//Controller for cards in src/controllers/cards.ts

import type { Request, Response } from 'express';
import fs from 'fs/promises';
import path from 'node:path';

const cardsFilePath = path.join(import.meta.dirname, '../../data/cards.json');

export const getCards = async (req: Request, res: Response) => {
    // Logic to get cards from the database
  try {
    const data = await fs.readFile(cardsFilePath, 'utf-8');
    const cards = JSON.parse(data);
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: "An error has ocurred on the server" });
  }
}

export const createCard = async (req: Request, res: Response) => {
     // Logic to create a new card in the database
  try {
    const data = await fs.readFile(cardsFilePath, 'utf-8');
    const cards = JSON.parse(data);
    cards.push(req.body);
    await fs.writeFile(cardsFilePath, JSON.stringify(cards));
    res.status(201).json({ message: 'Card created successfully' });
  } catch (error) {
    res.status(500).json({ message: "An error has ocurred on the server" });
  }
}