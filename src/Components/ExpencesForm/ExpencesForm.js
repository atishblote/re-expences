import React, {useState} from "react";

import './ExpencesForm.css';

const ExpencesForm = (props) => {


    const [formTitle , setformTitle] = useState('');
    const [formAmount , setformAmount] = useState('');
    const [formDate , setformDate] = useState('');

    const onFromSubmitHandler = (event) => {
        event.preventDefault();
        const allFormData = {
            id : Math.random(100000).toString(),
            title : formTitle,
            date : formDate,
            amount : formAmount
        }
        props.onSaveSubComData(allFormData);
        console.log(allFormData);
        setformTitle('');
        setformAmount('');
        setformDate('');

    }
    const onChangeFmTitleHandler = (event) => {    
        setformTitle(event.target.value);
        // console.log(event.target.value);
        
    }
    const onChangeFmAmountHandler = (event) => {  
        setformAmount(event.target.value);  
    }
    const onChangeFmDateHandler = (event) => {   
        setformDate(event.target.value); 
    }

    return(
        <form onSubmit={onFromSubmitHandler}>
            <h3>Add Ecpences Into Form</h3> 
            <div className="expences-form__parent">
                <div className="expences-form__child">
                    <label>Title</label>
                    <input type="text" value={formTitle} onChange={onChangeFmTitleHandler} />
                </div>
                <div className="expences-form__child">
                    <label>Amount</label>
                    <input type="number" value={formAmount} onChange={onChangeFmAmountHandler} />
                </div>
                <div className="expences-form__child">
                    <label>Date</label>
                    <input type="date" value={formDate} onChange={onChangeFmDateHandler} />
                </div>
                <div className="form-submit">
                    <button type="submit">Add Expences</button>
                </div>
            </div>
        </form>
        
    );
}


export default ExpencesForm;