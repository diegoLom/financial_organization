import { AppError } from "../middlewares/global.js";
import * as debtRepo from "../repositories/debt.js";
import type { Prisma } from "../generated/prisma/client.js";

export async function getAll() {
  return debtRepo.findAll();
}

export async function getById(id: number) {
  const debt = await debtRepo.findById(id);
  if (!debt) throw new AppError(404, "Debt not found");
  return debt;
}

export async function createDebt(data: Prisma.DebtCreateInput) {
  return debtRepo.create(data);
}

export async function updateDebt(id: number, data: Prisma.DebtUpdateInput) {
  await getById(id);
  return debtRepo.update(id, data);
}

export async function deleteDebt(id: number) {
  await getById(id);
  return debtRepo.remove(id);
}
