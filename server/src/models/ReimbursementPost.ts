// export class ReimbursementPost {
//     id: number;
//     reimbAmount: number;
//     reimbSubmitted: Date;
//     reimbDescription: string;
//     reimbReceipt: string;
//     reimbAuthor: number;
//     reimbStatusId: number;
//     reimbTypeId: number;

//     static from(obj:ReimbursementPostRow): ReimbursementPost {
//         const reimbursement = new ReimbursementPost(
//             obj.id,
//             obj.reimb_amount,
//             new Date(),
//             obj.reimb_description,
//             obj.reimb_receipt,
//             obj.reimb_author,
//             obj.reimb_status_id,
//             obj.reimb_type_id
//         );
//         return reimbursement;
//     }

//     constructor(
//         id: number,
//         reimbAmount: number,
//         reimbSubmitted: Date,
//         reimbDescription: string,
//         reimbReceipt: string,
//         reimbAuthor: number,
//         reimbStatusId: number,
//         reimbTypeId: number
//     )
//     {
//     this.id = id;
//     this.reimbAmount = reimbAmount;
//     this.reimbSubmitted = reimbSubmitted;
//     this.reimbDescription = reimbDescription;
//     this.reimbReceipt = reimbReceipt;
//     this.reimbAuthor = reimbAuthor;
//     this.reimbStatusId = reimbStatusId;
//     this.reimbTypeId = reimbTypeId;
//     }
// }

// export interface ReimbursementPostRow {
//     id: number;
//     reimb_amount: number;
//     reimb_submitted: string;
//     reimb_description: string;
//     reimb_receipt: string;
//     reimb_author: number;
//     reimb_status_id: number;
//     reimb_type_id: number;
// }

/* istanbul ignore file */
export class ReimbursementPost {
    reimbId: number;
    reimbAmount: number;
    reimbSubmitted: Date;
    reimbResolved: null;
    reimbDescription: string;
    reimbReceipt: string;
    reimbAuthor: number;
    reimbResolver: number;
    reimbStatusId: number;
    reimbTypeId: number;

    static from(obj: ReimbursementPostRow): ReimbursementPost {
        const reimbursement = new ReimbursementPost(
            obj.reimb_id,
            obj.reimb_amount,
            new Date(obj.reimb_submitted),
            null,
            obj.reimb_description,
            obj.reimb_receipt,
            obj.reimb_author,
            obj.reimb_resolver,
            obj.reimb_status_id,
            obj.reimb_type_id
        );
        return reimbursement;
    }

    constructor(reimbId: number,
        reimbAmount: number,
        reimbSubmitted: Date,
        reimbResolved: null,
        reimbDescription: string,
        reimbReceipt: string,
        reimbAuthor: number,
        reimbResolver: number,
        reimbStatusId: number,
        reimbTypeId: number
    ) {
        this.reimbId = reimbId;
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

export interface ReimbursementPostRow {
    reimb_id: number;
    reimb_amount: number;
    reimb_submitted: Date;
    reimb_resolved: null;
    reimb_description: string;
    reimb_receipt: string;
    reimb_author: number;
    reimb_resolver: number;
    reimb_status_id: number;
    reimb_type_id: number;
}