import { internalAxios } from './internal-axios';
import { User, Credentials } from '../models/User';

// interface Login {
//     accessToken: { accessToken: string },
//     user: User
// }

// export const login = async(userCredentials: Credentials) => {

//     const res = await internalAxios.post<Login>('/user/login', userCredentials);
//     const role = res.data.user.roleId;
//     let roleString = role.toString();
//     localStorage.setItem('accessToken', res.data.accessToken.accessToken);
//     console.log(res.data.accessToken.accessToken);
//     localStorage.setItem('role', roleString);
//     localStorage.setItem('userId', res.data.user.id.toString());
//     localStorage.setItem('userName', res.data.user.userName);
//     return res;
// }

export const checkLogin = async (loginCredentials: Credentials) => {
    const res = await internalAxios.post('/user/login', loginCredentials);
    return res;
}