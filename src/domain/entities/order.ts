import {randomUUID} from "crypto";
import { Entity } from "../../core/entities/entity";

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

export class Order extends Entity<OrderProps>{

    get status() {
        return this.props.status
    }

    static create(props: OrderProps, id?: string) {
        const order = new Order(props, id)

        return order
    }

}
