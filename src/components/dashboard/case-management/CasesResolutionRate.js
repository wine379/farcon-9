import React from 'react';
import * as Icon from 'react-feather';

const CasesResolutionRate = () => {
    return (
        <div className="stats-card purple-card mb-4">
            <h3>
            caseManagementDataCasesResolutionRate
                <Icon.ArrowUpCircle 
                    className="icon"
                />
            </h3>
            <p>Total Cases Resolution Rate</p>
            <i 
                className="lni-cart-full" 
            />
        </div>
    );
};

export default CasesResolutionRate;