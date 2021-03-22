import React from 'react';

import RandomList from './RandomList';
import AnotherComponent from './AnotherComponent';
import './stylesheet.css'

const App = () => {

  return (
    <div>
      Application
      <RandomList />  
      <AnotherComponent />
      <AnotherComponent />
    </div>
  )
}

export default App