import React, { Component } from 'react'
import Tdots from '../../icons/Tdots.png'
import Image from 'next/image'

export default class Comments extends Component {
    render() {
        return (
            <>
            <div className='Write_comment'>
                <div className='FirstComtSec'>
            <div className="comment_img"

            style={{ background: `url('https://techcrunch.com/wp-content/uploads/2021/01/GettyImages-1229901940.jpg?w=730&crop=1') center center/cover` }}>


            </div>
                <input className='Comment_input_box'></input>
                </div>
                <div className='ScndCommentSec'>
                <button className='CommentBtn'>Cancel</button>
                <button className='CommentBtn'>Post</button>
           

                </div>
       
            </div>

                <div className="comment">


                    <div className="comment_name_date">
                        <div className="comment_img"

                            style={{ background: `url('https://techcrunch.com/wp-content/uploads/2021/01/GettyImages-1229901940.jpg?w=730&crop=1') center center/cover` }}>



                        </div>
                        <div className="comment_name_date">
                            Rafid Ahmed <span className="Date_and_time">20 may,2020</span>
                        </div>


                    </div>


                    <div className="comment_text">
                        this is the best thing ever im looking throug a hole in the sky

                        <Image src={Tdots} height={30} width={30} className="CommentOpt"  alt="" />

                    </div>
                </div>

                <div className="comment">


                    <div className="comment_name_date">
                        <div className="comment_img"
                            style={{ background: `url('https://techcrunch.com/wp-content/uploads/2021/01/GettyImages-1229901940.jpg?w=730&crop=1') center center/cover` }}>



                        </div>
                        <div className="comment_name_date">
                            Rafid Ahmed <span className="Date_and_time">20 may,2020</span>
                        </div>


                    </div>


                    <div className="comment_text">
                        this is the best thing ever du dud du du du du du dud ud ud
                        <Image src={Tdots} height={30} width={30} className="CommentOpt"  alt="" />

                    </div>
                </div>

                <div className="comment">


                    <div className="comment_name_date">
                        <div className="comment_img"
                            style={{ background: `url('https://techcrunch.com/wp-content/uploads/2021/01/GettyImages-1229901940.jpg?w=730&crop=1') center center/cover` }}>


                        </div>
                        <div className="comment_name_date">
                            Rafid Ahmed <span className="Date_and_time">20 may,2020</span>
                        </div>


                    </div>


                    <div className="comment_text">
                        this is the best thing ever sky ai ai i seeing through the eyes of light im seeing the waste
                        downing to east lifing under prothets of life and this is some music du du ud ud dud some
                        text and some more text that may or maynot make sense
                        <Image src={Tdots} height={30} width={30} className="CommentOpt"  alt="" />

                    </div>

                </div>

                <div className="comment">


                    <div className="comment_name_date">
                        <div className="comment_img"
                            style={{ background: `url('https://techcrunch.com/wp-content/uploads/2021/01/GettyImages-1229901940.jpg?w=730&crop=1') center center/cover` }}>


                        </div>
                        <div className="comment_name_date">
                            Rafid Ahmed <span className="Date_and_time">20 may,2020</span>
                        </div>


                    </div>


                    <div className="comment_text">
                        this is the best thing ever sun doesnt shine
                    </div>
                </div>

                <div className="comment">


                    <div className="comment_name_date">
                        <div className="comment_img"
                            style={{ background: `url('https://techcrunch.com/wp-content/uploads/2021/01/GettyImages-1229901940.jpg?w=730&crop=1') center center/cover` }}>


                        </div>
                        <div className="comment_name_date">
                            Rafid Ahmed <span className="Date_and_time">20 may,2020</span>
                        </div>


                    </div>


                    <div className="comment_text">
                        this is the best thing ever
                    </div>
                </div>





            </>
        )
    }
}
