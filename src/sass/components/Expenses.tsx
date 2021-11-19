import React from 'react';
import ExpenseItem from '../../components/ExpenseItem';
import { Expense } from '../../interfaces/Expence';

interface ExpensesProps {
   expenses: Expense[]
}

const Expenses = ({expenses}: ExpensesProps): JSX.Element => {
   return (
      <div className="expenses">
         {
            expenses && expenses.map(
               ({id, title, amount, date}) => (
                  <ExpenseItem key={id} title={title} amount={amount} date={date}/>
               )
            )
         }         
      </div>
   )
}

export default Expenses
