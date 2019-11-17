import React, { useReducer } from 'react';
import axios from 'axios';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  CLEAR_CONTACTS,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: null,
    current: null,
    filtered: null,
    errors: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState)

  // Get Contacts
  const getContacts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/contacts')
      dispatch({ type:GET_CONTACTS, payload:res.data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload:err.response.message })
    }
  }

  // Add Contact
  const addContact = async (contact) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('http://localhost:5000/api/contacts', contact, config )
      dispatch({ type:ADD_CONTACT, payload:res.data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload:err.response.message })
    }
  }

  // Delete Contact
  const deleteContact = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/contacts/${id}` )
      dispatch({ type:DELETE_CONTACT, payload:id })
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload:err.response.message })
    }
  }

  // Clear Contacts
  const clearContacts = () => {
    dispatch({ type:CLEAR_CONTACTS })
  }

  // Set Current Contact
  const setCurrent = (contact) => {
    dispatch({ type:SET_CURRENT, payload:contact })
  }

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type:CLEAR_CURRENT })
  }

  // Update Contact
  const updateContact = (contact) => {
    dispatch({ type:UPDATE_CONTACT, payload:contact})
  }

  // Filter Contact
  const filterContact = (text) => {
    dispatch({ type:FILTER_CONTACTS, payload:text})
  }

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type:CLEAR_FILTER })
  }


  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        errors: state.errors,
        getContacts,
        addContact,
        updateContact,
        deleteContact,
        clearContacts,
        setCurrent,
        clearCurrent,
        clearFilter,
        filterContact
      }}>
        { props.children }
    </ContactContext.Provider>
  )
};

export default ContactState