import { AppError } from "../middlewares/global.js";
import * as debtOwnerRepo from "../repositories/debtOwner.js";
export async function getByDebt(debtId) {
    return debtOwnerRepo.findByDebt(debtId);
}
export async function getById(id) {
    const debtOwner = await debtOwnerRepo.findById(id);
    if (!debtOwner)
        throw new AppError(404, "DebtOwner not found");
    return debtOwner;
}
export async function assignOwner(data) {
    return debtOwnerRepo.create(data);
}
export async function updateSplit(id, data) {
    await getById(id);
    return debtOwnerRepo.update(id, data);
}
export async function removeOwner(id) {
    await getById(id);
    return debtOwnerRepo.remove(id);
}
//# sourceMappingURL=debtOwner.js.map