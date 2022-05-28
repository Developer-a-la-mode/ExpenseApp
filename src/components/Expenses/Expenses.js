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

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={enteredYear} onSelectYear={selectYearHandler} />
                {props.items.map((expense) => <ExpenseItem 
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    />)}
            </Card>
        </div>
    )
}

export default Expenses;