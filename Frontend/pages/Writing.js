



import React, { Component } from 'react'
import Controlbar from '../public/components/Controlbar';
import { connect } from 'react-redux';
import * as actions from '../store/actions/Editing'
import styles from '../styles/writing.module.css'
import Submit from '../public/components/controlbarcomps/Submit';
class Writing extends Component {
    constructor(props) {
        super(props);

        // this.heading = this.heading.bind(this);
        // this.componentDidMount=this.componentDidMount.bind(this)

        this.selectedDivRedux=(div)=>{
            this.props.Set(div)
        }

        this.SubmitDisplay=(boolean)=>{
            this.props.SubmitDisplays(boolean)
        }




    }


    state = {
        ContentElement:null,
        active:this.props.Font,
        ID_index:1,
        ID_index_HBQL:1,
        selected:null,
        clicked:'blogContent',
        Delete:0,
        Med_selection:null,
        SetThumb:false,
        udlSelected:false,
        SubmitBar:false,



      }



    // }

    componentDidUpdate=()=>{


        
        let article=document.getElementsByClassName("article")[0]
        // let check=Array.from(document.getElementsByClassName("article")[0].children).splice(0,1)
        let unfilter=(document.getElementsByClassName("article")[0].children)
        

        // let check=document.getElementsByClassName("article")[0].children


        let toRemove= Array.from(document.getElementsByClassName("udl"))  
    
        let CArray=Array.from(document.getElementsByClassName("article")[0].children)

        let check = CArray.filter( ( el ) => !toRemove.includes( el ) );

        // let check= Array.from(unfilter).splice(0, 2);
       


        
        let selected=document.getElementById(this.state.selected)
              
        // let spans= document.getElementsByTagName("span")

        // Array.from(spans).forEach(element => {
        //     element.style=element.parentElement.style
        // });

        console.log(this.props.SubmitDisplayVar)

        if(this.state.SetThumb==true){
            document.getElementById("setThumbInp").value=thumbnail.style.background.split('"')[1]

            document.getElementById("SetThumbBtn").onclick=()=>{
                thumbnail.style.background=`url(${document.getElementById("setThumbInp").value}) center center/cover`
    
                this.setState({
                    SetThumb:false,
                })
    
            }
            
        }
        for(let j=0;j<check.length;j++){
            check[j].classList.remove("SelectedDiv")
        }

        

        if(this.state.selected!==null){
            let selected=document.getElementById(this.state.selected)
            try{
                selected.classList.add("SelectedDiv")


            }
            catch(e){
                console.log(
                    "TRY CATCH ERROR STATE IS UNDEFINED"
                )
            }


        }
        else{
            for(let j=0;j<check.length;j++){
                check[j].classList.remove("SelectedDiv")
            }
        }


        

        
        if(this.props.Font!==this.state.clicked){
            let NewElem=document.createElement("div")

            if(this.props.Font.includes("-")){
                NewElem.className=(this.props.Font).toString().split("-")[0]


            }
            else{
                NewElem.className=this.props.Font
            }


            if(this.props.Insert=="Up"){
                if(NewElem.className=='list'){
                    let ListElem=document.createElement("li")
                    ListElem.innerText="List Item"
                    let UnorderedList=document.createElement("ul")
                    UnorderedList.appendChild(ListElem)
                    // UnorderedList.innerHTML=ListElem
                    NewElem.appendChild(UnorderedList)

                    
                    // NewElem.innerHTML="<ul><li>Something<li/><ul/>"
                    NewElem.id=`${this.state.ID_index_HBQL}DD`
                    article.insertBefore(NewElem,selected)
                }
                else{
                    NewElem.innerText="Your Heading"
                    NewElem.id=`${this.state.ID_index_HBQL}DD`
                    article.insertBefore(NewElem,selected)
                    
                }
   
                // console.log(this.state.selected)
                

            }
            else{
                if(NewElem.className=='list'){
                    let ListElem=document.createElement("li")
                    ListElem.innerText="List Item"
                    let UnorderedList=document.createElement("ul")
                    UnorderedList.appendChild(ListElem)
                    // UnorderedList.innerHTML=ListElem
                    NewElem.appendChild(UnorderedList)
                    

                }
                else{
                    NewElem.innerText="Your Heading"


                }
                NewElem.id=`${this.state.ID_index_HBQL}DD`
                try{
                    article.insertBefore(NewElem,selected.nextSibling)


                }
                catch(e){
                    article.appendChild(NewElem)
                }

            }
          
            let ID_increament=this.state.ID_index_HBQL+1
            this.setState({
                clicked:this.props.Font,
                ID_index_HBQL:ID_increament
            })
        }

        if(this.props.Selection!==this.state.Med_selection){
            
           
            console.log(this.props.Selection)
            console.log(this.props.Selection.length)
            this.setState({
                Med_selection:this.props.Selection
            },()=>{
                if(this.props.Insert=="Up"){
               
                    let NewMedElem=this.props.Selection
                    NewMedElem.id=`${this.state.ID_index_HBQL}II`
                    article.insertBefore(this.props.Selection,selected)
                    // console.log(this.state.selected)
                    
    
                }
                else{
                    let NewMedElem=this.props.Selection

                    NewMedElem.id=`${this.state.ID_index_HBQL}II`
                    try{
                        article.insertBefore(NewMedElem,selected.nextSibling)


                    }
                    catch(e){
                        article.appendChild(NewMedElem)
                    }
    
                }
                let ID_increament=this.state.ID_index_HBQL+1

                this.setState({
                    clicked:this.props.Font,
                    ID_index_HBQL:ID_increament
                })
              

            })

        }



        for(let k=0;k<check.length;k++){



            check[k].onclick=()=>{  
        
                // check[k+1].setAttribute("contenteditable",false)



                try{
                    check[k].setAttribute("contenteditable",true)
                    if(check[k+1]!==undefined && check[k+1]!==null){
                        check[k+1].setAttribute("contenteditable",false)
    
    
                    }
                    this.setState({
                        selected:check[k].id,
                        udlSelected:false
                    })

                }
                catch(e){
                    console.log("TRY AND CATCH FUNCTION ERROR")
                }
          
            }
     




        }

   


   
     
     

        // let Font=this.props.Font



        



     
        

       



        

 
   
    }
    
