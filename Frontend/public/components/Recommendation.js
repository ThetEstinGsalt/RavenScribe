import React, { Component } from 'react'

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
    render() {
        return (
            <>
                <div className="writer_recommendation">
                    <div className="writer_rec_box" onMouseDown={(e) => { this.clicked(e, e.target, "https://www.youtube.com"); }}>
                        <div className="writer_rec_box_thumbnail">div1</div>
                        <div className="writer_rec_text">mbled it to make a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                            desktop publi</div>

                    </div>
                    <div className="writer_rec_box" onMouseDown={(e) => { this.clicked(e, e.target, "https://www.youtube.com"); }}>
                        <div className="writer_rec_box_thumbnail">div1</div>
                        <div className="writer_rec_text">mbled it to make a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic more recently with
                            desktop publi</div>

                    </div>

                    <div className="writer_rec_box" onMouseDown={(e) => { this.clicked(e, e.target, "https://www.youtube.com"); }}>
                        <div className="writer_rec_box_thumbnail">div1</div>
                        <div className="writer_rec_text">mbled it to make a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic tining Lorem Ipsum passages, and more recently with
                            desktop publi</div>

                    </div>

                    <div className="writer_rec_box" onMouseDown={(e) => { this.clicked(e, e.target, "https://www.youtube.com"); }}>

                        <div className="writer_rec_box_thumbnail">div1</div>
                        <div className="writer_rec_text">mbled it to make a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                            the 1960s with the release of Ly with
                            desktop publi</div>

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
