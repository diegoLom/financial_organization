import { prisma } from "../lib/prisma.js";
export async function findAll() {
    return prisma.card.findMany();
}
export async function findById(id) {
    return prisma.card.findUnique({ where: { id } });
}
export async function create(data) {
    return prisma.card.create({ data });
}
export async function update(id, data) {
    return prisma.card.update({ where: { id }, data });
}
export async function remove(id) {
    await prisma.card.delete({ where: { id } });
}
//# sourceMappingURL=card.js.map