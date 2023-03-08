import React from "react";
import ExpenseForm from "./ExpenseForm";
const NewExpense = () =>{
     
   const saveExpenseHandler = (enteredExpenseData) =>{
    const expenseData = {
        ...enteredExpenseData,
        id:Math.random().toString()
    };
    
   };

    

return <div className="new-expense">
    <ExpenseForm  onSaveExpenseData={saveExpenseHandler}/>
</div>

};

export default NewExpense;