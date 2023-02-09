import React from 'react';
import styles from './MainTile.module.css';



const MainTile = ({picture, alt, header, children}) => {
  return (
  
   <div className={styles.tile}>
   <img src={picture} alt={alt}/>
   <p className={styles.parabold}>{header}</p>
   <p>{children}</p>
   </div>
  )
}

export default MainTile