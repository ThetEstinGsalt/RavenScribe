import React, { Component } from 'react'
import grabimg from '../icons/grabber_arrow.png'
import ImageAndVideo from './controlbarcomps/ImageAndVideo'
import Textediting from './controlbarcomps/Textediting'
import styles from '../../styles/writing.module.css'
import Image from 'next/image'
export default class Controlbar extends Component {
    componentDidMount() {




    }
    render() {
        return (
            <>



                <div className={styles.controldbar}>
                    <div className="grabber">
                        <div className="img_box" onClick={this.downbar_activation}>

                        <Image src={grabimg} alt="Picture of the author" width={30} height={500}
    />
                            {/* <img src={grabimg} id="grabber" alt="" /> */}
                        </div>
                    </div>
                    <div className="holder">
                        <Textediting />


                        <ImageAndVideo />






                    </div>




                </div>






            </>
        )
    }
}
