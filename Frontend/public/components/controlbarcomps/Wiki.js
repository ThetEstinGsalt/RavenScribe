import React, { Component } from 'react'
import wiki from '../../icons/wiki.png'
import image from '../../icons/image.png'
import link from '../../icons/link.png'

export default class ImageAndVideo extends Component {
    constructor(props) {
        super(props);
     
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




                    <iframe className="frame" src="https://en.wikipedia.org/wiki/Searching" frameBorder="0" height={100 + '%'} width={100+ '%'}></iframe>
                   



            </>
        )
    }
}
