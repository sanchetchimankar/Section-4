import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import React,{useState} from 'react';
import Card from '../UI/Card';
import App from '../../App';


    // const expenseDate = new Date(2023,3,6);
    // const expenseTitle='Car insurance';
    // const expenseAmount=297.4;
   //   function clickHandler(){}

   

    const ExpenseItem = (props) => {

     const [title,setTitle] = useState(props.title);

     

          const clickHandler =()=>{
           setTitle('updated');
            console.log(title);
            
          
    };

    return(
        
         <Card className="expense-item">

           <ExpenseDate date={props.date}/>
            <div className="expense-item_description">
               <h2>{title}</h2>
               <div className="expense-item_price">${props.amount}</div>
            </div>
              <button onClick={clickHandler}>Change Title</button>
         </Card>
    );
    }
export default ExpenseItem