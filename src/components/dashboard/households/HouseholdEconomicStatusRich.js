import React from 'react';
import * as Icon from 'react-feather';

const householdEconomicStatusRich = () => {
    return (
        <div className="stats-card purple-card mb-4">
            <h3>
            householdEconomicStatusRichHouseholds
                <Icon.ArrowUpCircle 
                    className="icon"
                />
            </h3>
            <p>Household Economic Status Rich Households</p>
            <i 
                className="lni-cart-full" 
            />
        </div>
    );
};

export default householdEconomicStatusRich;