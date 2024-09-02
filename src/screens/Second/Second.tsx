import React from 'react';
//import './Screens.css';
import Header from '../../Components/Header/Header';
import ExpenseSummary from '../../Components/ExpenseSummary/ExpenseSumary';
import ExpenseFilter from '../../Components/ExpenseFilter/ExpenseFilter';
import ExpenseList from '../../Components/ExpenseList/ExpenseList';

interface SecondProps {
  handleBudget: (newBudget: number) => void,
  actualBudget: number,
  handlePage: (newPage: string) => void
}

const Second = ({ handleBudget, actualBudget, handlePage }: SecondProps) => {
  return (
    <div className="screen">
      <Header />
      <ExpenseSummary actualBudget={actualBudget} />
      <ExpenseFilter />
      <ExpenseList />
    </div>
  );
};

export default Second;