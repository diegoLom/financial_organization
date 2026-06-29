import type { Owner, Prisma } from "../generated/prisma/client.js";
export declare function findAll(): Promise<Owner[]>;
export declare function findById(id: number): Promise<Owner | null>;
export declare function create(data: Prisma.OwnerCreateInput): Promise<Owner>;
export declare function update(id: number, data: Prisma.OwnerUpdateInput): Promise<Owner>;
export declare function remove(id: number): Promise<void>;
//# sourceMappingURL=owner.d.ts.map