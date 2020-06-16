import React, { useState, useEffect } from "react";
import * as loginRemote from '../../remote/login.remote';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router-dom';

const LoginComponent: React.FC = () => {
    const [inputUserName, setInputUsername] = useState('');
    const [inputUserPassword, setInputUserPassword] = useState('');
    const history = useHistory();
    
    useEffect(() => {
        // login();
      }, []);
     
    let res: any;  
    const login = async () => {
        setInputUserPassword('');
        setInputUsername('');
        const accessToken = res.data.accessToken;
        const id = res.data.id;
        const firstName = res.data.firstName;
        const lastName = res.data.lastName;
        const email = res.data.email;
        const userRoleId = res.data.userRoleId;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('id', id);
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('email', email);
        localStorage.setItem('userRoleId', userRoleId);
        console.log(accessToken);
        history.push('/home');
    }
        const loginCredentials = async () => {
            const payload = {
                userName: inputUserName, 
                password: inputUserPassword
            };
            console.log(payload);
            try{
                res = await loginRemote.checkLogin(payload);
                await login();
            } catch(err) {
                console.log(err);
            }
        }

    return (
        <div>
            <h1>Sign In</h1>
            <form>
                <label>Username </label>
                <input value={inputUserName}
                id="username"
                name="username"
                onChange={(e) => setInputUsername(e.target.value)}>
                </input>
                <br />
                <label>Password </label>
                <input value = {inputUserPassword}
                type="password"
                id="password"
                name="password"
                onChange={(e) => setInputUserPassword(e.target.value)}>
                </input>
            </form>
            <button type = "submit"
            onClick={() => loginCredentials()}>Login</button>
        </div>
    );
}
export default withRouter(LoginComponent);