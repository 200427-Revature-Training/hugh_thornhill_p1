
import { User } from '../models/User';
import * as userDao from '../daos/user-dao';

export function registerUser(user:User): Promise<User>{
    console.log('Reached Register User Service')
    return userDao.registerUser(user);
}

export function loginUser(user:User): Promise<User>{
    console.log('Login for ' + user);
    return userDao.loginUser(user);
}

// export function getUserById(id: number): Promise<User> {
//     return userDao.getUserById(id);
// }