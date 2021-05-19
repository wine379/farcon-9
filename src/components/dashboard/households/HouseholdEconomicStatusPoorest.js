import React from 'react';
import * as Icon from 'react-feather';

const householdEconomicStatusPoorer = () => {
    return (
        <div className="stats-card purple-card mb-4">
            <h3>
            householdEconomicStatusPoorerHouseholds
                <Icon.ArrowUpCircle 
                    className="icon"
                />
            </h3>
            <p>Household Economic Status Poorer Households</p>
            <i 
                className="lni-cart-full" 
            />
        </div>
    );
};

export default householdEconomicStatusPoorer;