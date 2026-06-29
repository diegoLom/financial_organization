import { AppError } from "../middlewares/global.js";
import * as cardRepo from "../repositories/card.js";
import type { Prisma } from "../generated/prisma/client.js";

export async function getAll() {
  return cardRepo.findAll();
}

export async function getById(id: number) {
  const card = await cardRepo.findById(id);
  if (!card) throw new AppError(404, "Card not found");
  return card;
}

export async function createCard(data: Prisma.CardCreateInput) {
  return cardRepo.create(data);
}

export async function updateCard(id: number, data: Prisma.CardUpdateInput) {
  await getById(id);
  return cardRepo.update(id, data);
}

export async function deleteCard(id: number) {
  await getById(id);
  return cardRepo.remove(id);
}