    componentDidMount=()=>{

        let article=document.getElementsByClassName("article")[0]

        let thumbnail = document.getElementById("thumbnail")
        // let content=document.getElementsByClassName("blog-content")





        let toRemove= Array.from(document.getElementsByClassName("udl"))  
    
        let CArray=Array.from(document.getElementsByClassName("article")[0].children)

        let content = CArray.filter( ( el ) => !toRemove.includes( el ) );
        const self=this

        // let content= Array.from(unfilter).splice(0, 2);

        console.log(this.props.SubmitDisplayVar)

        article.addEventListener("keydown",(e)=>{
    
            if((e.code=="Enter") && this.state.udlSelected==true){
                e.preventDefault()
                e.stopPropagation()

          
                // toRemove[0].setAttribute("contentEditable",false)
            



            }
            

           })

        thumbnail.ondblclick=()=>{
            this.setState({
                SetThumb:true,
            })

        }


 
        document.getElementById("Bin").addEventListener("click",()=>{
            if(this.state.selected!==null && this.state.selected!==undefined && article.children.length!==1 && this.state.selected!==content[0].id){
       
                //     Delete:this.props.Delete
                // })
          
                console.log(document.getElementById("1"))
    
                let del= document.getElementById(this.state.selected)
                console.log(this.state.selected)
                console.log(del)
                // console.log(del.parentElement)
                del.parentElement.removeChild(del)
                for(let k=0;k<content.length;k++){

                    content[k].onclick=()=>{
                        content[k].setAttribute("contenteditable",true)
                        if(content[k+1]!==undefined && content[k+1]!==null){
                            content[k+1].setAttribute("contenteditable",false)


                        }
                        this.setState({
                            selected:content[k].id,
                            udlSelected:false
                        })
                    }
              
        
        
        
        
                }
           
           
                
            }
    
            
            
        })
  

  

       



        // ----------------------------------------
        // To stop HTML from breaking if user pastes some text other than writing it

        var ce = article
        ce.addEventListener('paste', function (e) {
          e.preventDefault()
          var text = e.clipboardData.getData('text/plain')
          document.execCommand('insertText', false, text)
        })



        // ------------------------------------





        // ----------------------------------------------
        // Event listeners on article 

        for(let k=0;k<content.length;k++){
   

            content[k].onclick=()=>{
  
                content[k].setAttribute("contenteditable",true)
                if((content[k+1]!==undefined && content[k+1]!==null) && (content[k-1]!==undefined && content[k-1]!==null)){
                    content[k+1].setAttribute("contenteditable",false)
                    content[k-1].setAttribute("contenteditable",false)


                }
                this.setState({
                    selected:content[k].id,
                    udlSelected:false
                })
            }
     




        }
        toRemove[0].onclick=function(){
            self.setState({
                udlSelected:true
            })

            try{

                    thumbnail.setAttribute("contentEditable",false)
       
                    toRemove[0].setAttribute("contentEditable",true)
  
                    // toRemove[1].setAttribute("contentEditable",false)

                    toRemove[2].setAttribute("contentEditable",false)
              
          




         

            }
            catch(e){

            }

        }
        // toRemove[2].onclick=function(){
      
        // }
        content[0].addEventListener("click",()=>{

            toRemove[1].setAttribute("contentEditable",false)
            toRemove[0].setAttribute("contentEditable",false)
            toRemove[2].setAttribute("contentEditable",false)

        })


        console.log(toRemove[2])
        toRemove[2].addEventListener("click",()=>{
            this.setState({
                udlSelected:true
            })
            try{
                thumbnail.setAttribute("contentEditable",false)

                toRemove[2].setAttribute("contentEditable",true)

                toRemove[0].setAttribute("contentEditable",false)
                content[0].setAttribute("contentEditable",false)


                // toRemove[1].setAttribute("contentEditable",false)


     

            }
            catch(e){

            }

        })



            article.addEventListener('input',(e)=>{
   
    
                if(content[0].innerText==""|| content[0].innerHTML=="<br>"){
                    content[0].innerText="~"


                }
    
               

                if(e.inputType=="insertParagraph" || e.data == null){
                

                    let spans=document.getElementsByTagName("span")
                    for(let i=0;i<spans.length;i++){
                        console.log(spans[i].style)
                        spans[i].style= getComputedStyle(spans[i].parentElement)
                        spans[i].style.fontFamily=getComputedStyle(spans[i].parentElement).fontFamily
         
                  
              

                        // spans[i].className=spans[i].parentElement.className
                    }


    
                    for(let j=0;j<article.childElementCount;j++){
                    
                            
    
                        if(j!==0){
                            if(article.children[j].id==article.children[j-1].id){
                                if(article.children[j].innerText.trim() !==""){
                                    article.children[j].id=`F${article.children[j].id}`
                                    
                             
                                    article.children[j-1].id=`B${article.children[j-1].id}`
                           
    
                                }
                                else{
                                    var idInd=this.state.ID_index+1
    
                                    this.setState({
                                        ID_index: idInd
                                    })
    
                           
                                    
                                    article.children[j].id= idInd

                              
    
                                }
                                this.setState({
                                    selected:null
                                })
                                for(let k=0;k<content.length;k++){


                                    content[k].onclick=()=>{
                                        content[k].setAttribute("contenteditable",true)
                                        
                                        content[k+1].setAttribute("contenteditable",false)
                                        this.setState({
                                            selected:content[k].id,
                                            udlSelected:false
                                        
                                        })
                                    }
                             
                    
                    
                    
                    
                                }
                             

                          
                                
                                
                            }

                        }}

    
                }
                else{

                
                 
                
      
                    
            
                         }

                
    
    
       


                // if(article.firstChild.innerText.trim().length==0){
                //     article.firstChild.innerText="~"
             
             
                // }

                if(article.children.length==0){
                    let content=document.createElement("div")
                    content.className="blogContent"
                    content.id="1"
                    article.appendChild(content)

             
             
                }
                // console.log(udl[0].innerHTML)
                // console.log(udl[0].innerText)
         

                toRemove[0].addEventListener("keydown",(e)=>{
                    if(toRemove[0].innerText=="" || toRemove[0].innerHTML=="<br>"){
                        e.preventDefault()
                        e.stopPropagation()
                    }
                })


                // toRemove[2].addEventListener("keydown",(e)=>{
                //     if(toRemove[2].innerText=="" || toRemove[2].innerHTML=="<br>"){
                //         e.preventDefault()
                //         e.stopPropagation()
                //     }
                // })



                if(toRemove[2].innerText=="" || toRemove[2].innerHTML=="<br>" || toRemove[2].innerText.length==1){
                    toRemove[2].innerText="~ Write the Concept/Preview of this writing"
                }






           
    
        
    
            })

            let WritingEndBtn=document.getElementById("WritingDoneBtn")
            WritingEndBtn.onclick=()=>{
                this.SubmitDisplay(true)
                let Controlbar=document.getElementsByClassName(`${styles.controldbar}`)[0]
                let DoneBtn = document.getElementById("WritingDoneBtn")

        
        
                    Controlbar.style.display="none"
                    article.style.opacity=".1"
                    DoneBtn.style.opacity=".1"

            
         

            }



            
   

       

 
    

      
    }

    

