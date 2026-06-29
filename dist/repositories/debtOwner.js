import { prisma } from "../lib/prisma.js";
export async function findByDebt(debtId) {
    return prisma.debtOwner.findMany({
        where: { debtId },
        include: { owner: true },
    });
}
export async function findById(id) {
    return prisma.debtOwner.findUnique({
        where: { id },
        include: { owner: true, debt: true },
    });
}
export async function create(data) {
    return prisma.debtOwner.create({ data });
}
export async function update(id, data) {
    return prisma.debtOwner.update({ where: { id }, data });
}
export async function remove(id) {
    await prisma.debtOwner.delete({ where: { id } });
}
export async function removeByDebt(debtId) {
    await prisma.debtOwner.deleteMany({ where: { debtId } });
}
//# sourceMappingURL=debtOwner.js.map