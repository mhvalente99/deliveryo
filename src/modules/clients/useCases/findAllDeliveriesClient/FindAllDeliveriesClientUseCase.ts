import { prisma } from "../../../../database/prismaClient";

export class FindAllDeliveriesClientUseCase {
  async execute(id_client: string) {
    const deliveries = await prisma.clients.findUnique({
      where: {
        id: id_client,
      },
      include: {
        deliveries: true,
      },
    });

    return deliveries;
  }
}
