import React, { Component } from 'react'
import DbArrow from '../../icons/DbArrow.png'
export default class Textediting extends Component {
    constructor(props) {
        super(props);
        // Don't do this!
        this.state = {
            selected_itm: null,
        }
        this.clicked = 0
        this.Conversion = {
            CaS: 'concept',
            Text: 'blog-content',
            heading: 'article-heading',
            Quotes: 'quotes',
            Bold: 'Bold',
            Sbheading: 'subHeading'


        }
        this.Delete = () => {
            let content = document.querySelector('.article')
            let temp = document.createElement("div")
            temp.innerText = ""


            try {
                content.replaceChild(temp, this.state.selected_itm)


            }
            catch (err) {
                console.log(err)
            }


        }
        this.ListClick = (event) => {
            // let Text = document.querySelector("#Text_enroll")
            let txt_area = document.querySelector("#Text_input")
            let enroll = document.querySelector("#exp")
            enroll.style.height = 0 + 'em'
            // Bar.style.height = 0 + 'em'
            txt_area.value = ""

            let content = document.querySelectorAll('.blog-content')[document.querySelectorAll('.blog-content').length - 1]

            let division = document.createElement("li")
            division.setAttribute("contenteditable", "true");
            division.setAttribute("spellcheck", "true");



            division.innerText = "List item"
            content.append(division)

        }
        this.advertisement = (event) => {
            // let content = document.querySelectorAll('.blog-content')[document.querySelectorAll('.blog-content').length - 1]
            let content = document.querySelector(".article")

            let division = document.createElement("div")
            division.setAttribute("contenteditable", "false");



            division.innerText = "Advertisement"
            division.className = "space"
            content.append(division)


            // let spaces = document.querySelectorAll(".space")
            // for (let i = 0; i < spaces.length; i++) {
            //     spaces[i].addEventListener("click", function () {
            //         console.log("the selected space")
            //         console.log(spaces[i])
            //         this.setState({ selected_itm: spaces[i] })



            //         // this.state.selected_itm.style.background = "#EEEEEE"



            //     }.bind(this))
            // }



        }

        this.BarDisplay = (event) => {



            // let content = document.querySelector('.site-content')
            let content = document.querySelector('.article')
            // let Bar = event.currentTarget.parentElement.parentElement.lastChild
            let Bar = event.currentTarget.parentElement.lastChild
            // console.log(Bar)
            // console.log(event.currentTarget.parentElement)
            if (Bar.style.height !== 15 + 'em') {
                Bar.style.height = 15 + 'em'


                let division = document.createElement("div")
                division.setAttribute("contenteditable", "true");
                division.setAttribute("spellcheck", "true");



                let Name_of_class = this.Conversion[event.currentTarget.parentElement.id]
                division.className = Name_of_class
                content.append(division)



            }
            else {

                Bar.style.height = 0 + 'em'
                event.currentTarget.parentElement.lastChild.children[0].value = ""




            }








        }


    }
    componentDidMount() {


        // let content = document.querySelector('.site-content')


        // -------------------THE_PRO_GAMER_MOVE-------------------
        let text_inps = document.querySelectorAll(".textarea")
        let Lists = document.querySelectorAll("li")
        let Cas_inp = document.querySelector("#CaS_input")
        let Cas = document.getElementById("concept")
        let index = 0;

        // try {


        // }
        // catch (err) {
        //     console.log("tried first time")
        // }

        Cas_inp.addEventListener("input", (e) => {
            Cas.innerText = Cas_inp.value

        })







        for (let i = 0; i < text_inps.length; i++) {
            text_inps[i].addEventListener("input", (e) => {

                let content = document.querySelector('.article')



                let name = this.Conversion[`${text_inps[i].parentElement.parentElement.id}`]


                let div = document.getElementsByClassName(name)[document.getElementsByClassName(name).length - 1]
                div.innerText = text_inps[i].value

                // ---------------------------------------

                for (let i = 0; i < content.childElementCount; i++) {


                    if (content.children[i].innerHTML === "") {
                        if (content.children[i].tagName !== "IMG") {
                            if (content.children[i] !== content.children[content.childElementCount - 1]) {
                                content.removeChild(content.children[i])


                            }

                        }



                    }

                }
                // if()

                for (let i = 0; i < content.childElementCount; i++) {

                    content.children[i].addEventListener('click', () => {
                        this.setState({ selected_itm: content.children[i] })
                        // console.log(content.children[i])
                        // console.log(this.state.selected_itm)
                        console.log(i)
                        console.log(`Iteration is ${content.children[i].innerText}`)
                        console.log(`state is ${this.state.selected_itm.innerText}`)

                        if (content.children[i].tagName !== "IMG") {
                            if (content.children[i] === this.state.selected_itm) {
                                content.children[i].style.background = "#EEEEEE"

                            }

                            // content.children[i].style.background = "white"


                        }
                        else {
                            content.children[i].style.opacity = "0.4"
                        }



                        // if (content.children.indexOf(this.state.selected_itm) > -1) { // only splice array when item is found

                        for (let i = 0; i < content.childElementCount; i++) {
                            if (content.children[i] !== this.state.selected_itm) {
                                if (content.children[i].nodeName !== "IMG") {
                                    content.children[i].style.background = "white"


                                }
                                else {
                                    content.children[i].style.opacity = "1"
                                }
                            }

                        }
                    }
                    )



                    // if (this.state.selected_itm !=== content.children[i]) {
                    //     content.children[i].addEventListener('mouseover', () => {
                    //         content.children[i].style.background = "skyblue"
                    //     })
                    //     content.children[i].addEventListener('mouseout', () => {
                    //         content.children[i].style.background = "white"
                    //     })



                    // }

                    // }




                }





            })

        }








        // let downbar = document.querySelector(".downbar")
        // let downbar_height = downbar.clientHeight

        // let WC = document.getElementsByClassName("writing_control")[0]
        // // WC.style.height = downbar.style.height.replace("%", "vh")
        // let measure = (parseInt(downbar_height) - 2) / 4.18;
        // WC.style.height = measure + 'vh'


    }

