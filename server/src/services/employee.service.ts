// employee.service
import { Reimbursement } from '../models/Reimbursement';
import { ReimbursementEmployeeView } from '../models/ReimbursementEmployeeView';
import { User } from '../models/User';
import * as employeeDao from '../daos/employee-dao';
export function getUser(email: string): Promise<User[]> {
    //console.log(email, "Reached Serivce");
    return employeeDao.getUser(email);
}
export function getAllReimbursements(reimbAuthor: number): Promise<ReimbursementEmployeeView[]> {
    return employeeDao.getAllReimbursements(reimbAuthor);
}
// DOES NOT WORK
// export function getReimbursementById(id: number): Promise<Reimbursement> {
//     return employeeDao.getReimbursementById(id);
// }
// DOES NOT WORK
export function saveReimbursement(reimbursement: Reimbursement): Promise<Reimbursement> {
    const newReimbursement = new Reimbursement(
        undefined,
        reimbursement.reimbAmount,
        new Date(reimbursement.reimbSubmitted),
        new Date(reimbursement.reimbResolved),
        reimbursement.reimbDescription,
        reimbursement.reimbReceipt,
        reimbursement.reimbAuthor,
        reimbursement.reimbResolver,
        reimbursement.reimbStatusId,
        reimbursement.reimbTypeId
    );
    if(
        reimbursement.reimbAmount &&
        reimbursement.reimbSubmitted &&
        reimbursement.reimbResolved &&
        reimbursement.reimbDescription &&
        reimbursement.reimbReceipt &&
        reimbursement.reimbAuthor &&
        reimbursement.reimbResolver &&
        reimbursement.reimbStatusId &&
        reimbursement.reimbTypeId
    ) {
        return employeeDao.saveReimbursement(newReimbursement);
    } else {
        console.log(newReimbursement);
        return new Promise((resolve, reject) => reject(422));
    }
}