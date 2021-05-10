import React from 'react';
import * as Icon from 'react-feather';

const PendingOrders = () => {
    return (
        <div className="stats-card danger-card mb-4">
            <h3>
                300,345
                <Icon.ArrowDownCircle 
                    className="icon"
                />
            </h3>
            <p>Female Headed Households</p>
            <i 
                className="lni-reload" 
            />
        </div>
    );
};

export default PendingOrders;