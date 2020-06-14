import { internalAxios } from './internal-axios';
import { Reimbursement } from '../models/Reimbursement';
import { ReimbursementPost } from '../models/ReimbursementPost';
import { ReimbursementPatch } from '../models/ReimbursementPatch';

export const getAllReimbursements = async () => {
    return response.data.map(reimbursement => {
        reimbursement.reimbSubmitted = new Date(reimbursement.reimbSubmitted);
        return reimbursement;
    });
}
