import React from 'react';
import * as Icon from 'react-feather';

const NumberofCohortGraduation = () => {
    return (
        <div className="stats-card purple-card mb-4">
            <h3>
            numberOfCohortsGraduation
                <Icon.ArrowUpCircle 
                    className="icon"
                />
            </h3>
            <p>Number of Cohort Graduation</p>
            <i 
                className="lni-cart-full" 
            />
        </div>
    );
};

export default NumberofCohortGraduation;