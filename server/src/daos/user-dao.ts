import { db } from './db';
import { User, UserRow } from '../models/User';

export function registerUser(user:User): Promise<User>{
    const sql = 'INSERT INTO ers_users (ers_username, ers_password, \
        user_first_name, user_last_name, user_email, user_role_id) \
        VALUES ($1, $2, $3, $4, $5, $6)';

    return db.query<UserRow>(sql, [
      user.userName,
      user.password,
      user.firstName,
      user.lastName,
      user.email,
      user.roleId
    ]).then(result => result.rows.map(row => User.from(row))[0]).catch((e) => {
      console.log(e);
       return undefined;
    }
)}

export function loginUser(user: User):Promise<User> {
    const sql = 'SELECT * from ers_users Where ers_username= $1';

    return db.query<UserRow>(sql, [
      user.userName
    ]).then(result => result.rows.map(row => User.from(row))[0]);
}

// export function getUserById(id: number):Promise<User> {
//     const sql = 'SELECT * FROM ers_users WHERE id = $1';
//     return db.query<UserRow>(sql,[id])
//     .then(result => result.rows.map(row => User.from(row))[0]);
// }