import { config } from "dotenv";
config();
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { getDecksController } from "./controllers/getDecksController";
import { getDeckController } from "./controllers/getDeckController";
import { createDeckController } from "./controllers/createDeckController";
import { deleteDeckController } from "./controllers/deleteDeckController";
import { createDeckCardController } from "./controllers/createDeckCardController";
import { deleteDeckCardController } from "./controllers/deleteDeckCardController";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/decks", getDecksController);
app.post("/decks", createDeckController);
app.delete("/decks/:deckId", deleteDeckController);

app.get("/decks/:deckId", getDeckController);
app.post("/decks/:deckId/cards", createDeckCardController);
app.delete("/decks/:deckId/cards/:index", deleteDeckCardController);

mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`listening on port ${PORT}`);
  app.listen(PORT);
});
