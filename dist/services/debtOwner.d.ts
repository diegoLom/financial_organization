import type { Prisma } from "../generated/prisma/client.js";
export declare function getByDebt(debtId: number): Promise<{
    id: number;
    splitAmount: import("@prisma/client-runtime-utils").Decimal | null;
    debtId: number;
    ownerId: number;
}[]>;
export declare function getById(id: number): Promise<{
    id: number;
    splitAmount: import("@prisma/client-runtime-utils").Decimal | null;
    debtId: number;
    ownerId: number;
}>;
export declare function assignOwner(data: Prisma.DebtOwnerCreateInput): Promise<{
    id: number;
    splitAmount: import("@prisma/client-runtime-utils").Decimal | null;
    debtId: number;
    ownerId: number;
}>;
export declare function updateSplit(id: number, data: Prisma.DebtOwnerUpdateInput): Promise<{
    id: number;
    splitAmount: import("@prisma/client-runtime-utils").Decimal | null;
    debtId: number;
    ownerId: number;
}>;
export declare function removeOwner(id: number): Promise<void>;
//# sourceMappingURL=debtOwner.d.ts.map