import type { Card, Prisma } from "../generated/prisma/client.js";
export declare function findAll(): Promise<Card[]>;
export declare function findById(id: number): Promise<Card | null>;
export declare function create(data: Prisma.CardCreateInput): Promise<Card>;
export declare function update(id: number, data: Prisma.CardUpdateInput): Promise<Card>;
export declare function remove(id: number): Promise<void>;
//# sourceMappingURL=card.d.ts.map