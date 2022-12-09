import React, { Component } from 'react'
import wiki from '../../icons/wiki.png'
import image from '../../icons/image.png'
import link from '../../icons/link.png'

export default class ImageAndVideo extends Component {
    constructor(props) {
        super(props);
        this.linkbtn = () => {

            let content = document.querySelector('.article')
            let link_inp = document.getElementById("link_inp")
            let link_btn = document.getElementById("link_btn")



            try {
                var http = new XMLHttpRequest();

                http.open('HEAD', link_inp.value, false);
                http.send();

            }
            catch (err) {
                console.log("err connection")
            }


            if (http.status != 404) {
                let division = document.createElement("img")
                division.setAttribute("src", `${link_inp.value}`)
                division.setAttribute("height", "700px")
                division.setAttribute("width", "1000px")


                // let Name_of_class = this.Conversion[event.currentTarget.parentElement.id]
                division.className = "Article_image"
                content.append(division)

            }
            else {
                let division = document.createElement("div")
                division.innerText = "Invalid link!"
                content.append(division)

            }






        }

        this.state = {
            wiki: false,
            links: false,
            images: true
        }

        this.wiki = () => {

            this.setState({
                wiki: true,
                links: false,
                images: false


            });


        }
        this.images = () => {
            this.setState({
                wiki: false,
                links: false,
                images: true


            });

        }

        this.links = () => {
            this.setState({
                wiki: false,
                links: true,
                images: false


            });

        }
    }
    componentDidMount() {






        // let downbar = document.querySelector(".downbar")
        // let downbar_height = downbar.clientHeight

        // let WC = document.getElementsByClassName("imageAndVideo")[0]
        // // WC.style.height = downbar.style.height.replace("%", "vh")
        // let measure = (parseInt(downbar_height) - 2) / 4.18;
        // WC.style.height = measure + 'vh'


    }


    render() {
        return (
            <>

                <div className="imageAndVideo">
                    <div className="option">
                        <img src={link} alt="" onClick={this.links} />
                        <img src={image} alt="" onClick={this.images} />

                        <img src={wiki} alt="" onClick={this.wiki} />
                    </div>


                    {this.state.wiki && <iframe className="frame" src="https://en.wikipedia.org/wiki/Searching" frameBorder="0" height={100 + '%'}></iframe>}
                    {this.state.images && <iframe className="frame" src="https://www.pexels.com/" frameBorder="0" height={100 + '%'}></iframe>}
                    {this.state.links && <div className="frame"><input className="link" type="text" id="link_inp" /><button id="link_btn" onClick={this.linkbtn}>Add</button></div>}




                </div>
            </>
        )
    }
}
