import React from 'react';
import styles from './Main.module.css';
import pictureMain from '../../images/illustration-intro.png';
import Button from '../Buttons/Button';
import MainTile from './MainTile';
import iconAccessAnywhere from '../../images/icon-access-anywhere.svg';
import iconSecurity from '../../images/icon-security.svg';
import iconCollaboration from '../../images/icon-collaboration.svg';
import iconAnyFile from '../../images/icon-any-file.svg';
import stayProductive from '../../images/illustration-stay-productive.png'
import MainTileBottom from './MainTileBottom';
import pictureteam1 from '../../images/profile-1.jpg';
import pictureteam2 from '../../images/profile-2.jpg';
import pictureteam3 from '../../images/profile-3.jpg';


const Main = () => {
  return (
    <div className={styles.main}>
        <img src={pictureMain} alt="Company logo"/>
        <h2>All your files in one secure location, accessible anywhere</h2>
        <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers</p>
        <Button text="Get Started"/>
     
        <div className={styles.containerTiles}>
            <MainTile picture={iconAccessAnywhere} alt={'iconAccessAnywhere'} header="Acces your files, anywhere">
            The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.
            </MainTile>
    
            <MainTile picture={iconSecurity} alt={'iconSecurity'} header="Security you can trust">
            2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files
            </MainTile>

            <MainTile picture={iconCollaboration} alt={'iconCollaboration'} header="Real-time collaboration">
            Securely share files and folders with friends, family and colleagues for live collaboration. No email attachements required.
            </MainTile>

            <MainTile picture={iconAnyFile} alt={'iconAnyFile'} header="Store any type of file">
            Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.
            </MainTile>
            <div className={styles.containermiddle}>
            <div>
                <img src={stayProductive} alt={'stayProductive'}/>
            </div>
            <div>
                <h2>Stay productive wherever you are</h2>
                <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs</p>
                <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachemenets required.</p>
                <button className={styles.btnunderline}>See how Fylo works</button>
            </div>
            </div>
            <div className={styles.containerbottom}>
                <MainTileBottom picture={pictureteam1} alt={`picturetam1`} person={"Satish Patel"} job={"Founder & CEO, Huddle"}>
                Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
                </MainTileBottom>

                <MainTileBottom picture={pictureteam2} alt={`picturetam2`} person={"Bruce McKenzie"} job={"Founder & CEO, Huddle"}>
                Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
                </MainTileBottom>

                <MainTileBottom picture={pictureteam3} alt={`picturetam3`} person={"Iva Boyd"} job={"Founder & CEO, Huddle"}>
                Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
                </MainTileBottom>
                

            </div>
            
        </div>
        <div>
        
        </div>

    </div>
  )
}

export default Main