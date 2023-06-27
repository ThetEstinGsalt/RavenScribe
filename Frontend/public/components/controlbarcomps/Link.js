import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/Editing'
import styles from '../../../styles/writing.module.css'

class Link extends Component {
    constructor(props){
        super(props);
        this.Select=(div)=>{
            this.props.Select(div)
        

        }

    }
    componentDidMount(){
        let inpBar=document.getElementById("link_inp")
        inpBar.addEventListener("keydown",(e)=>{
            if(e.key=="Enter"){
                if(inpBar.value.includes("www.youtube.com")){
                    let div=document.createElement("div")
                    let NewElem=document.createElement("iframe")
                    NewElem.width=560
                    NewElem.height=315
                    NewElem.title="YouTube video player"
                    NewElem.frameborder=0
                    NewElem.allowFullscreen=true
                    NewElem.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    NewElem.src="https://www.youtube.com/embed/hBDwXipHykQ"

                    div.appendChild(NewElem)
                    // div.className=`${styles.ParentDiv}`
                    div.className="blogContent"
                    div.style.textAlign="center"
                    // let selected=<iframe width="560" height="315" src="https://www.youtube.com/embed/hBDwXipHykQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                    this.props.Select(div)
                }
                else{
                    
                    let link=inpBar.value
                    let NewElem=document.createElement("img")
                    NewElem.src = link
                    NewElem.className="blogContent"
                    this.props.Select(NewElem)
    
                }

            }

        })
    }
    render() {
        return (
            <div>

                This is nothing but a bitch lasagna
                <input id="link_inp"></input>
                
            </div>
        );
    }
}





const mapDispatchToProps = (dispatch) => {
    return {

        Select:(div)=>dispatch(actions.SelectSuccess(div))
  

    }
}

// export default Link;

export default (connect(null,mapDispatchToProps)(Link))