    render() { 
      
        return (  
            <>
            

            <div  className={styles.WritingDoneBtn} id="WritingDoneBtn">Done</div>
            {this.props.SubmitDisplayVar && <Submit/>}

            {this.state.SetThumb && <div className={styles.setThumbnail}><div className={styles.ThumbnailBarIns} id="setThumbBar">Set Thumbnail Link</div> <input className={styles.ThumbnailInp} id="setThumbInp"></input ><button className={styles.ThumbnailBtn} id='SetThumbBtn'>Done</button></div>}
            <div className="article"   contentEditable="true"  >
                {/* <div id="thumbnail"style ={ { background: "url('https://images.unsplash.com/photo-1687840664202-bcb4c480e929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80') center center/cover" } }></div> */}

                {/* <img id="thumbnail" src='https://images.unsplash.com/photo-1623167412187-678daed3f53e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'></img> */}
{/* 
                <img src={"https://images.unsplash.com/photo-1611145434336-2324aa4079cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80"} alt="" id="thumbnail" /> */}
                <div className="blog-heading udl">
          
                        This is Blog heading


                </div>
                
                {/* <img src={"https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=440&h=220&q=60"} alt="" id="thumbnail" contentEditable="false" /> */}
                <div id="thumbnail" contentEditable="false" className='udl' style={{background:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5nmQfYE-uebZlaIkCYU-9PAFedhak_gL7LCXlxJCoZeHXJRchsUiM4LGJlm0mp4upqCI&usqp=CAU") center center/cover'}}> </div>

                    {/* <img src={this.state.blog.Thumbnail} alt="" id="thumbnail" /> */}
               
                <div className="concept udl" >
                    <span contentEditable="false" id="monocyte" >~ </span>
                        This is some of the concept right here
           



                </div>
                <div className='blogContent' id="1"  contentEditable="true">
                Dispatch on next.js redux vesion 2.2.02.vs
                </div>

               

          
              

            </div>


            <Controlbar/>

        
            
            </>
        );
    }
}
 


const mapStateToProps = (state) => {
    return {
     
        Font:state.Edit.Font,
        Insert:state.Edit.Insert,
        Delete:state.Edit.Delete,
        Selection:state.Edit.Selected,
        SubmitDisplayVar:state.Edit.SubmitBarDisplay




    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        Set: (div) => dispatch(actions.SelectSuccess(div)),
        SubmitDisplays: (value) => dispatch(actions.SubmitBarDisplay(value)),
        
  

    }
}

// export default Writing;
export default (connect(mapStateToProps,mapDispatchToProps)(Writing))


// ---------------------------IMPORTS--------------------------



// import axios from 'axios'
// import { connect } from 'react-redux';
// import * as actions from '../store/actions/auth';





// axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
// axios.defaults.xsrfCookieName = "csrftoken";






// ---------------------__REDUX----------------------------

// const mapStateToProps = (state) => {
//     return {
//         JWT: state.jwt,
    

//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         decode: (JWT) => dispatch(actions.authJWT(JWT)),
//         CheckUser: () => dispatch(actions.authCheckState()),

//     }
// }

// // export default Writing
// export default (connect(mapStateToProps,mapDispatchToProps)(Writing))
