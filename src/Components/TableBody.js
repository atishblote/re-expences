import React from "react";
// import './TableBody.css';
const TableBody= (props) => {
    // console.log(props);
 

    
    // let getTitle = props.title;
    // console.log(getTitle);
//    define variables
// console.log(props.title);

    // const [title , setTitle] = useState(props.title);
    // const [amount, setAmount] = useState(props.amount);
    // const [date, setDate] = useState(props.date);
    // const [inputAmount, setinputAmount] = useState(props.amount);
    // const [inputTitle, setinputTitle] = useState(props.title);
    
    // const onClickHandler = () => {
    //     // setTitle(props.title);
    //     // setAmount(props.amount);
    //     // setDate(props.date);
    // }
    // amount events
    // const amountChangeHandler = (event) => {
    //     // setinputAmount(event.target.value);
    // }
    // // title change event
    // const titleChangeHandler = (event) => {
    //     // setinputTitle(event.target.value);
    // }

    // console.log(titleMy);
    return (
        <div className="card">
            <h3>{props.title}</h3>
            <h6>${props.amount}</h6>
            <p>{props.date}</p>
        </div>
    );
}

export default TableBody;