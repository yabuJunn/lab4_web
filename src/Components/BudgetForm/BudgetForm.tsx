import './BudgetForm.css';

interface BudgetFormProps {
  handleBudget: (newBudget: number) => void,
  actualBudget: number,
  handlePage: (newPage: string) => void
}

const BudgetForm = ({ handleBudget, actualBudget, handlePage }: BudgetFormProps) => {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Hola")
    handleBudget(parseInt(e.target.value));
  };

  // evita que la página se recargue al enviar el formulario
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const handleButtonOnClick = () => {
    if (actualBudget > 0) {
      handlePage("Second")
    } else {
      alert("Budget must be greater than zero")
    }
  }

  return (
    <div className="budget-form">
      <form onSubmit={handleSubmit}>
        <h2>Define budget</h2>
        <input
          type="number"
          placeholder="Define your budget"
          value={actualBudget}
          onChange={handleInputChange}
        />
        <button type="submit" onClick={handleButtonOnClick}>DEFINE BUDGET</button>
      </form>
    </div>
  );
};

export default BudgetForm;
