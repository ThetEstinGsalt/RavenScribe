import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/Editing'
import styles from '../../../styles/writing.module.css'
import Image from 'next/image';
import Head from 'next/head'
import axios from 'axios';

class GifFetching extends Component {
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

        if(this.props.Type=="G" ){
            let imageDiv=document.getElementById("Gif_div")


            imageDiv.innerHTML=""


            for(let i=0;i<4;i++){
                // let image=document.createElement("img")
                let image=document.createElement("img")
                image.setAttribute("src",this.props.Fetched.data[`${i}`].images.preview_gif.url)
                image.setAttribute("class",`${styles.FetchedGif}`)
                image.setAttribute("id",i)
                imageDiv.appendChild(image)
                image.addEventListener('click',()=>{
                    let copy=document.createElement("img")
                    copy.setAttribute("src",this.props.Fetched.data[image.id].images.original.url)

                    copy.removeAttribute("class")
                    copy.setAttribute("class","blogContent")
                    this.props.Select(copy)
                    
     
                    
                })
            }

    
            let article=document.getElementsByClassName("article")[0]
            let selecDiv=this.props.Selected
            let selecDivInit=document.getElementsByClassName("blog-content")[0]
    
    
            let images=document.querySelectorAll(`.${styles.FetchedGif}`)
            // for(let j=0;j<images.length;j++){
            //     images[j].addEventListener('click',()=>{
            //         let copy=images[j].cloneNode(true)
            //         copy.removeAttribute("class")
            //         copy.setAttribute("class","articleImage")
            //         this.props.Select(copy)
                    
     
                    
            //     })
            // }



            const thisprops=this.props.Fetched
            console.log(thisprops)
            const thisporps0=this.props
            let index=1

            imageDiv.onscroll=function(){
                if ((imageDiv.offsetHeight + imageDiv.scrollTop) >= imageDiv.scrollHeight) {
                    let SecondVar=thisprops
                    let index=imageDiv.childElementCount
                    let limit=imageDiv.childElementCount+4
                    let thisprops1=thisporps0
                    if(limit<50){
                        for(let i=index;i<limit;i++){
                            let thisporps2=thisprops1
    
                            let ThirdVar=SecondVar
                            // console.log(ThirdVar.data[i].images.original.url)
                            let image=document.createElement("img")
                            image.setAttribute("src",ThirdVar.data[`${i}`].images.preview_gif.url)
                            image.setAttribute("class",`${styles.FetchedGif}`)
                            image.setAttribute("id",i)
                    
                            let fourthvar=ThirdVar
                            let thisprops3=thisporps2
                            image.addEventListener('click',()=>{
                                let copy=document.createElement("img")
                                copy.setAttribute("src",fourthvar.data[image.id].images.original.url)
            
                                copy.removeAttribute("class")
                                copy.setAttribute("class","articleImage")
                                thisprops3.Select(copy)
                                
                 
                                
                            })
                            imageDiv.appendChild(image)

                    }
              
                    }
                    // if(index==1){
                    //     const secondVar=thisprops
                
    
                    //     for(let i=imageDiv.childElementCount;i<i+4;i++){
                    //         console.log(1)
                    //         // let image=document.createElement("img")
                    //         // let image=document.createElement("img")
                    //         let ThirdVar=secondVar
                   
                    //         console.log(ThirdVar.data[5].images.original.url)
                    //         // image.setAttribute("src",thisprops.data[`${i}`].images.original.url)
                    //         // image.setAttribute("class",`${styles.FetchedGif}`)
                    //         // imageDiv.appendChild(image)
                    //     }
                    //     index++

            

                    // }
           
        
        
                        
                    }
            
    
    
            }
           

            

        }
     



      
        
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
export default (connect(mapStateToProps,mapDispatchToProps)(GifFetching))
