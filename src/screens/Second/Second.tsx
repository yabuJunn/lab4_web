import React from 'react';
//import './Screens.css';
import Header from '../../Components/Header/Header';
import ExpenseSummary from '../../Components/ExpenseSummary/ExpenseSumary';
import ExpenseFilter from '../../Components/ExpenseFilter/ExpenseFilter';
import ExpenseList from '../../Components/ExpenseList/ExpenseList';


const Second: React.FC = () => {
  return (
    <div className="screen">
      <Header/>
      <ExpenseSummary/>
      <ExpenseFilter/>
      <ExpenseList/>
    </div>
  );
};

export default Second;