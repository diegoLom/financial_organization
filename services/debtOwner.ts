import { AppError } from "../middlewares/global.js";
import * as debtOwnerRepo from "../repositories/debtOwner.js";
import type { Prisma } from "../generated/prisma/client.js";

export async function getByDebt(debtId: number) {
  return debtOwnerRepo.findByDebt(debtId);
}

export async function getById(id: number) {
  const debtOwner = await debtOwnerRepo.findById(id);
  if (!debtOwner) throw new AppError(404, "DebtOwner not found");
  return debtOwner;
}

export async function assignOwner(data: Prisma.DebtOwnerCreateInput) {
  return debtOwnerRepo.create(data);
}

export async function updateSplit(id: number, data: Prisma.DebtOwnerUpdateInput) {
  await getById(id);
  return debtOwnerRepo.update(id, data);
}

export async function removeOwner(id: number) {
  await getById(id);
  return debtOwnerRepo.remove(id);
}
