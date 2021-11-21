import React from 'react';
import ExpenseItem from './ExpenseItem';
import { Expense } from '../../interfaces/Expence';
import Card from '../UI/Card';

interface ExpensesProps {
   expenses: Expense[]
}

const Expenses = ({expenses}: ExpensesProps): JSX.Element => {
   return (
      <Card theme="dark" className="expenses">
         {
            expenses && expenses.map(
               ({id, title, amount, date}) => (
                  <ExpenseItem key={id} title={title} amount={amount} date={date}/>
               )
            )
         }         
      </Card>
   )
}

export default Expenses
