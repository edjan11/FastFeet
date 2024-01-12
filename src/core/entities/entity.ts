import {randomUUID} from "crypto";


export abstract class Entity<Props> {
    private _id: string
    protected props: Props

    protected constructor(props: Props, id?: string) {
        this.props = props
        this._id = id ?? randomUUID()
    }
}