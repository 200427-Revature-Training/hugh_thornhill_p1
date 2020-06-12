export class ReimbursementPatch {
    id: number;
    reimbAmount: number;
    reimbDescription: string;
    reimbReceipt: string;
    reimbResolver: number;
    reimbStatusId: number;
    reimbTypeId: number;

    static from(obj:ReimbursementPatchRow): ReimbursementPatch {
        const reimbursement = new ReimbursementPatch(
            obj.id,
            obj.reimb_amount,
            obj.reimb_description,
            obj.reimb_receipt,
            obj.reimb_resolver,
            obj.reimb_status_id,
            obj.reimb_type_id
        );
        return reimbursement;
    }

    constructor(
        id: number,
        reimbAmount: number,
        reimbDescription: string,
        reimbReceipt: string,
        reimbResolver: number,
        reimbStatusId: number,
        reimbTypeId: number
    )
    {
    this.id = id;
    this.reimbAmount = reimbAmount;
    this.reimbDescription = reimbDescription;
    this.reimbReceipt = reimbReceipt;
    this.reimbResolver = reimbResolver;
    this.reimbStatusId = reimbStatusId;
    this.reimbTypeId = reimbTypeId;
    }
}

export interface ReimbursementPatchRow {
    id: number;
    reimb_amount: number;
    reimb_description: string;
    reimb_receipt: string;
    reimb_resolver: number;
    reimb_status_id: number;
    reimb_type_id: number;
}