import React from 'react';
import Header from './components/Header/Header'
import './App.css';
import { number } from 'prop-types';


const items = [{
  name: 'Apple', limit: 3
}, {
  name: 'Melon', limit: 3
}, {
  name: 'Mango', limit: 3
}];
const lengthOfPeople = items.length

const App: React.FC = () => {
  return (
    <div className="App">
      <Header data={lengthOfPeople} />
    </div>
  );
}

export default App;
