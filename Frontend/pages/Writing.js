



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
        selected:null

      }



    // }

    componentDidUpdate=()=>{
        let article=document.getElementsByClassName("article")[0]
        let check=document.getElementsByClassName("blog-content")

        



        console.log(this.props.Font)

        

       



        

 
   
    }
    
    componentDidMount=()=>{
        let article=document.getElementsByClassName("article")[0]
        let content=document.getElementsByClassName("blog-content")

  

       



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
        this.setState({
            ContentElement: article.cloneNode(true)
        })
            article.addEventListener('input',(e)=>{
               

                if((e.inputType=="insertParagraph" || e.data == null) && this.props.Font=="blog-content"){


    
                    for(let j=0;j<article.childElementCount;j++){
                    
                            
    
                        if(j!==0){
                            if(article.children[j].id==article.children[j-1].id){
                                if(article.children[j].innerText.trim() !==""){
                                    article.children[j].id=`F${article.children[j].id}`
                                    article.children[j-1].id=`B${article.children[j-1].id}`
                                    this.setState({
                                        ContentElement:document.getElementsByClassName("article")[0].cloneNode(true)
                                    })
                        
                                    
    
                                }
                                else{
                                    var idInd=this.state.ID_index+1
    
                                    this.setState({
                                        ID_index: idInd
                                    })
    
                           
                                    
                                    article.children[j].id= idInd
                                    this.setState({
                                        ContentElement:document.getElementsByClassName("article")[0].cloneNode(true)
                                    })
                        
    
    
                                }
                             

                          
                                
                                
                            }
                        }}
    
                }
                else{
                
                 
                
      
                    
                        for(let k=0;k<article.children.length;k++){
          
                                
                           
                            if((article.children[k].innerText!==this.state.ContentElement.children[k].innerText) && this.props.Font!=='blog-content' && article.children[k].className=='blog-content'){
                                
                                console.log(article.children[k].id)
                                
                                for(let i=0;i<article.children[k].innerText.length;i++){
                                    if(article.children[k].innerText[i]!== this.state.ContentElement.children[k].innerText[i]){
                                    
                                        let original_clone =article.children[k].cloneNode(true)
                                        let original =article.children[k]
                                        // console.log(article.children[k].innerText[i]
                                        let NewTextElem = document.createElement("div")
                                        let FirstSplitElem = document.createElement("div")
                                        let SecondSplitElem = document.createElement("div")

                                        NewTextElem.className=this.props.Font
                                        NewTextElem.innerText=article.children[k].innerText[i]

                                        let ElemInnerText = article.children[k].innerText

                                        let FirstSplitText = ElemInnerText.substring(0,i)
                                        let SecondSplitText = ElemInnerText.substring(i+1)

                                        
                                        if(FirstSplitText.trim().length!==0){
                                            FirstSplitElem.className = original.className
                                            FirstSplitElem.id = `B${original.id}`
                                            FirstSplitElem.innerText= FirstSplitText
                                            article.insertBefore(FirstSplitElem,original)

                                        }

                                        article.insertBefore(NewTextElem,original)


                                     
                                        if(SecondSplitText.trim().length!==0){
                                            SecondSplitElem.className = original.className
                                            SecondSplitElem.id= `F${original.id}`
                                            SecondSplitElem.innerText= SecondSplitText

                                            article.insertBefore(SecondSplitElem,original);
                                            
                                         


                                        }



                               
                              
                                        article.removeChild(original)


                                      
                                        
                                        // this.props.Font='blog-content'
                                        break

                                    }
                                }
                                

                                this.setState({
                                    ContentElement:document.getElementsByClassName("article")[0].cloneNode(true)
                                })

                                break
        
                            }
                        }
                
            
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
                This is part 1 This is part 2 This is part 3
                </div>


          
              

            </div>


            <Controlbar/>

        
            
            </>
        );
    }
}
 


const mapStateToProps = (state) => {
    return {
     
        Font:state.Edit.Font


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
