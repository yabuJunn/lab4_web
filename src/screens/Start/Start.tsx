// src/screens/Screens.tsx
import React from 'react';
//import './Screens.css';
import Header from '../../Components/Header/Header';
import BudgetForm from '../../Components/BudgetForm/BudgetForm';

interface StartProps {
  handleBudget: (newBudget: number) => void,
  actualBudget: number

}

const Start = ({ handleBudget, actualBudget }: StartProps) => {

  return (
    <div className="screens">
      <Header />
      <BudgetForm handleBudget={handleBudget} actualBudget={actualBudget} />
    </div>
  );
};

export default Start;
