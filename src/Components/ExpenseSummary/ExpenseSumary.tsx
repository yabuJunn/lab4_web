import React from 'react';
import './ExpenseSummary.css';

const ExpenseSummary: React.FC = () => {
  return (
    <div className="expense-summary">
      <div className="summary-circle">
        <p>0% expended</p>
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
