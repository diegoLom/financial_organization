import { prisma } from "../lib/prisma.js";
export async function findAll() {
    return prisma.debt.findMany({
        include: {
            card: true,
            category: true,
            debtOwners: { include: { owner: true } },
        },
    });
}
export async function findById(id) {
    return prisma.debt.findUnique({
        where: { id },
        include: {
            card: true,
            category: true,
            debtOwners: { include: { owner: true } },
        },
    });
}
export async function create(data) {
    return prisma.debt.create({ data });
}
export async function update(id, data) {
    return prisma.debt.update({ where: { id }, data });
}
export async function remove(id) {
    await prisma.debt.delete({ where: { id } });
}
//# sourceMappingURL=debt.js.map