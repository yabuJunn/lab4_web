import React from 'react';
import './ExpenseSummary.css';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'

const ExpenseSummary: React.FC = () => {

  const percentageExpended: number = 50

  return (
    <div className="expense-summary">
      <div className="summary-circle">
        <CircularProgressbar
          value={percentageExpended}
          styles={buildStyles({
            pathColor: percentageExpended === 100 ? '#DC2626' : '#4F46E5',
            trailColor: '#F5F5F5',
            textSize: 8,
            textColor: percentageExpended === 100 ? '#DC2626' : '#4F46E5'
          })}
          text={`${percentageExpended}% expended`}
        ></CircularProgressbar>
      </div>
      <div className="summary-details">
        <p><strong>Budget:</strong> $1.00</p>
        <p><strong>Remaining:</strong> $1.00</p>
        <p><strong>Expense:</strong> $0.00</p>
      </div>
    </div>
  );
};

export default ExpenseSummary;
