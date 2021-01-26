import React from 'react';
import contacts from './contactsData';

const CurrentContactInfo = props => {  
    const currentContact = contacts.filter( contact => contact.lastName === props.match.params.userName)[0];

    return(
        <div className='Contact'>
            <div className='contactInfo'>
                <p className='fullName'>{currentContact.firstName} {currentContact.lastName}</p>
                <p className='gender'>{'Gender: '} {currentContact.gender}</p>
            </div>
            <p className='contactNumber'>{currentContact.phone}</p>
        </div> 
    )   
};

export default CurrentContactInfo;