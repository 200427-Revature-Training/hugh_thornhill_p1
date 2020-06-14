import React, { useState } from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom';

export const MainComponent: React.FC = () => {
    return (
    <div>
    <BrowserRouter>
        <main>
            <Switch>
                <Route path = "/">
                    <LoginComponent></LoginComponent>
                </Route>
                <Route path = "/reimbursement">
                    <EmployeeComponent></EmployeeComponent>
                </Route>
                <Route path = "/manager">
                    <ManagerComponent></ManagerComponent>
                </Route>
            </Switch>
        </main>
    </BrowserRouter>
    </div>
    );
}
