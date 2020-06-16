import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

const HomeComponent: React.FC = () => {

    return (
        <div>
            <h1>Welcome!</h1>
        </div>
    );
}

export default withRouter(HomeComponent);