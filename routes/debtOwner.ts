import { Router } from "express";
import * as debtOwnerController from "../controllers/debtOwner.js";

const router = Router();

router.get("/:id", debtOwnerController.getById);
router.put("/:id", debtOwnerController.update);
router.delete("/:id", debtOwnerController.remove);

export default router;
