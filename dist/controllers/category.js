import * as categoryService from "../services/category.js";
export async function getAll(req, res, next) {
    try {
        res.json(await categoryService.getAll());
    }
    catch (err) {
        next(err);
    }
}
export async function getById(req, res, next) {
    try {
        res.json(await categoryService.getById(Number(req.params.id)));
    }
    catch (err) {
        next(err);
    }
}
export async function create(req, res, next) {
    try {
        res.status(201).json(await categoryService.createCategory(req.body));
    }
    catch (err) {
        next(err);
    }
}
export async function update(req, res, next) {
    try {
        res.json(await categoryService.updateCategory(Number(req.params.id), req.body));
    }
    catch (err) {
        next(err);
    }
}
export async function remove(req, res, next) {
    try {
        await categoryService.deleteCategory(Number(req.params.id));
        res.status(204).send();
    }
    catch (err) {
        next(err);
    }
}
//# sourceMappingURL=category.js.map