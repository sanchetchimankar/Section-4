import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import ExpenseDate from './components/Expenses/ExpenseDate';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App=(props)=> {
  
  const expenses =[
       {
        id:'e1',
        title : 'cleaner', 
        amount:249.44,
       date: new Date(2023,3,6)},
       {
        id: 'e2',
        title : 'New TV', 
        amount:249.44, 
        date: new Date(2023,4,12)},
        {
          id: 'e3',
          title : 'Car insurance', 
          amount:2433.44, 
          date: new Date(2023,6,23)},
       {
        id: 'e4',
        title : 'Home Rent', 
        amount:249.44, 
        date: new Date(2023,9,10)
      
      
      }

  ];
    const addExpenseHandler = expense => {
      console.log('In app Js');
      console.log(expense);
    }

  return (
   <div>
    <NewExpense addExpenseHandler={addExpenseHandler}/>
    <ExpenseItem title={expenses[0].title}
     amount={expenses[0].amount} 
     date={expenses[0].date}>
     </ExpenseItem>
     <ExpenseItem title={expenses[1].title}
     amount={expenses[1].amount} 
     date={expenses[1].date}>
     </ExpenseItem>
     <ExpenseItem title={expenses[2].title}
     amount={expenses[2].amount} 
     date={expenses[2].date}>
     </ExpenseItem>
     <ExpenseItem title={expenses[3].title}
     amount={expenses[3].amount} 
     date={expenses[3].date}>
     </ExpenseItem>
   </div>
  );
}

export default App;
