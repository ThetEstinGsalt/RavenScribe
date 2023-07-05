import React, { Component } from 'react'

export default class Drecommendation extends Component {

    constructor(props){
        super(props);
    }
    componentDidMount(){
        const slider = document.querySelector('.recommendations');
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;

            const walk = (x - startX) * 1; //scroll-fast

            slider.scrollLeft = scrollLeft - walk;

            // console.log(walk);
        });
        
    }
    render() {
        return (
            <>
                <div className="recommendations">


                    <div className="recommendation">
                        <div className="recommendation_thumbnail">

                        </div>
                        <div className="recommendation_text">
                            this is text and this is more text

                        </div>
                    </div>

                    <div className="recommendation">
                        <div className="recommendation_thumbnail">

                        </div>
                        <div className="recommendation_text">
                            this is text and this is more text
                            


                        </div>
                    </div>

                    <div className="recommendation">
                        <div className="recommendation_thumbnail">

                        </div>
                        <div className="recommendation_text">
                            top ten superheros of marvel cinematic universe that were inspired by real life vigilantes



                        </div>
                    </div>

                    <div className="recommendation">
                        <div className="recommendation_thumbnail">

                        </div>
                        <div className="recommendation_text">
                            top ten superheros of marvel cinematic universe that were inspired

                        </div>
                    </div>

                    <div className="recommendation">
                        <div className="recommendation_thumbnail">

                        </div>
                        <div className="recommendation_text">
                            top ten superheros of marvel cinematic universe that were inspired

                        </div>
                    </div>

                    <div className="recommendation">
                        <div className="recommendation_thumbnail">

                        </div>
                        <div className="recommendation_text">
                        top ten superheros of marvel cinematic universe that were inspired


                        </div>
                    </div>

                    <div className="recommendation">
                        <div className="recommendation_thumbnail">

                        </div>
                        <div className="recommendation_text">
                        top ten superheros of marvel cinematic universe that were inspired


                        </div>
                    </div>

                </div>

            </>
        )
    }
}
