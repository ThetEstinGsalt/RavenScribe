



import React, { Component } from 'react'
import Controlbar from '../public/components/Controlbar';

class Writing extends Component {
    constructor(props) {
        super(props);

        this.heading = this.heading.bind(this);
        this.componentDidMount=this.componentDidMount.bind(this)



    }


    state = {
        WriteEdCont:null,
        active:'blog-content',
        ID_index:0,
        selected:null

      }


    Delete = () => {
        let content = document.querySelector('.article')
        // let temp = document.createElement("div")
        // temp.className = "temp"

        console.log(this.state.selected)


        try {
            // content.replaceChild(temp, this.state.selected)
            content.removeChild(this.state.selected)


        }
        catch (err) {
            console.log(err)
        }


    }


    text=()=>{
        this.setState({
            active:'blog-content'
     
        })

        
    }


    heading=()=>{

        this.setState({
            active:'article-heading'
     
        })
        console.log("updated")


    }

    subheading=()=>{

        this.setState({
            active:'subHeading'
     
        })
        


    }

    list=()=>{
        this.setState({
            active:'list'
     
        })

    }

    quote=()=>{
        this.setState({
            active:'quotes'
     
        })

        
    }
    // ReIndex=()=>{
    //     let content=document.getElementsByClassName("blog-content")

        
    //     for(let i=0;i<content.length;i++){
    //         let self=this;
    
    //             content[i].addEventListener("click",function(e){
    //                 self.setState({
    //                     WriteEdCont:[e.target.innerHTML,content[i].id]
                        
    //                 },()=>{
    //                     console.log("nothing")
    //                     // article.addEventListener("input",function(e){
    
                            
    
    //                     //     console.log(self.state.WriteEdCont)
                          
                
    //                     // })
    
    //                 })
                
           
           
                  
                
                    
    //             })
    
    
     
              
    
    //         }


    // }

  

