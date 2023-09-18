import './style.css';
/*

import React from 'react';
import Header from './Header';
import MemeGenerator from './MemeGenerator';

function App() {
  return (
    <div>
      <Header />
      <MemeGenerator />
    </div>
  );
}
export default App;
*/
import React from 'react';
import Form from './Form';
import Header from './Header';

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Form />
      </div>
    </div>
  );
}
