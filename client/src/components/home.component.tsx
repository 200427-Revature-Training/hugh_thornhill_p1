import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { useHistory } from 'react-router';

const HomeComponent: React.FC = () => {
    const history = useHistory();
    const logOutButton = () => {
        localStorage.clear();
        history.push('/');
      }

    return (
        <div>
            <h1>Welcome!</h1>
            <form>
            <button type = "submit" onClick = {() => logOutButton()}>
                Log Out
            </button>
            </form>
        </div>
    );
}

export default withRouter(HomeComponent);