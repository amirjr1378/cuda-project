import React from 'react';
export default ({ percent, borderColor }) => {
    return (
        <div className="progress" data-percentage={percent}>
        <span className="progress-left">
            <span className={`progress-bar ${borderColor}`}></span>
        </span>
        <span className="progress-right">
            <span className={`progress-bar ${borderColor}`}></span>
        </span>
        <div className="progress-value ">
            <div className="mx-auto">
                {percent+''}%<br />
                <span>completed</span>
            </div>
        </div>
    </div>
    );
}