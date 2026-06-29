import type { Prisma } from "../generated/prisma/client.js";
export declare function getAll(): Promise<{
    name: string;
    id: number;
    email: string | null;
    createdAt: Date;
}[]>;
export declare function getById(id: number): Promise<{
    name: string;
    id: number;
    email: string | null;
    createdAt: Date;
}>;
export declare function createOwner(data: Prisma.OwnerCreateInput): Promise<{
    name: string;
    id: number;
    email: string | null;
    createdAt: Date;
}>;
export declare function updateOwner(id: number, data: Prisma.OwnerUpdateInput): Promise<{
    name: string;
    id: number;
    email: string | null;
    createdAt: Date;
}>;
export declare function deleteOwner(id: number): Promise<void>;
//# sourceMappingURL=owner.d.ts.map