import React from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import  LoginComponent from '../components/login/login.component';
import { lazy, Suspense } from 'react';
import  HomeComponent from '../components/home.component';
import EmployeeComponent from '../components/employee.component';
import ManagerComponent from '../components/manager.component';

// const LoginComponent = lazy(() => import('./login/login.component').then(({LoginComponent}) => ({default: LoginComponent})))
export const MainComponent: React.FC = () => {

    return (
    <BrowserRouter>
        <div>
            <main>
            {/* <Suspense fallback = {<div>Falling back</div>}> */}
                <Switch>
                    <Route exact path = "/">
                        <LoginComponent />
                    </Route>
                    <Route path = "/home">
                        <HomeComponent />
                    </Route>
                    {/* <Route path = "/employee">
                        <EmployeeComponent />
                    </Route>
                    <Route path = "/manager">
                        <ManagerComponent />
                    </Route> */}
                </Switch>
               {/* </Suspense> */}
            </main>
        </div>
    </BrowserRouter>
    );
}
