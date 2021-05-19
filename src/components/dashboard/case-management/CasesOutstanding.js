import React from 'react';
import * as Icon from 'react-feather';

const CasesOutstanding = () => {
    return (
        <div className="stats-card purple-card mb-4">
            <h3>
            caseManagementDataCasesOutstanding
                <Icon.ArrowUpCircle 
                    className="icon"
                />
            </h3>
            <p>Total Cases Outstanding</p>
            <i 
                className="lni-cart-full" 
            />
        </div>
    );
};

export default CasesOutstanding;