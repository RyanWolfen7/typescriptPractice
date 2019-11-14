import React from 'react';
import Header from './components/Header/Header'
import './App.css';


const items = [{
  name: 'Apple', limit: 3
}, {
  name: 'Melon', limit: 3
}, {
  name: 'Mango', limit: 3
}]

const App: React.FC = () => {
  return (
    <div className="App">
      <Header delivery_collect={'collect'} data={items} />
    </div>
  );
}

export default App;
