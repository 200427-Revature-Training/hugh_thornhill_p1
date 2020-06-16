export interface ReimbursementManagerView {
    id?: number;
    reimbAmount: number;
    reimbSubmitted: Date | string;
    reimbResolved: Date | string;
    reimbDescription: string;
    reimbReceipt: string;
    authorFirstName: string;
    authorLastName: string;
    reimbResolver: number;
    reimbStatus: string;
    reimbType: string;
}