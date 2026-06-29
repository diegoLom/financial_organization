import { prisma } from "../lib/prisma.js";
export async function findAll() {
    return prisma.category.findMany();
}
export async function findById(id) {
    return prisma.category.findUnique({ where: { id } });
}
export async function create(data) {
    return prisma.category.create({ data });
}
export async function update(id, data) {
    return prisma.category.update({ where: { id }, data });
}
export async function remove(id) {
    await prisma.category.delete({ where: { id } });
}
//TODO: Handling collections/arrays javascript  
//# sourceMappingURL=category.js.map