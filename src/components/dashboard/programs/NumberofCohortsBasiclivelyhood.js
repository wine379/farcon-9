import React from 'react';
import * as Icon from 'react-feather';

const NumberofCohortBasic = () => {
    return (
        <div className="stats-card purple-card mb-4">
            <h3>
            numberofCohortsBasicLivelihood
                <Icon.ArrowUpCircle 
                    className="icon"
                />
            </h3>
            <p>Number of Cohort basic</p>
            <i 
                className="lni-cart-full" 
            />
        </div>
    );
};

export default NumberofCohortBasic;