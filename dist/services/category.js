import { AppError } from "../middlewares/global.js";
import * as categoryRepo from "../repositories/category.js";
export async function getAll() {
    return categoryRepo.findAll();
}
export async function getById(id) {
    const category = await categoryRepo.findById(id);
    if (!category)
        throw new AppError(404, "Category not found");
    return category;
}
export async function createCategory(data) {
    return categoryRepo.create(data);
}
export async function updateCategory(id, data) {
    await getById(id);
    return categoryRepo.update(id, data);
}
export async function deleteCategory(id) {
    await getById(id);
    return categoryRepo.remove(id);
}
//# sourceMappingURL=category.js.map