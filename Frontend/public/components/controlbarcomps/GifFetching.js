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
        this.Select=(div)=>{
            this.props.Select(div)
        

        }
        this.handleGif=(key)=>{
            this.props.Gif(key)
        }
    }
    state={
        Fetched:null,
 
    }

    componentDidUpdate(){
        //    let imageDiv=document.getElementById("Gif_div")
        // console.log(this.props.Fetched)

        // imageDiv.onscroll=function(){

        //     if ((imageDiv.offsetHeight + imageDiv.scrollTop) >= imageDiv.scrollHeight) {


        //     for(let i=imageDiv.childElementCount;i<i+4;i++){
        //         // let image=document.createElement("img")
        //         let image=document.createElement("img")
        //         image.setAttribute("src",this.state.Fetched.data[`${i}`].images.original.url)
        //         image.setAttribute("class",`${styles.FetchedGif}`)
        //         imageDiv.appendChild(image)
        //     }



                
        //     }
        // }


        // && this.state.index==this.state.j
        if(this.props.Type=="G" ){
            let imageDiv=document.getElementById("Gif_div")


            // function loadMore(imageDiv,thisprops){
            //     console.log(thisprops)
            //     if ((imageDiv.offsetHeight + imageDiv.scrollTop) >= imageDiv.scrollHeight) {
            //         console.log("You have scrolled down the top")
    
            //         // for(let i=imageDiv.childElementCount;i<i+4;i++){
            //         //     // let image=document.createElement("img")
            //         //     let image=document.createElement("img")
            //         //     console.log(thisprops.data[`${i}`].images)
            //         //     image.setAttribute("src",thisprops.data[`${i}`].images.original.url)
            //         //     image.setAttribute("class",`${styles.FetchedGif}`)
            //         //     imageDiv.appendChild(image)
            //         // }
        
        
        
                        
            //         }
            // }
    
            // imageDiv.onscroll=loadMore(imageDiv,this.props.Fetched)


            // let imageDiv=document.getElementById("Gif_div")
            imageDiv.innerHTML=""


            for(let i=0;i<4;i++){
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
                    copy.setAttribute("class","articleImage")
                    this.props.Select(copy)
                    
     
                    
                })
            }

          
  
    
          

            // let incj=this.state.j+1
            // this.setState({
            //     j:incj
            // })

            

        }
     



      
        
    }
    componentDidMount(){    
        let imageDiv=document.getElementById("Gif_div")

        const thisprops=this.props
        imageDiv.onscroll=function(){
            if ((imageDiv.offsetHeight + imageDiv.scrollTop) >= imageDiv.scrollHeight) {
                
                console.log(thisprops.Fetched)
            

                for(let i=imageDiv.childElementCount;i<i+4;i++){
                    // let image=document.createElement("img")
                    let image=document.createElement("img")
                    console.log(thisprops.Fetched.data[4].images)
                    // image.setAttribute("src",thisprops.data[`${i}`].images.original.url)
                    // image.setAttribute("class",`${styles.FetchedGif}`)
                    // imageDiv.appendChild(image)
                }
    
    
    
                    
                }
        


        }
       
  



     




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
        Selected:state.Edit.Selected,
        Type:state.Edit.CatFetch,

        // images: state.reducerEdit.error,
    

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Gif: (key) => dispatch(actions.fetchGif( key)),
        Select:(div)=>dispatch(actions.SelectSuccess(div))
  

    }
}

// export default Writing
export default (connect(mapStateToProps,mapDispatchToProps)(ImagesFet))
