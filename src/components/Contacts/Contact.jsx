import React from 'react';

const Contact = props => {  
    return(
        <div className='Contact'>
            <div className='contactInfo'>
                <p className='fullName'>{props.firstName} {props.lastName}</p>
            </div>
            <p className='contactNumber'>{props.phone}</p>
        </div> 
    )   
};

export default Contact;