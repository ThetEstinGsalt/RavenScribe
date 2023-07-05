import React, { Component } from 'react'
import $ from 'jquery'
export default class Recommendation extends Component {
    constructor(e){
        super(e);
        this.clicked=(event, elem, link)=>{

            let x = event.clientX
            let y = event.clientY
            elem.addEventListener("mouseup", (e) => {
                if (e.clientX == x && e.clientY == y) {
                    window.location = link
                }
            })
            // console.log(event, elem, link)
    
    
    
        }
    }
    componentDidMount(){
        $('.writer_rec_box_thumbnail').on('mouseover', function () {
            $(this).children('.writer_rec_box_thumbnail .view').css({ 'visibility': 'visible', 'transform': 'translateY(10px)', 'opacity': '1' })




        }).on('mouseleave', function () {
            $('.writer_rec_box_thumbnail .view').css({ 'transform': 'translateY(50px)', 'opacity': '0', 'visibility': 'hidden' })



        })
    }
    render() {
        return (
            <>
                <div className="writer_recommendation">
                    <div className="writer_rec_box" onMouseDown={(e) => { this.clicked(e, e.target, "https://www.youtube.com"); }}>
                        <div className="writer_rec_box_thumbnail"  style={{"background": "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1544&q=80')no-repeat center center/cover;"}}><div class="view">View Post &rarr;

                </div></div>
                        <div className="writer_rec_text">This is a dummy sample Blog on RavenScribe And thats Title This is a dummy sample </div>

                    </div>
                    <div className="writer_rec_box" onMouseDown={(e) => { this.clicked(e, e.target, "https://www.youtube.com"); }}>
                        <div className="writer_rec_box_thumbnail" style={{"background": "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1544&q=80')no-repeat center center/cover;"}}> <div class="view">View Post &rarr;

                </div></div>
                        <div className="writer_rec_text">mbled it to make a type specimen book. It has survived not only fivei</div>

                    </div>

                    <div className="writer_rec_box" onMouseDown={(e) => { this.clicked(e, e.target, "https://www.youtube.com"); }}>
                        <div className="writer_rec_box_thumbnail" style={{"background": "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1544&q=80')no-repeat center center/cover;"}}> <div class="view">View Post &rarr;

                </div></div>
                        <div className="writer_rec_text">mbled it to make a type specimen book. It has survived not only five centuries,
                            but alsThis is a dummy sample Blog</div>

                    </div>

                    <div className="writer_rec_box" onMouseDown={(e) => { this.clicked(e, e.target, "https://www.youtube.com"); }}>

                        <div className="writer_rec_box_thumbnail" style={{"background": "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1544&q=80')no-repeat center center/cover;"}}><div class="view">View Post &rarr;

                </div></div>
                        <div className="writer_rec_text">mbled it to make a type specimen book.
                            but also the leap into electronic typesetting, remaining essentially</div>

                    </div>
                </div>


                
                <div className="wrapper">

                    <div className="litem" onClick={this.id}>
                        <div className="item" style={{ background: `url('https://images.unsplash.com/photo-1651212989224-3c5d494a524f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80') center center/cover` }}></div>
                        <div className="responsive_rec_text" style={{ fontSize: 20 + 'px' }}>
                            This is a title 2


                        </div>

                    </div>

                    <div className="litem" onClick={this.id}>
                        <div className="item" style={{ background: `url('https://images.unsplash.com/photo-1651212989224-3c5d494a524f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80') center center/cover` }}></div>
                        <div className="responsive_rec_text" style={{ fontSize: 20 + 'px' }}>
                            This is a title 2


                        </div>

                    </div>


                    <div className="litem" onClick={this.id}>
                        <div className="item" style={{ background: `url('https://images.unsplash.com/photo-1651212989224-3c5d494a524f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80') center center/cover` }}></div>
                        <div className="responsive_rec_text" style={{ fontSize: 20 + 'px' }}>
                            This is a title 2


                        </div>

                    </div>


                    <div className="litem" onClick={this.id}>
                        <div className="item" style={{ background: `url('https://images.unsplash.com/photo-1651212989224-3c5d494a524f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80') center center/cover` }}></div>
                        <div className="responsive_rec_text" style={{ fontSize: 20 + 'px' }}>
                            This is a title 2


                        </div>

                    </div>



                </div>
                <div id="lastspace" style={{ width: 100 + '%' }}></div>

            </>
        )
    }
}
