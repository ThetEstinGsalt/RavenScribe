import React, { Component } from 'react'
import facebook from "../icons/facebook.png"
import gmail from "../icons/gmail.png"
import instagram from "../icons/instagram.png"
import grabimg from "../icons/grabber_arrow.png"
import Desc from './downbar_components/Desc'
import Comments from './downbar_components/Comments'
import Links from './downbar_components/Links'
import Badge from './../icons/Annex.png'
import Drecommendation from './downbar_components/Drecommendation'
import Image from 'next/image'


export default class Downbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: true,
            links: false,
            desc: false,
            downbar: false
        };
        this.change_to_comment = () => {

            this.setState({
                comments: true,
                links: false,
                desc: false,


            });
        }
        this.change_to_desc = () => {
            this.setState({
                comments: false,
                links: false,
                desc: true

            });


        }
        this.change_to_links = () => {
            this.setState({
                comments: false,
                links: true,
                desc: false

            });

            // this.setState({

            //   });
        }


        this.downbar_activation = () => {
            let downbar = document.querySelector(".downbar")
            if (this.state.downbar) {
                this.setState({
                    downbar: false

                })
                // downbar.style.bottom = "-49.5em"
                downbar.style.bottom = "-78.5%"
                // downbar.style.background = "transparent"

            }
            else {
                this.setState({
                    downbar: true

                })
                downbar.style.bottom = "0"

            }

        }
    }
    componentDidMount() {
        let downbar = document.querySelector(".downbar")
        // downbar.style.bottom = "-78%"


        let grabber = document.querySelector(".grabber")
        let height = getComputedStyle(grabber).top
        document.querySelector(".grabber").style.top = height
        // window.onscroll = function () {
        //     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        //         this.setState({
        //             downbar: true

        //         })
        //     }
        // };

    }

    render() {


        const selected_option_style = {
            borderBottom: "2px solid skyblue"
        }

        return (
            <>



                <div className="downbar">
                    <div className="grabber">
                        <div className="img_box" onClick={this.downbar_activation}>

                            {/* <img src={grabimg} id="grabber" alt="" /> */}
                            <Image src={grabimg} height={20} width={30} alt="" unselectable="on"
                onselectstart="return false;" 
                onmousedown="return false;"/>
               
                        </div>
                    </div>


                    {/* -----------recommendation------------- */}
                    <Drecommendation />

                    {/* -----------recommendation------------- */}

                    {/* <hr id="recom_diff_hr">  */}
                    <div className="topic_and_writer">

                        <div className="writer">
                            <div className="writer_image"
                                style={{ background: `url('https://techcrunch.com/wp-content/uploads/2021/01/GettyImages-1229901940.jpg?w=730&crop=1') center center/cover` }}>




                            </div>
                            <div className="writer_name">
                                Rafid Ahmed <Image src={Badge} height={20} width={20} id='AnnexBadge'   alt="" />

                            </div>
                            <div className="writer_desc">
                                student at dhanmondi govt boy's high school and ameture writer add content i said add more and more
                                content so that it gets bigger
                                <button id="Annex">Annex</button>



                            </div>
                            <div className="writer_socialmedia">
                                <div className="facebook">
                                    <img src={facebook} alt="" />


                                </div>
                                <div className="insta">
                                    <img src={instagram} alt="" />

                                </div>
                                <div className="email">
                                    <img src={gmail} alt="" />

                                </div>
                            </div>


                        </div>

                        <div className="topic_wrapper">
                            <div className="topic_title">

                                <div className="option" id="desc" style={{ color: "gray" }} onClick={this.change_to_desc} >
                                    Description
                                </div>
                                <div className="option" style={selected_option_style} onClick={this.change_to_comment}>
                                    Comments
                                </div>
                                <div className="option" id="comments" style={{ color: "gray" }} onClick={this.change_to_links}>
                                    Links
                                </div>
                            </div>

                            <div className="topicsec">
                                {this.state.comments && <Comments />}
                                {this.state.desc && <Desc />}
                                {this.state.links && <Links />}














                                {/* <div className="description">
                            this is the description of the video
                        </div>
                        <div className="promotion">
                            here is the promotion link
                        </div>  */}
                            </div>




                        </div>


                    </div>
                </div>


            </>

        )
        //
    }
}
