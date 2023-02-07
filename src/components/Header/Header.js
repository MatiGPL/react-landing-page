import React from 'react';
import styles from './Header.module.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.wrapper}>
    <Link to="/">
     <img src={logo} alt="Company logo"/>
     </Link>
     <nav>
       <ul className={styles.list}>
        <li>
         <Link className={styles.link} to="/features">Features</Link>
        </li>
        <li>
         <Link className={styles.link} to="/team">Team</Link>
        </li>
        <li>
         <Link className={styles.link} to="/signin">Sign in</Link>
        </li>
       </ul>
     </nav>
    </header>
  )
}

export default Header