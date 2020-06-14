export interface ReimbursementPatch {
    id?: number;
    reimbAmount: number;
    reimbResolved: Date;
    reimbDescription: string;
    reimbReceipt: string;
    reimbResolver: number;
    reimbStatusId: number;
    reimbTypeId: number;
}