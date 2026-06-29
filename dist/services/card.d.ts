import type { Prisma } from "../generated/prisma/client.js";
export declare function getAll(): Promise<{
    name: string;
    id: number;
    createdAt: Date;
    lastDigits: string | null;
    updateAt: Date;
}[]>;
export declare function getById(id: number): Promise<{
    name: string;
    id: number;
    createdAt: Date;
    lastDigits: string | null;
    updateAt: Date;
}>;
export declare function createCard(data: Prisma.CardCreateInput): Promise<{
    name: string;
    id: number;
    createdAt: Date;
    lastDigits: string | null;
    updateAt: Date;
}>;
export declare function updateCard(id: number, data: Prisma.CardUpdateInput): Promise<{
    name: string;
    id: number;
    createdAt: Date;
    lastDigits: string | null;
    updateAt: Date;
}>;
export declare function deleteCard(id: number): Promise<void>;
//# sourceMappingURL=card.d.ts.map