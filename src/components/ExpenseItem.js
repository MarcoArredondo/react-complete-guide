import React from "react";
import { ExpenseDate } from "./ExpenseDate";
import { Card } from "./Card";
import "./ExpenseItem.css";

function ExpenseItem(props){

    const {title, amount, date} = props;
    return (
        <Card className="expense-item">
            <ExpenseDate date={date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
        </Card>
    );
}

export {ExpenseItem};