    render() {

        return (
            <>
                <div className="writing_control">
                    <div className="EditingComp" id="CaS">
                        <div className="Unroll" onClick={this.BarDisplay} >
                            <span>Blog Summary</span> <img height={19 + 'px'} src={DbArrow} alt="" />


                        </div>

                        <div className="bar">
                            <textarea data-enable-grammarly="true" name="CaS" id="CaS_input" cols="30" rows="10"></textarea>
                            <div id="CaS_btn" className="btn">
                                Add
                            </div>
                        </div>
                    </div>


                    <div className="EditingComp" id="heading">
                        <div className="Unroll" id="heading_enroll" onClick={this.BarDisplay}>
                            <span>Add Heading</span> <img height={19 + 'px'} src={DbArrow} alt="" />


                        </div>

                        <div className="bar">
                            <textarea className="textarea" name="heading" id="heading_input" cols="30" rows="10"></textarea>
                            <div id="heading_btn" className="btn">
                                Add
                            </div>
                        </div>
                    </div>


                    <div className="EditingComp" id="Text">
                        <div className="Unroll" id="Text_enroll" onClick={this.BarDisplay}>
                            <span>Add Text</span> <img height={19 + 'px'} src={DbArrow} alt="" />


                        </div>

                        <div className="bar" id="exp">
                            <textarea className="textarea" name="Text" id="Text_input" cols="30" rows="10"></textarea>
                            <div id="Text_btn" className="btn">
                                Add
                            </div>
                        </div>
                    </div>

                    <div className="EditingComp" id="Bold">
                        <div className="Unroll" id="Bold_enroll" onClick={this.BarDisplay}>
                            <span>Bolded Text</span> <img height={19 + 'px'} src={DbArrow} alt="" />


                        </div>

                        <div className="bar">
                            <textarea className="textarea" name="Text" id="Bold_input" cols="30" rows="10"></textarea>
                            <div id="Bold_btn" className="btn">
                                Add
                            </div>
                        </div>
                    </div>






                    <div className="EditingComp" id="Sbheading">
                        <div className="Unroll" id="Sbheading_enroll" onClick={this.BarDisplay} >
                            <span>Sub heading</span> <img height={19 + 'px'} src={DbArrow} alt="" />


                        </div>

                        <div className="bar">
                            <textarea className="textarea" name="Sbheading" id="Sbheading_input" cols="30" rows="10"></textarea>
                            <div id="Sbheading_btn" className="btn">
                                Add
                            </div>
                        </div>
                    </div>




                    <div className="EditingComp" id="Quote">
                        <div className="Unroll" id="Quote_enroll" onClick={this.BarDisplay} >
                            <span>Add Quote</span> <img height={19 + 'px'} src={DbArrow} alt="" />


                        </div>

                        <div className="bar">
                            <textarea className="textarea" name="Quote" id="Quote_input" cols="30" rows="10"></textarea>
                            <div id="Quote_btn" className="btn">
                                Add
                            </div>
                        </div>
                    </div>


                    <div className="cust_btn">
                        <div className="cust btn" onClick={this.ListClick} >List Item</div>
                        <div className="cust btn" onClick={this.advertisement}>Advertisement</div>
                        <div className="cust btn" onClick={this.Delete}>Delete</div>
                    </div>

                </div>


            </>
        )
    }
}
