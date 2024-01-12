import {randomUUID} from "crypto";
import {Entity} from "../../core/entities/entity";


interface DeliveryManProps {
    name: string
    document: string
    password: string
}

export class DeliveryMan extends Entity<DeliveryManProps>{

    get name() {
        return this.props.name
    }

    static create(props: DeliveryManProps, id?: string) {
        const deliveryMan = new DeliveryMan(props, id)

        return deliveryMan
    }
}





