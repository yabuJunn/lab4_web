// src/screens/Screens.tsx
import React from 'react';
//import './Screens.css';
import Header from '../../Components/Header/Header';
import BudgetForm from '../../Components/BudgetForm/BudgetForm';

type StartType = {
  setBudget: 
}

const Start: React.FC = ({ setBudget }: StartType) => {

  return (
    <div className="screens">
      <Header />
      <BudgetForm />
    </div>
  );
};

export default Start;
