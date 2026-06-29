import express from "express";
import { errorHandler } from "./middlewares/global.js";
import ownerRouter from "./routes/owner.js";
import cardRouter from "./routes/card.js";
import categoryRouter from "./routes/category.js";
import debtRouter from "./routes/debt.js";
import debtOwnerRouter from "./routes/debtOwner.js";

const app = express();

app.use(express.json());

app.use("/owners", ownerRouter);
app.use("/cards", cardRouter);
app.use("/categories", categoryRouter);
app.use("/debts", debtRouter);
app.use("/debt-owners", debtOwnerRouter);

app.use(errorHandler);

export default app;
