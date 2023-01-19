import { Request, Response } from "express";
import Deck from "../models/Deck";

export async function createDeckCardController(req: Request, res: Response) {
  const deckId = req.params.deckId;
  const deck = await Deck.findById(deckId);
  const { text } = req.body;
  if (!deck)
    return res.status(400).send(`could not find deck with id ${deckId}`);
  deck.cards.push(text);
  await deck.save();
  res.json(deck);
}
