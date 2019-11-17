import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contacts/contactContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCardAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ title, icon }) => {

  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logout();
    clearContacts();
  }


  const authLinks = (
    <>
      <li>Hello {user && user.name}</li>
      <button className='btn btn-primary' onClick={onLogout}>
        <FontAwesomeIcon icon={faSignOutAlt}/>{' '}<span className='hide-sm'>Logout</span>
      </button>
    </>
  )

  const guestLinks = (
    <>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </>
  )

  return (
    <div className='navbar bg-primary'>
      <p>
        <FontAwesomeIcon icon={faIdCardAlt} /> {title}
      </p>
      <ul>
        {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </div>
  )
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Contact keeper',
  icon: 'faIdCardAlt'
};

export default Navbar;