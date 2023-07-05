import React, { Component } from 'react';
import Navigation from '../public/components/Navigation';
import styles from '../styles/Profile.module.css'
import Image from 'next/image';

import $ from 'jquery'

import Arrow from '../public/icons/arrow.png'
import Badge from '../public/icons/Annex.png'
import Logout from '../public/icons/logout.svg'
import Plus from '../public/icons/cross.png'
class Profile extends Component {
    state = {
        active:1,
    }

    constructor(props) {
        super(props)



    }
    componentDidUpdate(){
        $('.InsThumb').on('mouseover', function () {
            $(this).children('.InsThumb .ViewBlogArrow').css({ 'visibility': 'visible', 'transform': 'translateY(-50px)', 'opacity': '1' })


        }).on('mouseleave', function () {
            $('.InsThumb .ViewBlogArrow').css({ 'transform': 'translateY(0px)', 'opacity': '0', 'visibility': 'hidden' })

        })


    }
    componentDidMount(){
        // let contents= document.getElementById("contents")
        // let Infors= document.getElementById("Infos")
        // let communityTab= document.getElementById("communityTab")

        let articles= document.getElementById("articles")
        let about= document.getElementById("about")
        let community= document.getElementById("community")
        let spans = document.getElementsByClassName(`${styles.ProfileOption}`)

        articles.onclick=()=>{
            for(let i=0;i<spans.length;i++){
                spans[i].style.color="gray"
                spans[i].style.borderBottom="none"
            }

            this.setState({
                active:1
            })
            articles.style.color="black"
            articles.style.borderBottom="1px solid lightskyblue"
        }
        about.onclick=()=>{
            for(let i=0;i<spans.length;i++){
                spans[i].style.color="gray"
                spans[i].style.borderBottom="none"

            }

            this.setState({
                active:2
            })
            about.style.color="black"
            about.style.borderBottom="1px solid lightskyblue"
        }

        community.onclick=()=>{
            for(let i=0;i<spans.length;i++){
                spans[i].style.color="gray"
                spans[i].style.borderBottom="none"

            }

            this.setState({
                active:3
            })

            community.style.color="black"
            community.style.borderBottom="1px solid lightskyblue"
        }

        $('.InsThumb').on('mouseover', function () {
            $(this).css({"opacity":".9"})
            $(this).children('.InsThumb .ViewBlogArrow').css({ 'visibility': 'visible', 'transform': 'translateY(-45px)', 'opacity': '1' })
            


        }).on('mouseleave', function () {
            $(this).css({"opacity":"1"})
            $('.InsThumb .ViewBlogArrow').css({ 'transform': 'translateY(0px)', 'opacity': '0', 'visibility': 'hidden' })

        })


        


    

    }

    render() {
        return (
            <div>
                <Navigation/>
                <div className={styles.coverPicture} style={{background:'url("https://images.unsplash.com/photo-1688008926300-229f36ad49f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80") center center/cover'}}>

                    
                </div>
                <div className={styles.ProfilePicture} style={{background:'url("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS5FXAyhXJaW9Epa1l8Hpz0VfmSjylO20Jplb8EIa36rXJIsFXS") center center/cover'}}>

          
                </div>
                <div className={styles.WriterName}>
                    <div className={styles.temp}></div>
                    <span>Brian Cox  <Image src={Badge} height={25} width={25}   alt=""  className={styles.SubBadge}/> </span> 
                    <button className={styles.LogoutBtn}>Logout   <Image src={Logout} height={25} width={25}  className={styles.LogoutIcon} alt="" /> </button>

                </div>


                <div className={styles.ProfileOptions}>
                    <span className={styles.ProfileOption} id="articles">Articles</span>
                    <span className={styles.ProfileOption} id="about">About</span>
                    <span className={styles.ProfileOption} id="community">Community</span>
                </div>




            {this.state.active==1 && <div className={styles.contents} id="contents">
                
                    <div className={styles.WritingIns} >
                        <div className="InsThumb" style={{background:'url("https://images.unsplash.com/photo-1688008926300-229f36ad49f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80") center center/cover'}}>
                            <span className="ViewBlogArrow">View Article <Image src={Arrow} height={20} width={20}   alt="" className={styles.recArrow} /></span>

                        </div>

                        <div className={styles.InsTitle}>This is a instant of Title of some blog This is the best blog ever made in the world</div>
                    </div>
                    
                    <div className={styles.WritingIns} >
                        <div className="InsThumb" style={{background:'url("https://plus.unsplash.com/premium_photo-1675598468835-f9d0f26834aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80") center center/cover'}}>
                            <span className="ViewBlogArrow">View Article <Image src={Arrow} height={20} width={20}   alt="" className={styles.recArrow} /></span>

                        </div>

                        <div className={styles.InsTitle}>This is a instant of Title of some blog This is the best blog ever made in the world</div>
                    </div>
                    
                    <div className={styles.WritingIns} >
                        <div className="InsThumb" style={{background:'url("https://images.unsplash.com/photo-1688053793446-197dbc86e237?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80") center center/cover'}}>
                            <span className="ViewBlogArrow">View Article <Image src={Arrow} height={20} width={20}   alt="" className={styles.recArrow} /></span>

                        </div>

                        <div className={styles.InsTitle}>This is a instant of Title of some blog This is the best blog ever made in the world</div>
                    </div>
                    
                    <div className={styles.WritingIns} >
                        <div className="InsThumb" style={{background:'url("https://images.unsplash.com/photo-1688275372490-f631e92bf98d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80") center center/cover'}}>
                            <span className="ViewBlogArrow">View Article <Image src={Arrow} height={20} width={20}   alt="" className={styles.recArrow} /></span>

                        </div>

                        <div className={styles.InsTitle}>This is a instant of Title of some blog This is the best blog ever made in the world</div>
                    </div>

                    <div className={styles.WritingIns} >
                        <div className="InsThumb" style={{background:'url("https://images.unsplash.com/photo-1682686580224-cd46ea1a6950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80") center center/cover'}}>
                            <span className="ViewBlogArrow">View Article <Image src={Arrow} height={20} width={20}   alt="" className={styles.recArrow} /></span>

                        </div>

                        <div className={styles.InsTitle}>This is a instant of Title of some blog This is the best blog ever made in the world</div>
                    </div>

                    
                    
                
                    
                </div>
                
}  
<button className={styles.AddWtBtn}>WRITE   <Image src={Plus} height={5} width={5}  className={styles.WritePlusIcon} alt="" /> </button>



                {this.state.active==2 &&     <div className={styles.info} id="Infos">
                    <span>Professor at University of Manchester</span>
                    <ul>
                        <li>1000 followers</li>
                        <li>Rating - 4.8/5</li>
                        <li>Member since 2023</li>

                    </ul> 
                </div>
}

                {this.state.active==3 &&  <div className={styles.communityTab} id="communityTab"> 
                Coming soon
      
                </div>
}
     




            </div>
        );
    }
}

export default Profile;
