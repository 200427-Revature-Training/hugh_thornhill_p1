export class ReimbursementManagerView {
    id: number;
    reimbAmount: number;
    reimbSubmitted: Date;
    reimbResolved: Date;
    reimbDescription: string;
    reimbReceipt: string;
    authorFirstName: string;
    authorLastName: string;
    reimbResolver: number;
    reimbStatus: string;
    reimbType: string;

    static from(obj:ReimbursementManagerViewRow): ReimbursementManagerView {
        const reimbursementManager = new ReimbursementManagerView(
            obj.id,
            obj.reimb_amount,
            new Date(obj.reimb_submitted),
            new Date(obj.reimb_resolved),
            obj.reimb_description,
            obj.reimb_receipt,
            obj.author_first_name,
            obj.author_last_name,
            obj.reimb_resolver,
            obj.reimb_status,
            obj.reimb_type
        );
        return reimbursementManager;
    }

    constructor(
        id: number,
        reimbAmount: number,
        reimbSubmitted: Date,
        reimbResolved: Date,
        reimbDescription: string,
        reimbReceipt: string,
        authorFirstName: string,
        authorLastName: string,
        reimbResolver: number,
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
    this.authorFirstName = authorFirstName;
    this.authorLastName = authorLastName;
    this.reimbResolver = reimbResolver;
    this.reimbStatus = reimbStatus;
    this.reimbType = reimbType;
    }
}

export interface ReimbursementManagerViewRow {
    id: number;
    reimb_amount: number;
    reimb_submitted: string;
    reimb_resolved: string;
    reimb_description: string;
    reimb_receipt: string;
    author_first_name: string;
    author_last_name: string;
    reimb_resolver: number;
    reimb_status: string;
    reimb_type: string;
}