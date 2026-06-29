import type { Category, Prisma } from "../generated/prisma/client.js";
export declare function findAll(): Promise<Category[]>;
export declare function findById(id: any): Promise<Category | null>;
export declare function create(data: Prisma.CategoryCreateInput): Promise<Category>;
export declare function update(id: number, data: Prisma.CategoryUpdateInput): Promise<Category>;
export declare function remove(id: number): Promise<void>;
//# sourceMappingURL=category.d.ts.map