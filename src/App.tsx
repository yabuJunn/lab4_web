
import React, { useState } from 'react';
import './App.css'
import Start from './screens/Start/Start';
import Second from './screens/Second/Second';

const App: React.FC = () => {
  const [pageId, setPageId] = useState("Second")

  switch (pageId) {
    case "Start":
      return (
        <div className="app">
          <Start></Start>
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
