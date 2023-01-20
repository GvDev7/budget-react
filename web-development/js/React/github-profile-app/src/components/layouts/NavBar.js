import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';


const NavBar = (props) => {
    return (
      <nav className='navbar bg-success'>
        <h2>
            <FontAwesomeIcon icon={solid('code-compare')} /> 
            {props.title}
        </h2>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to=''></Link>
          </li>
        </ul>
      </nav>
    )
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
}

export default NavBar