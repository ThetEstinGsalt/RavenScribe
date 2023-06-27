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
        this.ImageFetch=(key,page)=>{
            this.props.Image(key,page)
        }
    }
    state={
        Fetched:null,
        Index:1,
        Input:null,
 
    }

    componentDidUpdate(){

        const thisprops1=this.props
        if(this.props.Type=="I" ){
            let imageDiv=document.getElementById("image_div")


       

            let length=this.props.Fetched.photos.length
            let thisprops2=thisprops1
            for(let i=0;i<length;i++){
                // let image=document.createElement("img")
                let thisprops3=thisprops2
                let image=document.createElement("img")
                image.setAttribute("src",thisprops3.Fetched.photos[`${i}`].src.small)
                image.setAttribute("class",`${styles.FetchedImage}`)
                image.setAttribute("id",`Image-${i}`)
                imageDiv.appendChild(image)
                image.addEventListener('click',()=>{
     
                    let copy=document.createElement("img")
                    
                    copy.setAttribute("src",thisprops3.Fetched.photos[image.id.split("-")[1]].src.original)

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
            const thisState=this.state
            const self =this
            imageDiv.onscroll=function(){
                if ((imageDiv.offsetHeight + imageDiv.scrollTop) >= imageDiv.scrollHeight) {

                    // let SecondVar=thisprops
                    // let index=imageDiv.childElementCount
                    // let limit=imageDiv.childElementCount+4
                    // let thisprops1=thisporps0
                    let index=thisState.Index + 1
                    self.ImageFetch(thisState.Input,index)
                    self.setState({
                        Index:index
                     
                    })


                    // if(limit<50){
                    //     for(let i=index;i<limit;i++){
                    //         let thisporps2=thisprops1
    
                    //         let ThirdVar=SecondVar
                    //         // console.log(ThirdVar.data[i].images.original.url)
                    //         let image=document.createElement("img")
                    //         image.setAttribute("src",ThirdVar.photos[`${i}`].src.small)
                    //         image.setAttribute("class",`${styles.FetchedGif}`)
                    //         image.setAttribute("id",i)
                    
                    //         let fourthvar=ThirdVar
                    //         let thisprops3=thisporps2
                    //         image.addEventListener('click',()=>{
                    //             let copy=document.createElement("img")
                    //             copy.setAttribute("src",fourthvar.data[image.id].images.original.url)
            
                    //             copy.removeAttribute("class")
                    //             copy.setAttribute("class","articleImage")
                    //             thisprops3.Select(copy)
                                
                 
                                
                    //         })
                    //         imageDiv.appendChild(image)

                    // }
              
                    // }
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
 
     



        const thisState=this.state
        let search_inp=document.getElementsByClassName(`${styles.image_search}`)[0]
        search_inp.addEventListener("keydown",(e)=>{
            if(e.key=="Enter"){
                document.getElementById("image_div").innerHTML=""

            
                let index=thisState.Index
                
                this.ImageFetch(search_inp.value,index)
                this.setState({
                    Index:index+1,
                    Input:search_inp.value
                })


            }
        })
        
        
    }
    
    render() {
        return (
            <>

         

            
          <div className='HolderImg'>
                     <div className={styles.Search}>
                         
                        <input className={styles.image_search}></input>
             
                    
                     </div>
         
                     <div className={styles.Image_display} id="image_div">
            
                         
              
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

        Image: (key,page) => dispatch(actions.fetchImage( key,page)),



        Select:(div)=>dispatch(actions.SelectSuccess(div))
  

    }
}

// export default Writing
export default (connect(mapStateToProps,mapDispatchToProps)(GifFetching))















// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as actions from '../../../store/actions/Editing'
// import styles from '../../../styles/writing.module.css'
// import Image from 'next/image';
// import Head from 'next/head'
// import axios from 'axios';

// class ImagesFet extends Component {
//     constructor(props){
//         super(props);
//         this.handlefetch=(key,page)=>{
//             this.props.Image(key,page)
        

//         }
//         this.handleGif=(key)=>{

//             this.props.Gif(key)
//         }
//     }
//     state={
//         fetchIndex:1,
//     }
//     componentDidUpdate(){
//         console.log(this.props)

//         let imageDiv=document.getElementById("image_div")
//         let length=this.props.Fetched.photos.length
        

//         const thisFetch=this.props.Fetched
//         const thisprop=this.props
//         if(imageDiv.childElementCount!==length){
//             for(let i=0;i<this.props.Fetched.photos.length;i++){
//                 let thisFetchd2=thisFetch
//                 let thispropd2=thisprop
//                 // let image=document.createElement("img")
//                 let image=document.createElement("img")
//                 image.setAttribute("src",thisFetchd2.photos[`${i}`].src.small)
//                 image.setAttribute("class",`${styles.FetchedImage}`)
//                 image.id=i
//                 imageDiv.appendChild(image)
                


//                 image.addEventListener('click',()=>{
//                     let thisFetchd3=thisFetchd2
//                     let thisporpd3=thispropd2

//                     let copy=document.createElement("img")
//                     copy.setAttribute("src",thisFetchd3.photos[image.id].src.original)
//                     copy.removeAttribute("class")
//                     // copy.setAttribute("class","articleImage")
//                     thisporpd3.Select(copy)
                    
     
                    
//                 })


//             }
    
//             let selecDivInit=document.getElementsByClassName("blog-content")[0]
//             let selecDiv=this.props.Selected

//             let images=document.querySelectorAll("#image_div img")
//             // for(let j=0;j<images.length;j++){
//             //     images[j].addEventListener('click',()=>{
//             //         // images[j].removeAttribute("class")
//             //         let copy=images[j].cloneNode(true)
//             //         copy.removeAttribute("class")
//             //         copy.setAttribute("class","article-thumb-img")
//             //         console.log(copy)
//             //         try{
//             //             selecDiv.appendChild(copy)
    
    
//             //         }
//             //         catch(e){
//             //             selecDivInit.appendChild(copy)
//             //         }
                    
//             //     })
//             // }

//         }
     
      
    
//         console.log(this.props.Fetched)

        
//     }
//     componentDidMount(){
   

//         let search_inp=document.getElementsByClassName(`${styles.image_search}`)[0]
//         search_inp.addEventListener("keydown",(e)=>{
//             if(e.key=="Enter"){
//                 this.handlefetch(search_inp.value,1)

//             }
//         })
        
//     }
    
//     render() {
//         return (
//             <>
         

            
//             <div className='HolderImg'>
//             <div className={styles.Search}>
                
//                 <input className={styles.image_search}></input>
    
           
//             </div>

//             <div className={styles.Image_display} id="image_div">
   
                
     
//             </div>


//             </div>
    
            
         

//             </>
            
//         );
//     }
// }




// const mapStateToProps = (state) => {
//     return {
//         Fetched: state.Edit.FetchList,
//         Selected:state.Edit.Selected
//         // images: state.reducerEdit.error,
    

//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         Image: (key,page) => dispatch(actions.fetchImage( key,page)),
     
//         Select:(div)=>dispatch(actions.SelectSuccess(div))

  

//     }
// }

// // export default Writing
// export default (connect(mapStateToProps,mapDispatchToProps)(ImagesFet))






// image.setAttribute("src",thisFetchd2.photos[`${i}`].src.small)
