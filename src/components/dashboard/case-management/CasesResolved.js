import React from 'react';
import * as Icon from 'react-feather';

const CasesResolved= () => {
    return (
        <div className="stats-card purple-card mb-4">
            <h3>
            caseManagementDataCasesResolved
                <Icon.CloudRain 
                    className="icon"
                />
            </h3>
            <p>Total Cases Resolved</p>
            <i 
                className="lni-cart-full" 
            />
        </div>
    );
};

export default CasesResolved;