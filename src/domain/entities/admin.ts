import {randomUUID} from "crypto";

interface AdminProps {
    name: string
    document: string
    password: string
}

export class Admin {
    public id: string
    public props: AdminProps

    constructor(props: AdminProps, id?: string) {
        this.id = id ?? randomUUID()
        this.props = props
    }
}