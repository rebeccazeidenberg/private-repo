import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import {FiUser} from 'react-icons/fi';
import {FaLanguage} from 'react-icons/fa';
import {BsThreeDots} from 'react-icons/bs';
import {RiLogoutBoxRLine} from 'react-icons/ri';


const Options = () => {
    return(
        <Menu>
        <a className="menu-item" style={{ color: '#FFF' }}>
          <FiUser/>
        </a>
        <a className="menu-item" style={{ color: '#FFF' }}>
          Guest
        </a>
        <a className="menu-item" style={{ color: '#FFF' }}>
          <BsThreeDots/> Change Password
        </a>
        <a className="menu-item">
            <Link to="/languages" style={{ color: '#FFF' }} ><FaLanguage/> Change Language</Link>
        </a>
        <a className="menu-item">
            <Link to="/museums" style={{ color: '#FFF' }} >Museum List</Link>
        </a>
        <a className="menu-item">
            <Link to="/map" style={{ color: '#FFF' }} >Map</Link>
        </a>
        <a className="menu-item" style={{ color: '#FFF' }}>
            <Link to="/login" style={{ color: '#FFF' }} ><RiLogoutBoxRLine/> Logout</Link>
        </a>
      </Menu>
    )
}

export default Options;