import React, { useState } from 'react';
import './BudgetForm.css';

const BudgetForm: React.FC = () => {
  // maneja el estado local del componente
  const [budget, setBudget] = useState('');

  //se ejecuta cada vez que el valor del input cambia
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(event.target.value);
  };

  // evita que la página se recargue al enviar el formulario
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Lógica para manejar la presentación del presupuesto
    console.log('Budget defined:', budget);
  };

  return (
    <div className="budget-form">
      <form onSubmit={handleSubmit}>
        <h2>Define budget</h2>
        <input
          type="number"
          placeholder="Define your budget"
          value={budget}
          onChange={handleInputChange}
        />
        <button type="submit">DEFINE BUDGET</button>
      </form>
    </div>
  );
};

export default BudgetForm;
