// src/screens/Screens.tsx
import React from 'react';
//import './Screens.css';
import Header from '../../Components/Header/Header';
import BudgetForm from '../../Components/BudgetForm/BudgetForm';

interface StartProps {
  handleBudget: (newBudget: number) => void,
  actualBudget: number,
  handlePage: (newPage: string) => void
}

const Start = ({ handleBudget, actualBudget, handlePage }: StartProps) => {

  return (
    <div className="screens">
      <Header />
      <BudgetForm handleBudget={handleBudget} actualBudget={actualBudget} handlePage={handlePage}/>
    </div>
  );
};

export default Start;
