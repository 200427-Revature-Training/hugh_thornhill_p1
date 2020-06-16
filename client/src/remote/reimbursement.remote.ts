import { authAxios } from './internal-axios';
import { ReimbursementEmployeeView } from '../models/ReimbursementEmployeeView';
import { ReimbursementManagerView } from '../models/ReimbursementManagerView';
import { ReimbursementPost } from '../models/ReimbursementPost';
import { ReimbursementPatch } from '../models/ReimbursementPatch';
import { Reimbursement } from '../models/Reimbursement';

export const getReimbursementsByAuthorId = async (reimbAuthor: number) => {
    const response = await authAxios.get<ReimbursementEmployeeView[]>(`/employee/${reimbAuthor}/reimbursement`);
    // return response.data.map(reimbursement => {
    //     reimbursement.reimbSubmitted = new Date(reimbursement.reimbSubmitted);
    //     return reimbursement;
    // });
    return response;
}

export const saveReimbursement = async (reimbursement: ReimbursementPost) => {
    const response = await authAxios.post<ReimbursementPost>('/employee', reimbursement);
    return response;
}

export const getAllReimbursements = async () => {
    const response = await authAxios.get<ReimbursementManagerView[]>('/manager/reimbursements/all');
    return response;
}

export const getReimbursementsById = async (id: number) => {
    const response = await authAxios.get<Reimbursement[]>(`/manager/reimbursements/${id}`);;
    return response;
}

export const getAllReimbursementsByStatus = async (statusId: number) => {
    const response = await authAxios.get<ReimbursementManagerView[]>(`/manager/status/${statusId}`);
    return response;
}

export const patchReimbursement = async (reimbursementPatch: ReimbursementPatch) => {
    const response = await authAxios.patch('/manager', reimbursementPatch);
    return response;
}