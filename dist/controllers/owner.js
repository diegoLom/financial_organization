import * as ownerService from "../services/owner.js";
export async function getAll(req, res, next) {
    try {
        res.json(await ownerService.getAll());
    }
    catch (err) {
        next(err);
    }
}
export async function getById(req, res, next) {
    try {
        res.json(await ownerService.getById(Number(req.params.id)));
    }
    catch (err) {
        next(err);
    }
}
export async function create(req, res, next) {
    try {
        res.status(201).json(await ownerService.createOwner(req.body));
    }
    catch (err) {
        next(err);
    }
}
export async function update(req, res, next) {
    try {
        res.json(await ownerService.updateOwner(Number(req.params.id), req.body));
    }
    catch (err) {
        next(err);
    }
}
export async function remove(req, res, next) {
    try {
        await ownerService.deleteOwner(Number(req.params.id));
        res.status(204).send();
    }
    catch (err) {
        next(err);
    }
}
//# sourceMappingURL=owner.js.map