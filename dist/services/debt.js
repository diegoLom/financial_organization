import { AppError } from "../middlewares/global.js";
import * as debtRepo from "../repositories/debt.js";
export async function getAll() {
    return debtRepo.findAll();
}
export async function getById(id) {
    const debt = await debtRepo.findById(id);
    if (!debt)
        throw new AppError(404, "Debt not found");
    return debt;
}
export async function createDebt(data) {
    return debtRepo.create(data);
}
export async function updateDebt(id, data) {
    await getById(id);
    return debtRepo.update(id, data);
}
export async function deleteDebt(id) {
    await getById(id);
    return debtRepo.remove(id);
}
//# sourceMappingURL=debt.js.map