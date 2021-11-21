import React from 'react';
import { Expense } from './interfaces/Expence';
import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses: Expense[] = [
    {id: 'e1', title: "Toilet Paper", amount: 94.12, date: new Date(2021, 7, 1)},
    {id: 'e2', title: "TV", amount: 799.49, date: new Date(2021, 2, 12)},
    {id: 'e3', title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28)},
    {id: 'e4', title: "New desk (wooden)", amount: 450, date: new Date(2021, 5, 12)}
  ]
  return (
    <div>
        <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
