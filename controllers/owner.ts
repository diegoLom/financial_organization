import type { Request, Response, NextFunction } from "express";
import * as ownerService from "../services/owner.js";

export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await ownerService.getAll());
  } catch (err) { next(err); }
}

export async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await ownerService.getById(Number(req.params.id)));
  } catch (err) { next(err); }
}

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    res.status(201).json(await ownerService.createOwner(req.body));
  } catch (err) { next(err); }
}

export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await ownerService.updateOwner(Number(req.params.id), req.body));
  } catch (err) { next(err); }
}

export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    await ownerService.deleteOwner(Number(req.params.id));
    res.status(204).send();
  } catch (err) { next(err); }
}
