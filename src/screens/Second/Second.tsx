import React from 'react';
//import './Screens.css';
import Header from '../../Components/Header/Header';
import ExpenseSummary from '../../Components/ExpenseSummary/ExpenseSumary';
import ExpenseFilter from '../../Components/ExpenseFilter/ExpenseFilter';
import ExpenseList from '../../Components/ExpenseList/ExpenseList';
import { AddExpenseButton } from '../../Components/AddExpenseButton/AddExpenseButton';
import { expenseType } from '../../App';
import { ModalExpenses } from '../../Components/ModalExpenses/ModalExpenses';

interface SecondProps {
  handleBudget: (newBudget: number) => void,
  actualBudget: number,
  handlePage: (newPage: string) => void,
  handleShowAddExpensesModal: () => void,
  handleExpenses: (newExpense: expenseType) => void,
  showModal: boolean
}

const Second = ({ handleExpenses, handleBudget, actualBudget, handlePage, handleShowAddExpensesModal, showModal }: SecondProps) => {
  return (
    <div className="screen">
      <Header />
      <ExpenseSummary actualBudget={actualBudget} />
      <ExpenseFilter />
      <ExpenseList />
      <AddExpenseButton handleShowAddExpensesModal={handleShowAddExpensesModal}></AddExpenseButton>
      <ModalExpenses handleExpenses={handleExpenses} handleShowAddExpensesModal={handleShowAddExpensesModal} showModal={showModal}></ModalExpenses>
    </div>
  );
};

export default Second;