    componentDidMount=()=>{


  
        let article=document.getElementsByClassName("article")[0]
        let content=document.getElementsByClassName("blog-content")


        var ce = article
        ce.addEventListener('paste', function (e) {
          e.preventDefault()
          var text = e.clipboardData.getData('text/plain')
          document.execCommand('insertText', false, text)
        })





        // for(let i=0;i<content.length;i++){
  
      

        article.addEventListener('click',(e)=>{

            this.setState({
                WriteEdCont:[e.target.innerHTML,e.target.id],
                selected:e.target
                
            },()=>{
                // article.addEventListener("input",function(e){

                    

                //     console.log(self.state.WriteEdCont)
                  
        
                // })

            })


        })





        // for(let i=0;i<content.length;i++){

        //     let self=this;
    
        //         content[i].addEventListener("click",function(e){
             
              
        //             console.log(e.target)
        //             console.log(content[i])
                
        //             console.log(e.target)
     
        //             self.setState({
        //                 WriteEdCont:[e.target.innerHTML,content[i].id],
        //                 selected:e.target
                        
        //             },()=>{
        //                 // article.addEventListener("input",function(e){
    
                            
    
        //                 //     console.log(self.state.WriteEdCont)
                          
                
        //                 // })
    
        //             })
                
           
           
                    
        //         })
    
    
     
              
    
        //     }

        
    
        
        const aff=this;

      
        article.addEventListener("input",function(e){
            
            if(e.inputType=="insertParagraph"){
                for(let j=0;j<article.childElementCount;j++){
                
                        
                        // const index=article.children[j]

                        if(j!==0){
                            if(article.children[j].id==article.children[j-1].id){
                                article.children[j].id=`${article.children[j].id}D`
                                console.log(article.children[j])
                            }
                        }

                    


            

            }


            }
   
            if(document.getElementById(aff.state.WriteEdCont[1])!==null && aff.state.active!=='blog-content'){
                console.log(`state ${aff.state.WriteEdCont}`)
            let extended =document.getElementById(aff.state.WriteEdCont[1])
            let prev=aff.state.WriteEdCont[0]

            console.log(extended.innerHTML)
            console.log(aff.state.WriteEdCont[0])



            // var s = extended.innerHTML;
            // var index = 10;
            // s = s.substring(0, index) + 'jakalalalallala' + s.substring(index + 1);
            // extended.innerHTML=s


            // console.log(extended.innerHTML)

            // extended.innerHTML[10]="jakalalalallala"

            // ---------------------------ISOLATION----------------------------------------------
            
            // ---------------------------ISOLATION----------------------------------------------
            for(let i=0;i<extended.innerHTML.length;i++){
          

                let extended =document.getElementById(aff.state.WriteEdCont[1])
                let prev=aff.state.WriteEdCont[0]
                
                let str=extended.innerHTML
                let index=i

                if(prev[i]!==extended.innerHTML[i]){
                    let self=aff
                


                    // extended.innerHTML[i]==`</div><div class="article-heading">${extended.innerHTML[i]}</div><div class="blog-content>"`
               
                    let id =extended.id
                    let conditionfst=str.substring(0,index)!==""

                    // let fnlstr=str.substring(0,index)+`</div><div class="blog-content>`+str.substring(index+1)


                    if(conditionfst){
                        var divfrst = document.createElement('div');
                        divfrst.className="blog-content"
                        divfrst.innerHTML=str.substring(0,index)

                    }
                  
       
                    var current=document.createElement('div');
                    current.className=self.state.active
                    current.innerText=extended.innerHTML[i]



                    let condition=str.substring(index+1)!==""

                    if(condition){
                        var divsnd = document.createElement('div');
                        divsnd.className="blog-content"
                        divsnd.innerHTML=str.substring(index+1)
    
    

                    }
        
                    if(extended.id[0]!=="b"){
                        if(conditionfst){
                            divfrst.id=`bf${id}${self.state.ID_index}`


                        }
                        if(condition){
                            divsnd.id=`bl${id}${self.state.ID_index}`


                        }

                    }
                    else{
                        // let num=id.slice(-1)
                        let nxtID=`b${extended.id}${self.state.ID_index}`
                        if(conditionfst){
                            divfrst.id=`${nxtID.replace("l","f")}`


                        }

                        if(condition){
                            divsnd.id=`${nxtID.replace("f","l")}`


                        }

                    }
                    self.setState({
                        ID_index:self.state.ID_index+1
                        
                    })

      
                    let elem=document.getElementById(extended.id.replace("f","l"))

          

                    

                        let save=extended.nextSibling

                        let parent=extended.parentNode
                        
                        



                    if(self.state.active!=="blog-content"){
                        if(extended.id.includes("b")){

                            parent.removeChild(extended)
                            
                            if(conditionfst){
                                parent.insertBefore(divfrst,save)


                            }
                            
                         
                            if(conditionfst && condition){
                                parent.insertBefore(current,save)
                                console.log(save)

                            }
                            else{
                                parent.insertBefore(current,save)
                            }


                            if(condition){
                                parent.insertBefore(divsnd,save)


                            }
    
                        }
                        else{
                         
                            parent.removeChild(extended)
                            if(conditionfst){
                                parent.appendChild(divfrst)

                                
                            }
                  
                            parent.insertBefore(current,save)


                        
                            if(condition){
                                parent.appendChild(divsnd)


                            }
    
                        }

                        self.text()

          
    
                      
    



                    }
                            // --------------------cursor_function---------------
                    
                            let tag=document.getElementsByClassName(self.state.active)
                            console.log(tag)
                            let setpos=document.createRange()
        
                            let set=window.getSelection()
                            setpos.setStart(tag[0], 1)
                            setpos.collapse(true);
                            set.removeAllRanges();
                            set.addRange(setpos);
                            tag[0].focus();
        
        
                            // ---------------------------

            

        
              






                        // let bst=content.
 
                    



                    
                  


                    // console.log(fnlstr)
                    // extended.innerHTML=fnlstr



                    console.log(extended.innerHTML)
                    // this.ReIndex()


                    for(let i=0;i<content.length;i++){
                        let jap=aff;
                            
                            content[i].addEventListener("click",function(e){
                                
                                try{
                                    jap.setState({
                                        WriteEdCont:[e.target.innerHTML,content[i].id],
                                        selected:e.target
                                        
                                    },()=>{
                                        console.log(jap.state.selected)
                    
                                    })

                                }
                                catch(e){
                                    console.log("ERROR TO BE NOTED")
                                    console.log(e)
                                }
                          
                            
                       
                       
                              
                            
                                
                            })
                
                
                 
                          
                
                        }
           
                    
                    for(let j=0;j<article.childElementCount;j++){
               

                        let self=aff;
                    
                        

                        article.children[j].addEventListener("click",function(e){
                            console.log(article.children[j])
                            self.setState({
                                WriteEdCont:[e.target.innerHTML,article.children[j].id],
                                selected:e.target
                            })
                          
                                
                
                        })
                        }
                    
                    break

             
                   
                }

                    
            }
  


                        
            

      
                // if(extended[i]!==prev[i]){
                //     console.log(prev[i])
                // }

            }

            // for(let j=0;j<article.childElementCount;j++){
            //     let self=aff;
            //     if((article.children[j].innerText.replace(/(\r\n|\n|\r)/gm, "").trim())==""){
            //         console.log("controlled ")
            //         article.children[j].setAttribute("class",self.state.active)
            //     }



          
            
                

            //     article.children[j].addEventListener("click",function(e){
            //         console.log(article.children[j])
            //         self.setState({
            //             selected:e.target
            //         })
                  
                        
        
            //     })
            //     }


        
          

        })







      
    }

    

    render() { 
      
        return (  
            <>
    
            <div className="article"   contentEditable="true"  >
                <div className='blog-content' id="1" >
                This is part 1 This is part 2 This is part 3
                </div>
                
            
              

            </div>

            <Controlbar/>

            {/* <div className="controlbar">
                <button onClick={this.text} id="text">T</button>
                <br/>
                <button onClick={this.heading} id="heading">H</button>
                <br/>
                <button onClick={this.subheading} id="subheading">sH</button>
                <button onClick={this.list} id="list">Li</button>
                <button onClick={this.quote} id="quote">Q</button>
                <br/>
                <button onClick={this.Delete} id="delete">Delete</button>
            </div> */}
            
            </>
        );
    }
}
 
export default Writing;

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
