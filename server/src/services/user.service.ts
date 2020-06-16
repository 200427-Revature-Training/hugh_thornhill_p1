
import { User } from '../models/User';
import * as userDao from '../daos/user-dao';

export function registerUser(user:User): Promise<User>{
    console.log('Reached Register User Service')
    return userDao.registerUser(user);
}

export function loginUser(user:User): Promise<User>{
    const newLogin = new User(
        user.id,
        user.userName,
        user.password,
        user.firstName,
        user.lastName,
        user.email,
        user.roleId
    );
    if (user.userName && user.password) {
        return userDao.loginUser(newLogin);
    } else {
        return new Promise((resolve, reject) => reject(422));
    }
}

// export function getUserById(id: number): Promise<User> {
//     return userDao.getUserById(id);
// }