import './App.css';
import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';


import Header from './components/Header';
import Rune from './components/Rune';
import { getRunes } from './api/api.js';


function App() {

  const [runesData, setRunesData] = useState([]);

  useEffect(() => {
    getRunes().then(response => {
      const arrayRunes = [];
      response.forEach(element => {
        arrayRunes.push(element);
      });
      setRunesData(arrayRunes);
    })
  }, []);

  const [visibleAll, setvisibleAll] = useState(false);


  return (
    <div className="App">
      <div>
        <Header
          test="texto de test"
        />
      </div>
      <div >

        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          {runesData.map(item => {
            return <Rune
              data={item}
              initial={visibleAll}
              toggleAll={setvisibleAll}
            />
          })}
        </List>
      </div>

    </div>
  );
}

export default App;
