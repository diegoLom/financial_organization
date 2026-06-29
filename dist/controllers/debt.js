import * as debtService from "../services/debt.js";
export async function getAll(req, res, next) {
    try {
        res.json(await debtService.getAll());
    }
    catch (err) {
        next(err);
    }
}
export async function getById(req, res, next) {
    try {
        res.json(await debtService.getById(Number(req.params.id)));
    }
    catch (err) {
        next(err);
    }
}
export async function create(req, res, next) {
    try {
        res.status(201).json(await debtService.createDebt(req.body));
    }
    catch (err) {
        next(err);
    }
}
export async function update(req, res, next) {
    try {
        res.json(await debtService.updateDebt(Number(req.params.id), req.body));
    }
    catch (err) {
        next(err);
    }
}
export async function remove(req, res, next) {
    try {
        await debtService.deleteDebt(Number(req.params.id));
        res.status(204).send();
    }
    catch (err) {
        next(err);
    }
}
//# sourceMappingURL=debt.js.map