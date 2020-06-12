// manager-dao
/* istanbul ignore file */
import { db } from './db';
import { Reimbursement, ReimbursementRow } from '../models/Reimbursement';
import { ReimbursementPatch, ReimbursementPatchRow } from '../models/ReimbursementPatch';
import { ReimbursementManagerView, ReimbursementManagerViewRow } from '../models/ReimbursementManagerView';
import { User, UserRow } from '../models/User';
// import { ReimbursementStatus, ReimbursementStatusRow } from '../models/ReimbursementStatus';
// Manager login
export async function getUser(email: string): Promise<User[]>{
    const sql = `SELECT * FROM public.ers_users WHERE user_email = $1`;
    const result = await db.query<UserRow>(sql, [email]);
    return result.rows.map(User.from);
}
// Get all reimbursements
export function getAllReimbursements(): Promise<ReimbursementManagerView[]> {
    const sql = `SELECT * FROM public.ers_reimbursement_manager_view`;
       return db.query<ReimbursementManagerViewRow>(sql, []).then(result => {
           const rows: ReimbursementManagerViewRow[] = result.rows;
           const reimbursements: ReimbursementManagerView[] = rows.map(row => ReimbursementManagerView.from(row));
           return reimbursements;
       });
}
// Get reimbursement request by id
export function getReimbursementById(id: number): Promise<ReimbursementManagerView> {
    const sql = `SELECT * FROM ers_reimbursement_manager_view \
        WHERE id = $1`;
    return db.query<ReimbursementManagerViewRow>(sql,[id])
    .then(result => result.rows.map(row => ReimbursementManagerView.from(row))[0]);
}
// Get reimbursement requests by status id MAY POSSIBLY EDIT THIS METHOD
export function getAllReimbursementsByStatus(reimbStatusId: number): Promise<Reimbursement[]> {
    // const sql = `SELECT * FROM FROM public.ers_reimbursement_manager_view /
    //     WHERE public.ers_reimbursement_manager_view.reimb_status = $1`;
    // const sql = `SELECT * FROM ers_reimbursement LEFT JOIN ers_reimbursement_status \
    // ON ers_reimbursement.reimb_status_id = ers_reimbursement_status.id \
    // WHERE ers_reimbursement_status.id = $1`;
    const sql = `SELECT * FROM ers_reimbursement WHERE reimb_status_id = $1`;
        return db.query<ReimbursementRow>(sql, [reimbStatusId]).then(result => {
            const rows: ReimbursementRow[] = result.rows;
            const reimbursements: Reimbursement[] = rows.map(row => Reimbursement.from(row));
            return reimbursements;
        });
}
// Update a request
export function patchReimbursement(reimbursementPatch: ReimbursementPatch): Promise<ReimbursementPatch> {
    const sql = `UPDATE ers_reimbursement SET reimb_amount = COALESCE($1, reimb_amount), \
    reimb_description =  COALESCE($2, reimb_description), reimb_receipt = COALESCE($3, reimb_receipt), \
    reimb_resolver = COALESCE($4, reimb_resolver), reimb_status_id = COALESCE($5, reimb_status_id), \
    reimb_type_id = COALESCE($6, reimb_type_id) WHERE id = $7 RETURNING *`;
    const params = [
                    reimbursementPatch.reimbAmount,
                    reimbursementPatch.reimbDescription,
                    reimbursementPatch.reimbReceipt,
                    reimbursementPatch.reimbResolver,
                    reimbursementPatch.reimbStatusId,
                    reimbursementPatch.reimbTypeId,
                    reimbursementPatch.id
                    ];
        return db.query<ReimbursementPatchRow>(sql, params)
            .then(result => result.rows.map(row => ReimbursementPatch.from(row))[0]);
}