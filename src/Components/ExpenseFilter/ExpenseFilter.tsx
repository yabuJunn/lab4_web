import React from 'react';
import './ExpenseFilter.css';

const ExpenseFilter: React.FC = () => {
  return (
    <div className="expense-filter">
      <label htmlFor="category-filter">Filter categories</label>
      <select id="category-filter">
        <option value="all">-- All categories --</option>
        <option value="house">House</option>
        <option value="health">Health</option>
        <option value="savings">Savings</option>
        <option value="subscription">Subscription</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
