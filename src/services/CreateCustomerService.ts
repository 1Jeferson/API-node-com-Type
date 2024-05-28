import prismaClient from "../prisma";

interface ICreateCustomerProps {
    name: string;
    email: string;
}

class CreateCustomerService {
    async execute({ name, email }: ICreateCustomerProps) {

        if (!name || !email) {
            throw new Error("Todos os campos devem ser preenchidos")
        }

        const customer = await prismaClient.customer.create({
            data: {
                name,
                email,
                status: true
            }
        })

        return customer
    }
}

export { CreateCustomerService }