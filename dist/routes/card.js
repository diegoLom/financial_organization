import { Router } from "express";
import * as cardController from "../controllers/card.js";
const router = Router();
router.get("/", cardController.getAll);
router.get("/:id", cardController.getById);
router.post("/", cardController.create);
router.put("/:id", cardController.update);
router.delete("/:id", cardController.remove);
export default router;
//# sourceMappingURL=card.js.map