import {randomUUID} from "crypto";

interface AddresseeProps {
    name: string
    contact: string
    document: string
    addressId: string
}

export class Addressee {
        public id: string
        public props: AddresseeProps 

    constructor(props: AddresseeProps, id?: string) {
            this.id = id ?? randomUUID()
            this.props = props
    }
}

