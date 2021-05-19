import React from 'react';
import * as Icon from 'react-feather';

const CasesReceived = () => {
    return (
        <div className="stats-card purple-card mb-4">
            <h3>
            caseManagementDataCasesReceived
                <Icon.ArrowUpCircle 
                    className="icon"
                />
            </h3>
            <p>Total Cases Received</p>
            <i 
                className="lni-cart-full" 
            />
        </div>
    );
};

export default CasesReceived;