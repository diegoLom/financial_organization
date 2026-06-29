import { prisma } from "../lib/prisma.js";
export async function findAll() {
    return prisma.owner.findMany();
}
export async function findById(id) {
    return prisma.owner.findUnique({ where: { id } });
}
export async function create(data) {
    return prisma.owner.create({ data });
}
export async function update(id, data) {
    return prisma.owner.update({ where: { id }, data });
}
export async function remove(id) {
    await prisma.owner.delete({ where: { id } });
}
//# sourceMappingURL=owner.js.map