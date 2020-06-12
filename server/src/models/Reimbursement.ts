export class Reimbursement {
    id: number;
    reimbAmount: number;
    reimbSubmitted: Date;
    reimbResolved: Date;
    reimbDescription: string;
    reimbReceipt: string;
    reimbAuthor: number;
    reimbResolver: number;
    reimbStatusId: number;
    reimbTypeId: number;

    static from(obj:ReimbursementRow): Reimbursement {
        const reimbursement = new Reimbursement(
            obj.id,
            obj.reimb_amount,
            new Date(obj.reimb_submitted),
            new Date(obj.reimb_resolved),
            obj.reimb_description,
            obj.reimb_receipt,
            obj.reimb_author,
            obj.reimb_resolver,
            obj.reimb_status_id,
            obj.reimb_type_id
        );
        return reimbursement;
    }

    constructor(
        id: number,
        reimbAmount: number,
        reimbSubmitted: Date,
        reimbResolved: Date,
        reimbDescription: string,
        reimbReceipt: string,
        reimbAuthor: number,
        reimbResolver: number,
        reimbStatusId: number,
        reimbTypeId: number
    )
    {
    this.id = id;
    this.reimbAmount = reimbAmount;
    this.reimbSubmitted = reimbSubmitted;
    this.reimbResolved = reimbResolved;
    this.reimbDescription = reimbDescription;
    this.reimbReceipt = reimbReceipt;
    this.reimbAuthor = reimbAuthor;
    this.reimbResolver = reimbResolver;
    this.reimbStatusId = reimbStatusId;
    this.reimbTypeId = reimbTypeId;
    }
}

export interface ReimbursementRow {
    id: number;
    reimb_amount: number;
    reimb_submitted: string;
    reimb_resolved: string;
    reimb_description: string;
    reimb_receipt: string;
    reimb_author: number;
    reimb_resolver: number;
    reimb_status_id: number;
    reimb_type_id: number;
}