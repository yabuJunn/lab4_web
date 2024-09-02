import React from 'react';
//import './Screens.css';
import Header from '../../Components/Header/Header';
import ExpenseSummary from '../../Components/ExpenseSummary/ExpenseSumary';
import ExpenseFilter from '../../Components/ExpenseFilter/ExpenseFilter';
import ExpenseList from '../../Components/ExpenseList/ExpenseList';
import { AddExpenseButton } from '../../Components/AddExpenseButton/AddExpenseButton';

interface SecondProps {
  handleBudget: (newBudget: number) => void,
  actualBudget: number,
  handlePage: (newPage: string) => void,
  handleShowAddExpensesModal: () => void
}

const Second = ({ handleBudget, actualBudget, handlePage, handleShowAddExpensesModal }: SecondProps) => {
  return (
    <div className="screen">
      <Header />
      <ExpenseSummary actualBudget={actualBudget} />
      <ExpenseFilter />
      <ExpenseList />
      <AddExpenseButton handleShowAddExpensesModal={handleShowAddExpensesModal}></AddExpenseButton>
    </div>
  );
};

export default Second;