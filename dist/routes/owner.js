import { Router } from "express";
import * as ownerController from "../controllers/owner.js";
const router = Router();
router.get("/", ownerController.getAll);
router.get("/:id", ownerController.getById);
router.post("/", ownerController.create);
router.put("/:id", ownerController.update);
router.delete("/:id", ownerController.remove);
export default router;
//# sourceMappingURL=owner.js.map