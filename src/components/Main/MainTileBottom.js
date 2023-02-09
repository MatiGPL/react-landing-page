import React from 'react';

import styles from './Main.module.css';

const MainTileBottom = ({person, job, children, picture, alt}) => {
  return (
    <div className={styles.background}>
        <p>
            {children}
        </p>
        <div className={styles.vertical}>
            <div>
                <img src={picture} alt={alt}/>
            </div>
            <div >
                <div>{person}</div>
                <div>{job}</div>
            </div>
        </div>
    
    </div>
  )
}

export default MainTileBottom