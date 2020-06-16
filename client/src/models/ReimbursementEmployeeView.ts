// export interface Reimbursement {
//     id?: number;
//     reimbAmount: number;
//     reimbSubmitted: Date | string;
//     reimbResolved: Date | string;
//     reimbDescription: string;
//     reimbReceipt: string;
//     reimbAuthor: string;
//     reimbResolver: number;
//     reimbStatus: string;
//     reimbType: string;
// }

export interface ReimbursementEmployeeView {
    id?: number;
    reimbAmount: number;
    reimbSubmitted: Date | string;
    reimbResolved: Date | string;
    reimbDescription: string;
    reimbReceipt: string;
    reimbAuthor: number;
    resolverFirstName: string;
    resolverLastName: string;
    reimbStatus: string;
    reimbType: string;
}