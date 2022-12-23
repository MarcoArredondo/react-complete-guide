import { ExpenseItem } from "./ExpenseItem";
import "./Expenses.css";
import { Card } from "./Card";

function Expenses(props){
    const {expenses} = props;
    return (
        <Card className="expenses">
        {
            expenses.map((expense) => {
                return <ExpenseItem key={expense.id} {...expense}></ExpenseItem>
            })
        }
        </Card>
    );
}

export {Expenses};