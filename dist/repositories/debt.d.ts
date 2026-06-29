import type { Debt, Prisma } from "../generated/prisma/client.js";
export declare function findAll(): Promise<Debt[]>;
export declare function findById(id: number): Promise<Debt | null>;
export declare function create(data: Prisma.DebtCreateInput): Promise<Debt>;
export declare function update(id: number, data: Prisma.DebtUpdateInput): Promise<Debt>;
export declare function remove(id: number): Promise<void>;
//# sourceMappingURL=debt.d.ts.map