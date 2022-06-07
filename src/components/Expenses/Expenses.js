import React, { useState } from 'react';
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpenesesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [enteredYear, setEnteredYear] = useState('2021');
    const selectYearHandler = (selectedYear) => {
        setEnteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter(filteredExpense => {
        return (filteredExpense.date.getFullYear().toString() === enteredYear)
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={enteredYear} onSelectYear={selectYearHandler} />
                <ExpensesChart expenses={filteredExpenses}  />
                <ExpensesList filteredExpense = {filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses;