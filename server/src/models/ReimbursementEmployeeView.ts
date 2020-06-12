export class ReimbursementEmployeeView {
    id: number;
    reimbAmount: number;
    reimbSubmitted: Date;
    reimbResolved: Date;
    reimbDescription: string;
    reimbReceipt: string;
    reimbAuthor: number;
    resolverFirstName: string;
    resolverLastName: string;
    reimbStatus: string;
    reimbType: string;

    static from(obj:ReimbursementEmployeeViewRow): ReimbursementEmployeeView {
        const reimbursementEmployee = new ReimbursementEmployeeView(
            obj.id,
            obj.reimb_amount,
            new Date(obj.reimb_submitted),
            new Date(obj.reimb_resolved),
            obj.reimb_description,
            obj.reimb_receipt,
            obj.reimb_author,
            obj.resolver_first_name,
            obj.resolver_last_name,
            obj.reimb_status,
            obj.reimb_type
        );
        return reimbursementEmployee;
    }

    constructor(
        id: number,
        reimbAmount: number,
        reimbSubmitted: Date,
        reimbResolved: Date,
        reimbDescription: string,
        reimbReceipt: string,
        reimbAuthor: number,
        resolverFirstName: string,
        resolverLastName: string,
        reimbStatus: string,
        reimbType: string
    )
    {
    this.id = id;
    this.reimbAmount = reimbAmount;
    this.reimbSubmitted = reimbSubmitted;
    this.reimbResolved = reimbResolved;
    this.reimbDescription = reimbDescription;
    this.reimbReceipt = reimbReceipt;
    this.reimbAuthor = reimbAuthor;
    this.resolverFirstName = resolverFirstName;
    this.resolverLastName = resolverLastName;
    this.reimbStatus = reimbStatus;
    this.reimbType = reimbType;
    }
}

export interface ReimbursementEmployeeViewRow {
    id: number;
    reimb_amount: number;
    reimb_submitted: string;
    reimb_resolved: string;
    reimb_description: string;
    reimb_receipt: string;
    reimb_author: number;
    resolver_first_name: string;
    resolver_last_name: string;
    reimb_status: string;
    reimb_type: string;
}