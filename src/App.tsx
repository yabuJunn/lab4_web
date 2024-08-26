import React, { useState } from 'react';
import './App.css'
// import Start from './screens/Start/Start';
import Second from './screens/Second/Second';

const App: React.FC = () => {
  //Estado de manejo de pantallas
  const [pageId, setPageId] = useState("Second")

  //Estado del budget
  const [budget, setBudget] = useState(0)

  switch (pageId) {
    case "Start":
      return (
        <div className="app">
          <Start setBudget={setBudget}></Start>
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
