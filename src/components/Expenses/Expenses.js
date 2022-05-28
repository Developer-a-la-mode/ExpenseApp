import React, { useState } from 'react';
import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [enteredYear, setEnteredYear] = useState('2021');
    const selectYearHandler = (selectedYear) => {
        setEnteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter(filteredExpense => {
        return (filteredExpense.date.getFullYear().toString() === enteredYear)
    });

    let expensesContent = <p>No expenses found</p>;

    if(filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => <ExpenseItem 
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />)
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={enteredYear} onSelectYear={selectYearHandler} />
                {expensesContent}
            </Card>
        </div>
    )
}

export default Expenses;