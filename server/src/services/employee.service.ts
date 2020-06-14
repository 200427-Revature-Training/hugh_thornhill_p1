// employee.service
import { Reimbursement } from '../models/Reimbursement';
import { ReimbursementEmployeeView } from '../models/ReimbursementEmployeeView';
import { ReimbursementPost } from '../models/ReimbursementPost';
// import { User } from '../models/User';
import * as employeeDao from '../daos/employee-dao';

// export function getUser(email: string): Promise<User[]> {
//     // console.log(email, "Reached Serivce");
//     return employeeDao.getUser(email);
// }

export function getAllReimbursements(reimbAuthor: number): Promise<ReimbursementEmployeeView[]> {
    return employeeDao.getAllReimbursements(reimbAuthor);
}
// DOES NOT WORK
// export function getReimbursementById(id: number): Promise<Reimbursement> {
//     return employeeDao.getReimbursementById(id);
// }

export function saveReimbursement(reimbursement: ReimbursementPost): Promise<ReimbursementPost> {
    // const newReimbursementPost = new ReimbursementPost(
    //     undefined,
    //     reimbursement.reimbAmount,
    //     new Date(), // current date
    //     reimbursement.reimbDescription,
    //     reimbursement.reimbReceipt,
    //     reimbursement.reimbAuthor, // server
    //     1,
    //     reimbursement.reimbTypeId
    // );
    // if(
    //     reimbursement.reimbAmount &&
    //     reimbursement.reimbSubmitted &&
    //     reimbursement.reimbDescription &&
    //     reimbursement.reimbReceipt &&
    //     reimbursement.reimbAuthor &&
    //     reimbursement.reimbStatusId &&
    //     reimbursement.reimbTypeId
    // ) {
    //     return employeeDao.saveReimbursement(newReimbursementPost);
    // } else {
    //     // console.log(newReimbursement);
        // return new Promise((resolve, reject) => reject(422));
    // }
    return employeeDao.saveReimbursement(reimbursement);
}