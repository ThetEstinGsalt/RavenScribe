import React, { Component } from 'react';
import Navigation from '../public/components/Navigation';
import styles from '../styles/Profile.module.css'
import Image from 'next/image';

import Badge from '../public/icons/Annex.png'

class Profile extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <div className={styles.coverPicture} style={{background:'url("https://images.unsplash.com/photo-1688008926300-229f36ad49f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80") center center/cover'}}>

                    
                </div>
                <div className={styles.ProfilePicture} style={{background:'url("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS5FXAyhXJaW9Epa1l8Hpz0VfmSjylO20Jplb8EIa36rXJIsFXS") center center/cover'}}>

          
                </div>
                <div className={styles.WriterName}>
                    <span>Brian Cox</span>  <Image src={Badge} height={25} width={25}   alt="" />

                </div>


                <div className={styles.ProfileOptions}>
                    <span>Articles</span>
                    <span>About</span>
                </div>
                <div className={styles.contents}>
                    <div className={styles.WritingIns}>
                        <div className={styles.InsThumb}></div>
                        <div className={styles.InsTitle}>This is a instant of Title of some blog</div>
                    </div>
                    
                    <div className={styles.WritingIns}>
                        <div className={styles.InsThumb}></div>
                        <div className={styles.InsTitle}>This is a instant of Title of some blog</div>
                    </div>

                    <div className={styles.WritingIns}>
                        <div className={styles.InsThumb}></div>
                        <div className={styles.InsTitle}>This is a instant of Title of some blog</div>
                    </div>

                    <div className={styles.WritingIns}>
                        <div className={styles.InsThumb}></div>
                        <div className={styles.InsTitle}>This is a instant of Title of some blog</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
