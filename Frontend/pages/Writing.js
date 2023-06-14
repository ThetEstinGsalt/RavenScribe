



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
        clicked:'blog-content'


      }



    // }

    componentDidUpdate=()=>{
        console.log(this.state.selected)
        let article=document.getElementsByClassName("article")[0]
        let check=document.getElementsByClassName("article")[0].children
        let selected=document.getElementById(this.state.selected)

        for(let j=0;j<check.length;j++){
            check[j].classList.remove("SelectedDiv")
        }

        if(this.state.selected!==null){
            let selected=document.getElementById(this.state.selected)
   
            selected.classList.add("SelectedDiv")


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

            NewElem.innerText="Your Heading"
            NewElem.id=this.state.ID_index_HBQL
            article.insertBefore(NewElem,selected)
            // console.log(this.state.selected)
            let ID_increament=this.state.ID_index_HBQL+1

            this.setState({
                clicked:this.props.Font,
                ID_index_HBQL:ID_increament
            })
        }

        for(let k=0;k<check.length;k++){

            check[k].onclick=()=>{
                try{
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
                this.setState({
                    selected:content[k].id
                })
            }
     




        }
     
            article.addEventListener('input',(e)=>{
               

                if((e.inputType=="insertParagraph" || e.data == null) && this.props.Font=="blog-content"){


    
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

                
    
    
       


                if(article.firstChild.innerText.trim().length==0){
                    article.firstChild.innerText="~"
             
             
                }

    
    
        
    
            })
    
            
   

       

 
    

      
    }

    

    render() { 
      
        return (  
            <>
    
            <div className="article"   contentEditable="true"  >

                <div className='blog-content' id="1"  contentEditable="true">
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
