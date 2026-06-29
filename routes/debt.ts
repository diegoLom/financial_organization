import { Router } from "express";
import * as debtController from "../controllers/debt.js";
import * as debtOwnerController from "../controllers/debtOwner.js";

const router = Router();

router.get("/", debtController.getAll);
router.get("/:id", debtController.getById);
router.post("/", debtController.create);
router.put("/:id", debtController.update);
router.delete("/:id", debtController.remove);

// Nested: owners of a specific debt
router.get("/:debtId/owners", debtOwnerController.getByDebt);
router.post("/:debtId/owners", debtOwnerController.assign);

export default router;
