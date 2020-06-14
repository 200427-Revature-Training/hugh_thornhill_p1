import { Reimbursement } from '../models/Reimbursement';
import { ReimbursementPatch } from '../models/ReimbursementPatch';
import { ReimbursementManagerView } from '../models/ReimbursementManagerView';
import * as managerDao from '../daos/manager-dao';
import { User } from '../models/User';

// export function getUser(email: string): Promise<User[]> {
//     //console.log(email, "Reached Serivce");
//     return managerDao.getUser(email);
// }

export function getAllReimbursements(): Promise<ReimbursementManagerView[]> {
    return managerDao.getAllReimbursements();
}

export function getReimbursementById(id: number): Promise<ReimbursementManagerView> {
    return managerDao.getReimbursementById(id);
}

// Need to figure out why id is same as status id
export function getAllReimbursementsByStatus(reimbStatusId: number): Promise<Reimbursement[]> {
    return managerDao.getAllReimbursementsByStatus(reimbStatusId);
}

export function patchReimbursement(input: any): Promise<ReimbursementPatch> {

    const reimbursementPatch = new ReimbursementPatch(
        input.id,
        input.reimbAmount,
        input.reimbDescription,
        input.reimbReceipt,
        input.reimbResolver,
        input.reimbStatusId,
        input.reimbTypeId
    );

    if(!reimbursementPatch.id) {
        throw new Error('400');
    }

    return managerDao.patchReimbursement(reimbursementPatch);
}