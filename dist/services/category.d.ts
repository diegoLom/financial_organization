import type { Prisma } from "../generated/prisma/client.js";
export declare function getAll(): Promise<{
    name: string;
    id: number;
}[]>;
export declare function getById(id: number): Promise<{
    name: string;
    id: number;
}>;
export declare function createCategory(data: Prisma.CategoryCreateInput): Promise<{
    name: string;
    id: number;
}>;
export declare function updateCategory(id: number, data: Prisma.CategoryUpdateInput): Promise<{
    name: string;
    id: number;
}>;
export declare function deleteCategory(id: number): Promise<void>;
//# sourceMappingURL=category.d.ts.map