import type { Request, Response, NextFunction } from "express";
import * as debtOwnerService from "../services/debtOwner.js";

export async function getByDebt(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await debtOwnerService.getByDebt(Number(req.params.debtId)));
  } catch (err) { next(err); }
}

export async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await debtOwnerService.getById(Number(req.params.id)));
  } catch (err) { next(err); }
}

export async function assign(req: Request, res: Response, next: NextFunction) {
  try {
    res.status(201).json(await debtOwnerService.assignOwner(req.body));
  } catch (err) { next(err); }
}

export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await debtOwnerService.updateSplit(Number(req.params.id), req.body));
  } catch (err) { next(err); }
}

export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    await debtOwnerService.removeOwner(Number(req.params.id));
    res.status(204).send();
  } catch (err) { next(err); }
}
