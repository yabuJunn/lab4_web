import React, { useState } from 'react';
import './App.css'
import Start from './screens/Start/Start';
import Second from './screens/Second/Second';

const App: React.FC = () => {
  //Estado de manejo de pantallas
  const [pageId, setPageId] = useState("Start")

  //Estado del budget
  const [budget, setBudget] = useState(0)

  console.log(budget)

  const HandleBudget = (newBudget: number) => {
    setBudget(newBudget)
  }

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
          <Second></Second>
        </div>
      );
    default:
      break;
  }


};

export default App;
