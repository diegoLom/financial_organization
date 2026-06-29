import type { Prisma } from "../generated/prisma/client.js";
export declare function getAll(): Promise<{
    id: number;
    createdAt: Date;
    date: Date;
    description: string;
    amount: import("@prisma/client-runtime-utils").Decimal;
    type: import("../generated/prisma/enums.js").DebtType;
    categoryId: number;
    cardId: number;
}[]>;
export declare function getById(id: number): Promise<{
    id: number;
    createdAt: Date;
    date: Date;
    description: string;
    amount: import("@prisma/client-runtime-utils").Decimal;
    type: import("../generated/prisma/enums.js").DebtType;
    categoryId: number;
    cardId: number;
}>;
export declare function createDebt(data: Prisma.DebtCreateInput): Promise<{
    id: number;
    createdAt: Date;
    date: Date;
    description: string;
    amount: import("@prisma/client-runtime-utils").Decimal;
    type: import("../generated/prisma/enums.js").DebtType;
    categoryId: number;
    cardId: number;
}>;
export declare function updateDebt(id: number, data: Prisma.DebtUpdateInput): Promise<{
    id: number;
    createdAt: Date;
    date: Date;
    description: string;
    amount: import("@prisma/client-runtime-utils").Decimal;
    type: import("../generated/prisma/enums.js").DebtType;
    categoryId: number;
    cardId: number;
}>;
export declare function deleteDebt(id: number): Promise<void>;
//# sourceMappingURL=debt.d.ts.map