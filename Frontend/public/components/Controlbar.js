import React, { Component } from 'react'
import grabimg from '../icons/grabber_arrow.png'
import wiki from '../icons/wiki.png'
import Gif from '../icons/Gif.png'
import image from '../icons/image.png'
import Text from '../icons/Text.png'
import Wiki from './controlbarcomps/Wiki'
import Gifs from './controlbarcomps/GifFetching'
import ImagesFet from './controlbarcomps/ImagesFet'
import Textediting from './controlbarcomps/Textediting'
import LinkIcon from '../icons/link.png'
import Link from './controlbarcomps/Link'
import styles from '../../styles/writing.module.css'
import Image from 'next/image'

export default class Controlbar extends Component {
    constructor(props){
        super(props);
        this.state={
            Wiki:false,
            Image:false,
            Gif:false,
            Link:false,
        }
    }
    // state={
    //     'Wiki':false,
    //     'Image':false,
    //     'Gif':false,

    // }
    componentDidMount() {
        let Gif=document.getElementById("Gif")
        let Image=document.getElementById("Image")
        let Wiki=document.getElementById("Wiki")
        let Link =document.getElementById("Link")

        Gif.addEventListener('click',()=>{
            this.setState({
                Wiki:false,
                Image:false,
                Gif:true,
                Link:false
            })
        })
        Image.addEventListener('click',()=>{
            this.setState({
                Wiki:false,
                Image:true,
                Gif:false,
                Link:false,
            })
        })
        Wiki.addEventListener('click',()=>{
            this.setState({
                Wiki:true,
                Image:false,
                Gif:false,
                Link:false
            })
        })

        Link.addEventListener('click',()=>{
            this.setState({
                Wiki:false,
                Image:false,
                Gif:false,
                Link:true,
            })
        })

        // let looplist=[Gif,Image,Wiki]
        // let looplistind=['Gif','Image','Wiki']

        // for(let i=0;i<looplist.length;i++){
            
        //     looplist[i].addEventListener('click',()=>{
        //         for(let j=0;j<looplist.length;j++){
        //             this.state.looplistind[j]=false
        //         }
        //         this.state.looplistind[i]=true

            
        //     })
        // }
    





    }
    render() {
        return (
            <>



                <div className={styles.controldbar}>
                    <div className="grabber">
                        <div className="img_box" onClick={this.downbar_activation}>

                        <Image src={grabimg} alt="" width={30} height={500}/>
                        </div>
                    </div>


                    <div className={styles.ResponsiveHolder}>

                        

                    <div className={styles.holderControl}>
                        <div className={`${styles.Writing_Options_PC}`+' '+`${styles.Writing_Options_PC_firstChild}`}>

              
                        <Image src={Text} alt="" width={30} height={500} className={styles.optionImg}/>
    

                        </div>

                        <div className={styles.Writing_Options}>

                        <Image src={image} alt="" width={30} height={500} className={styles.optionImg} />
                        <Image src={Text} alt="" width={30} height={500} className={styles.optionImg}/>
                        <Image src={wiki} alt="" width={30} height={500} className={styles.optionImg} />
     
                        
                            

                        </div>

                        <Textediting/>




                        

                    </div>


                    <div className={styles.Attachments}>
                        <div className={styles.Writing_Options_PC}>
                            <Image src={image} alt="" id="Image" width={30} height={500} className={styles.optionImg} />
                            <Image src={wiki} alt="" id="Wiki" width={30} height={500} className={styles.optionImg} />
                            <Image src={Gif} alt=""  id="Gif"width={30} height={500} className={styles.optionImg} />
                            <Image src={LinkIcon} alt=""  id="Link"width={30} height={500} className={styles.optionImg} />




                        </div>
                        {/* <Wiki/> */}
                        {this.state.Image && <ImagesFet/>}
                        {this.state.Wiki && <Wiki/>}
                        {this.state.Gif && <Gifs/>}
                        {this.state.Link && <Link/>}

                    </div>




             



                    </div>
                




                </div>






            </>
        )
    }
}
