import prismaClient from "../prisma";

interface IDeleteCustomerProps {
    id: string
}

class DeleteCustomerService {
    async execute({id}: IDeleteCustomerProps) {

        if (!id) {
            throw new Error("Id informado inválido")
        }

        const findCustomer = await prismaClient.customer.findFirst({
            where: {
                id: id
            }
        })

        if (!findCustomer) {
            throw new Error("Cliente não encontrado")
        }


        await prismaClient.customer.delete({ where: { id: findCustomer.id } });

        return { message: "Deletado com sucesso"}
    }
}

export { DeleteCustomerService }