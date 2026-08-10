// Router for Cards

import { Router } from 'express';
import { getCards, createCard } from '../controllers/cards.js';

const cardsRouter = Router();

cardsRouter.get('/', getCards);
cardsRouter.post('/', createCard);

export default cardsRouter;