import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCardAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ title, icon }) => {
  return (
    <div class='navbar bg-primary'>
      <h1>
        <FontAwesomeIcon icon={faIdCardAlt} /> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
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