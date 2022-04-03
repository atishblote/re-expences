import React, { useState  } from "react";
import Expences from "./Expences";
import ExpencesForm from "./ExpencesForm/ExpencesForm";



const array1 = [
    {   id : 1,
        title: 'Food',
        date: '2022-03-01',
        amount: '10'
    },
    {   id : 2,
        title: 'House Rent',
        date: '2022-03-02',
        amount: '100'
    }
    
]

// console.log(array1.length);
// console.log(array1);

function SubComponents() {
    const [formExpences , setFormExpences] = useState(array1);


    
    

    // function fechData() {
    //     // Fetch Api

    //         fetch()
    //         .then(
    //             responce => {
    //                 responce.json();
    //             }
    //         )
    //         .then(
    //             data => {
    //                 console.log(data);
    //                 setFormExpences(data);
    //             }
    //         )
  
    // }

    // useEffect( () => {
    //     // fechData();
    // });
    // // Upload form data via api

    // const subFmDataHandlerDummy = (enterExData) => {
    //     fetch('' , {
    //         method: 'POST',
    //         data: JSON.stringify(enterExData),
    //         headers: {
    //             'content-type' : 'application/json'
    //         } 
    //     }).then(
    //         responce => {
    //             // fechData();
    //         }
    //     )
    // }



    const subFmDataHandler = (enterExData) => {
        // console.log(enterExData);
        const updatesExpeces = [ enterExData , ...formExpences ];
        setFormExpences(updatesExpeces);
        // console.log(updatesExpeces+"notion");

    }

    return (
        <div className="sub-components">
            
            <ExpencesForm onSaveSubComData={subFmDataHandler} />
            <Expences setExpencesData={formExpences } />
        </div>
    );
}

export default SubComponents;