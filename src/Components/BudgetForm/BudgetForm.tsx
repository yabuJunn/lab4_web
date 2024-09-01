import './BudgetForm.css';

interface BudgetFormProps {
  handleBudget: (newBudget: number) => void,
  actualBudget: number
}

const BudgetForm = ({ handleBudget, actualBudget }: BudgetFormProps) => {

  //se ejecuta cada vez que el valor del input cambia
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Hola")
    handleBudget(parseInt(e.target.value));
  };

  // evita que la página se recargue al enviar el formulario
  // const handleSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  // };

  return (
    <div className="budget-form">
      <form>
        <h2>Define budget</h2>
        <input
          type="number"
          placeholder="Define your budget"
          value={ actualBudget}
          onChange={handleInputChange}
        />
        <button type="submit">DEFINE BUDGET</button>
      </form>
    </div>
  );
};

export default BudgetForm;
