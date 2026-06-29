import { AppError } from "../middlewares/global.js";
import * as cardRepo from "../repositories/card.js";
export async function getAll() {
    return cardRepo.findAll();
}
export async function getById(id) {
    const card = await cardRepo.findById(id);
    if (!card)
        throw new AppError(404, "Card not found");
    return card;
}
export async function createCard(data) {
    return cardRepo.create(data);
}
export async function updateCard(id, data) {
    await getById(id);
    return cardRepo.update(id, data);
}
export async function deleteCard(id) {
    await getById(id);
    return cardRepo.remove(id);
}
//# sourceMappingURL=card.js.map