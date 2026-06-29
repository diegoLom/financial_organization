import * as debtOwnerService from "../services/debtOwner.js";
export async function getByDebt(req, res, next) {
    try {
        res.json(await debtOwnerService.getByDebt(Number(req.params.debtId)));
    }
    catch (err) {
        next(err);
    }
}
export async function getById(req, res, next) {
    try {
        res.json(await debtOwnerService.getById(Number(req.params.id)));
    }
    catch (err) {
        next(err);
    }
}
export async function assign(req, res, next) {
    try {
        res.status(201).json(await debtOwnerService.assignOwner(req.body));
    }
    catch (err) {
        next(err);
    }
}
export async function update(req, res, next) {
    try {
        res.json(await debtOwnerService.updateSplit(Number(req.params.id), req.body));
    }
    catch (err) {
        next(err);
    }
}
export async function remove(req, res, next) {
    try {
        await debtOwnerService.removeOwner(Number(req.params.id));
        res.status(204).send();
    }
    catch (err) {
        next(err);
    }
}
//# sourceMappingURL=debtOwner.js.map