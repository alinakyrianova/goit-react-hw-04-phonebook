import { useState, useEffect } from "react";
import { ContactsForm } from '../ContactsForm/ContactsForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactsList/ContactsList';
import { AppWrapper, Title, SearchWrapper, StyledTitles, CloseBtn, OpenPhonebook } from './app.styled';

const localStorageKey = 'contacts'
export const App = () => {
    const [contacts, setContacts] = useState(() => {
        const savedContacts = localStorage.getItem(localStorageKey);
    
        if (savedContacts !== null) {
            return JSON.parse(savedContacts);
        }
        return [];
    });
    
    const [filter, setFilter] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(contacts));
}, [contacts]);
    

}