import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const DashboardLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link
                style={match ? { background: '#3F00FF', color: 'white' } : {}}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
};

export default DashboardLink;