import type { Request, Response, NextFunction } from "express";
import * as debtService from "../services/debt.js";

export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await debtService.getAll());
  } catch (err) { next(err); }
}

export async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await debtService.getById(Number(req.params.id)));
  } catch (err) { next(err); }
}

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    res.status(201).json(await debtService.createDebt(req.body));
  } catch (err) { next(err); }
}

export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await debtService.updateDebt(Number(req.params.id), req.body));
  } catch (err) { next(err); }
}

export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    await debtService.deleteDebt(Number(req.params.id));
    res.status(204).send();
  } catch (err) { next(err); }
}
