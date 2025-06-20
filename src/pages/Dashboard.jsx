import React from 'react';

const Dashboard = ({ logout }) => {
    return (
        <div>
            <h1>Welcome to Dashboard</h1>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Dashboard;