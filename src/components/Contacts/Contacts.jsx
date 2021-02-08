import * as React from 'react';
import {Link} from "react-router-dom";
import Contact from './Contact';
import contacts from './contactsData';


const Contacts = () => {
    const [inputText, setInputText] = React.useState('');
    const [showMan, setShowMan] = React.useState(true);
    const [showWoman, setShowWoman] = React.useState(true);

    const dataHandler = () => {
        let result = null;
        if(showMan && showWoman) {
            result = contacts;
        }
        else if(!showMan && !showWoman) {
            result = contacts.filter( contact =>  contact.gender !== 'male' && contact.gender !== 'female')
        }
        else if(!showMan) {
            result = contacts.filter( contact => 
                showWoman && (contact.gender === 'female' || contact.gender === undefined))
        }
        else if(!showWoman) {
            result = contacts.filter( contact => 
                showMan && (contact.gender === 'male' || contact.gender === undefined))
        }  
        return result   
    }

    return (
        <div>
            <form>
                <input
                    className='searchInput'
                    onChange={event => setInputText(event.target.value.trim())}
                    placeholder={'Enter search text...'}
                    type="text"
                />
                <p>Gender:</p>
                <label>
                    Man:
                    <input 
                        checked={showMan}
                        onChange={() => setShowMan(!showMan)}
                        type="checkbox" 
                    />
                </label>
                <label>
                    Woman:
                    <input 
                        checked={showWoman}
                        onChange={() => setShowWoman(!showWoman)}
                        type="checkbox" 
                    />
                </label>
            </form>
            <div className='Contacts'>
                {dataHandler().filter(contact => `${contact.firstName}${contact.lastName}${contact.phone}`
                    .toLowerCase()
                    .includes(inputText.toLowerCase()))
                    .map( contact => (
                        <Link to={`/contacts/${contact.lastName}`} key={contact.phone} >
                            <Contact {...contact} />
                        </Link>
                    ))}
            </div>
        </div>
    )
}

export default Contacts;