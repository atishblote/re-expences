import React from 'react';
import TableBody from './TableBody'
import './Expences.css';
import './TableBody.css';




function Expences(props) {





    return (
        <div className='Expences'>
            <div className='row row-cols-sm-4'>
                {
                    props.setExpencesData.map(amooo => (
                        <TableBody
                            key={amooo.id}
                            title={amooo.title}
                            amount={amooo.amount}
                            date={amooo.date}
                        />
                    )
                    )

                }
            </div>


        </div>
    );
}

export default Expences;