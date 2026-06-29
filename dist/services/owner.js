import { AppError } from "../middlewares/global.js";
import * as ownerRepo from "../repositories/owner.js";
export async function getAll() {
    return ownerRepo.findAll();
}
export async function getById(id) {
    const owner = await ownerRepo.findById(id);
    if (!owner)
        throw new AppError(404, "Owner not found");
    return owner;
}
export async function createOwner(data) {
    return ownerRepo.create(data);
}
export async function updateOwner(id, data) {
    await getById(id);
    return ownerRepo.update(id, data);
}
export async function deleteOwner(id) {
    await getById(id);
    return ownerRepo.remove(id);
}
//# sourceMappingURL=owner.js.map