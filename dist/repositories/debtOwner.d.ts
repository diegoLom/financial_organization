import type { DebtOwner, Prisma } from "../generated/prisma/client.js";
export declare function findByDebt(debtId: number): Promise<DebtOwner[]>;
export declare function findById(id: number): Promise<DebtOwner | null>;
export declare function create(data: Prisma.DebtOwnerCreateInput): Promise<DebtOwner>;
export declare function update(id: number, data: Prisma.DebtOwnerUpdateInput): Promise<DebtOwner>;
export declare function remove(id: number): Promise<void>;
export declare function removeByDebt(debtId: number): Promise<void>;
//# sourceMappingURL=debtOwner.d.ts.map