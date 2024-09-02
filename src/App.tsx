import React, { useState } from 'react';
import './App.css'
import Start from './screens/Start/Start';
import Second from './screens/Second/Second';

enum categoriesExpenses {
  savings = "Savings",
  food = "Food",
  miscellaneousExpenses = "Miscellaneous Expenses",
  leisure = "Leisure",
  health = "Health",
  subscriptions = "Subscriptions"

}

export interface expenseType {
  expenseName: string,
  amount: number,
  category: categoriesExpenses,
  expenseDate: string | Date
}

const App: React.FC = () => {
  //Estado de manejo de pantallas
  const [pageId, setPageId] = useState("Start")

  //Estado del budget
  const [budget, setBudget] = useState(0)

  //Estado del expenses
  const [expenses, setExpenses] = useState<Array<expenseType>>([])
  console.log(expenses)

  //Estado del expenses
  const [showAddExpensesModal, setShowAddExpensesModal] = useState(false)

  //Funcion handle state budget
  const HandleBudget = (newBudget: number) => {
    setBudget(newBudget)
  }

  //Funcion handle state page
  const HandlePage = (newPage: string) => {
    setPageId(newPage)
  }

  //Funcion handle state expenses
  const handleExpenses = (newExpense: expenseType) => {
    console.log("Old expenses:")
    console.log(expenses)
    setExpenses(prevExpense => [...prevExpense, newExpense])
  }

  //Funcion handle state page
  const handleShowAddExpensesModal = () => {
    if (showAddExpensesModal) {
      setShowAddExpensesModal(false)
    } else {
      setShowAddExpensesModal(true)
    }
    console.log(showAddExpensesModal)
  }

  switch (pageId) {
    case "Start":
      return (
        <div className="app">
          <Start handleBudget={HandleBudget} actualBudget={budget} handlePage={HandlePage}></Start>
        </div>
      );
    case "Second":
      return (
        <div className="app">
          <Second showModal={showAddExpensesModal} handleExpenses={handleExpenses} handleBudget={HandleBudget} actualBudget={budget} handlePage={HandlePage} handleShowAddExpensesModal={handleShowAddExpensesModal}></Second>
        </div>
      );
    default:
      break;
  }


};

export default App;
