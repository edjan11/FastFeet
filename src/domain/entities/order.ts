import {randomUUID} from "crypto";

interface OrderProps {
    description: string
    weight: number
    addresseeId: string
    deliverymanId: string
    status: string
    createdAt: Date
    dateOfWithdrawal: Date
    deliveryDate: Date
}

export class Order {
    public id: string
    public props: OrderProps

    constructor(props: OrderProps, id?: string) {
        this.id = id ?? randomUUID()
        this.props = props
    }

}
