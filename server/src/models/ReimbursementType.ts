export class ReimbursementType {
    id: number;
    reimbType: string;

    static from(obj: ReimbursementTypeRow): ReimbursementType {
        const reimbursementType = new ReimbursementType(
            obj.id,
            obj.reimb_type
        );
        return reimbursementType;
    }

    constructor(
        id: number,
        reimbType: string
    )
    {
    this.id = id;
    this.reimbType = reimbType;
    }
}

export interface ReimbursementTypeRow {
    id: number;
    reimb_type: string;
}