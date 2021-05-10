import React from 'react';
import * as Icon from 'react-feather';

const TotalOrders = () => {
    return (
        <div className="stats-card light-blue-card mb-4">
            <h3>
                20,231
                <Icon.ArrowUpCircle 
                    className="icon"
                />
            </h3>
            <p>Child Headed Households</p>
            <i 
                className="lni-shopping-basket" 
            />
        </div>
    );
};

export default TotalOrders;