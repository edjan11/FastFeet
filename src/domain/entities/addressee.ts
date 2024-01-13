import {randomUUID} from "crypto";
import { Entity } from "../../core/entities/entity";

interface AddresseeProps {
    name: string
    contact: string
    document: string
    addressId: string
}

export class Addressee extends Entity<AddresseeProps>{    

        get name() {
            return this.props.name
        }

        static create(props: AddresseeProps, id?: string) {
            const addressee = new Addressee(props, id)

            return addressee 
        }
}

