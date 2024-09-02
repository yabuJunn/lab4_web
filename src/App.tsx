import React, { useState } from 'react';
import './App.css'
import Start from './screens/Start/Start';
import Second from './screens/Second/Second';

const App: React.FC = () => {
  //Estado de manejo de pantallas
  const [pageId, setPageId] = useState("Start")

  //Estado del budget
  const [budget, setBudget] = useState(0)

  //Estado del expenses
  const [expenses, setExpenses] = useState(0)

  //Funcion handle state budget
  const HandleBudget = (newBudget: number) => {
    setBudget(newBudget)
  }

  //Funcion handle state page
  const HandlePage = (newPage: string) => {
    setPageId(newPage)
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
          <Second handleBudget={HandleBudget} actualBudget={budget} handlePage={HandlePage}></Second>
        </div>
      );
    default:
      break;
  }


};

export default App;
