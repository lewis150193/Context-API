import React from 'react';
import '../App.css';
import MyProvider from '../../src/Context/Provider/MyProvider'
import {Cars} from '../../src/Context/Consumer/Cars'

function App() {
  return (
              <MyProvider>
                <div className="App">
                  <header className="App-header">
                    <h1 className="App-title">Welcome to my web store</h1>
                  </header>
                  <Cars />
                </div>
              </MyProvider>
          );
}

export default App;
