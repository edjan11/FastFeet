import {randomUUID} from "crypto";
import { Entity } from "../../core/entities/entity";

interface AdminProps {
    name: string
    document: string
    password: string
}

export class Admin extends Entity<AdminProps>{

    get name(){
        return this.props.name
    }

    static create(props: AdminProps, id?: string){
        const admin = new Admin(props, id)

        return admin
    }
}