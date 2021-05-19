import React from 'react';
import * as Icon from 'react-feather';

const householdEconomicStatusPoor = () => {
    return (
        <div className="stats-card purple-card mb-4">
            <h3>
            householdEconomicStatusPoortHouseholds
                <Icon.ArrowUpCircle 
                    className="icon"
                />
            </h3>
            <p>Household Economic Status Poor Households</p>
            <i 
                className="lni-cart-full" 
            />
        </div>
    );
};

export default householdEconomicStatusPoor;