import { internalAxios } from './internal-axios';
import { Reimbursement } from '../models/Reimbursement'

export const getAllReimbursements = async () => {
    return response.data.map(reimbursement => {
        reimbursement.reimbSubmitted = new Date(reimbursement.reimbSubmitted);
        return reimbursement;
    });
}
