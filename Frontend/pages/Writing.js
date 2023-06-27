



import React, { Component } from 'react'
import Controlbar from '../public/components/Controlbar';
import { connect } from 'react-redux';
import * as actions from '../store/actions/Editing'
class Writing extends Component {
    constructor(props) {
        super(props);

        // this.heading = this.heading.bind(this);
        // this.componentDidMount=this.componentDidMount.bind(this)

        this.selectedDivRedux=(div)=>{
            this.props.Set(div)
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


      }



    // }

    componentDidUpdate=()=>{



        let article=document.getElementsByClassName("article")[0]
        let check=document.getElementsByClassName("article")[0].children
        let selected=document.getElementById(this.state.selected)
              
        // let spans= document.getElementsByTagName("span")

        // Array.from(spans).forEach(element => {
        //     element.style=element.parentElement.style
        // });

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
                        selected:check[k].id
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
        // let content=document.getElementsByClassName("blog-content")
        let content=document.getElementsByClassName("article")[0].children

        document.getElementById("Bin").addEventListener("click",()=>{
            if(this.state.selected!==null && this.state.selected!==undefined && article.children.length!==1){
                // this.setState({
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
                            selected:content[k].id
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
                if(content[k+1]!==undefined && content[k+1]!==null){
                    content[k+1].setAttribute("contenteditable",false)


                }
                this.setState({
                    selected:content[k].id
                })
            }
     




        }
     
            article.addEventListener('input',(e)=>{
               

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
                                            selected:content[k].id
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
                

    
    
        
    
            })
    
            
   

       

 
    

      
    }

    

    render() { 
      
        return (  
            <>
    
            <div className="article"   contentEditable="true"  >

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
        Selection:state.Edit.Selected




    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        Set: (div) => dispatch(actions.SelectSuccess(div)),
        
  

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
