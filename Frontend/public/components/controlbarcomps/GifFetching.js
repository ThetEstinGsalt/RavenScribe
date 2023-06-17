import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/Editing'
import styles from '../../../styles/writing.module.css'
import Image from 'next/image';
import Head from 'next/head'
import axios from 'axios';

class ImagesFet extends Component {
    constructor(props){
        super(props);
        this.handlefetch=(key,page)=>{
            this.props.Image(key,page)
        

        }
        this.handleGif=(key)=>{
            this.props.Gif(key)
        }
    }
    
    componentDidUpdate(){
        console.log(this.props.Fetched)

        let imageDiv=document.getElementById("Gif_div")
        console.log(this.props.Fetched)
        console.log(this.props.Fetched.data.length)
        for(let i=0;i<this.props.Fetched.data.length;i++){
            // let image=document.createElement("img")
            let image=document.createElement("img")
            image.setAttribute("src",this.props.Fetched.data[`${i}`].images.original.url)
            image.setAttribute("class",`${styles.FetchedGif}`)
            imageDiv.appendChild(image)
        }
        let article=document.getElementsByClassName("article")[0]
        let selecDiv=this.props.Selected
        let selecDivInit=document.getElementsByClassName("blog-content")[0]


        let images=document.querySelectorAll(`.${styles.FetchedGif}`)
        for(let j=0;j<images.length;j++){
            images[j].addEventListener('click',()=>{
                let copy=images[j].cloneNode(true)
                copy.removeAttribute("class")
                copy.setAttribute("class","article-thumb-img")
                try{
                    selecDiv.appendChild(copy)


                }
                catch(e){
                    selecDivInit.appendChild(copy)
                }

 
                
            })
        }
        console.log(this.props.Fetched)



      
        
    }
    componentDidMount(){
      

        let search_inp=document.getElementsByClassName(`${styles.Gif_search}`)[0]
        search_inp.addEventListener("keydown",(e)=>{
            if(e.key=="Enter"){
                this.handleGif(search_inp.value)

            }
        })
        
    }
    
    render() {
        return (
            <>
         

            
            <div className='HolderGif'>
            <div className={styles.Search}>
                
                <input className={styles.Gif_search}></input>
    
           
            </div>

            <div className={styles.Gif_display} id="Gif_div">
   
                
     
            </div>


            </div>
    
            
         

            </>
            
        );
    }
}




const mapStateToProps = (state) => {
    return {
        Fetched: state.Edit.FetchList,
        Selected:state.Edit.Selected

        // images: state.reducerEdit.error,
    

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Image: (key,page) => dispatch(actions.fetchImage( key,page)),
        Gif: (key) => dispatch(actions.fetchGif( key)),
  

    }
}

// export default Writing
export default (connect(mapStateToProps,mapDispatchToProps)(ImagesFet))
