import type { Request, Response, NextFunction } from "express";
import * as cardService from "../services/card.js";

export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await cardService.getAll());
  } catch (err) { next(err); }
}

export async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await cardService.getById(Number(req.params.id)));
  } catch (err) { next(err); }
}

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    res.status(201).json(await cardService.createCard(req.body));
  } catch (err) { next(err); }
}

export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await cardService.updateCard(Number(req.params.id), req.body));
  } catch (err) { next(err); }
}

export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    await cardService.deleteCard(Number(req.params.id));
    res.status(204).send();
  } catch (err) { next(err); }
}
