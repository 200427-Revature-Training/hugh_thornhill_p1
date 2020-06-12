export class ReimbursementStatus {
    id: number;
    reimbStatus: string;

    static from(obj: ReimbursementStatusRow): ReimbursementStatus {
        const reimbursementStatus = new ReimbursementStatus(
            obj.id,
            obj.reimb_status
        );
        return reimbursementStatus;
    }

    constructor(
        id: number,
        reimbStatus: string
    )
    {
    this.id = id;
     this.reimbStatus = reimbStatus;
    }
}

export interface ReimbursementStatusRow {
    id: number;
    reimb_status: string;
}