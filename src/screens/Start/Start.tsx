// src/screens/Screens.tsx
import React from 'react';
//import './Screens.css';
import Header from '../../Components/Header/Header';
import BudgetForm from '../../Components/BudgetForm/BudgetForm';

const Start: React.FC = () => {
  return (
    <div className="screens">
      <Header/>
      <BudgetForm/>
    </div>
  );
};

export default Start;
