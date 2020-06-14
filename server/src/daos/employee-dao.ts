/* istanbul ignore file */
import { db } from './db';
import { Reimbursement, ReimbursementRow } from '../models/Reimbursement';
import { ReimbursementEmployeeView, ReimbursementEmployeeViewRow } from '../models/ReimbursementEmployeeView';
import { ReimbursementPost, ReimbursementPostRow } from '../models/ReimbursementPost';

// Old Employee login
// export async function getUser(email: string): Promise<User[]>{
//     const sql = `SELECT * FROM public.ers_users WHERE user_email = $1`;
//     const result = await db.query<UserRow>(sql, [email]);
//     return result.rows.map(User.from);
// }

// Get all reimbursements for employee and status
export function getAllReimbursements(reimbAuthor: number): Promise<ReimbursementEmployeeView[]> {
     const sql = `SELECT * FROM public.ers_reimbursement_employee_view WHERE reimb_author = $1`;
        return db.query<ReimbursementEmployeeViewRow>(sql, [reimbAuthor]).then(result => {
            const rows: ReimbursementEmployeeViewRow[] = result.rows;
            const reimbursements: ReimbursementEmployeeView[] = rows.map(row => ReimbursementEmployeeView.from(row));
            // console.log(reimbursements);
            return reimbursements;
        });
}

// Save new remibursement
export function saveReimbursement(reimbursement: ReimbursementPost): Promise<ReimbursementPost> {
    const sql = `INSERT INTO public.ers_reimbursement (reimb_amount, reimb_submitted, \
        reimb_resolved, reimb_description, reimb_receipt, reimb_author, reimb_resolver, \
        reimb_status_id, reimb_type_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`;
        return db.query<ReimbursementPostRow>(sql, [
            reimbursement.reimbAmount,
            new Date(),
            null,
            reimbursement.reimbDescription,
            reimbursement.reimbReceipt,
            reimbursement.reimbAuthor,
            null,
            1,
            reimbursement.reimbTypeId
        ]).then(result => result.rows.map(row => ReimbursementPost.from(row))[0]);
}