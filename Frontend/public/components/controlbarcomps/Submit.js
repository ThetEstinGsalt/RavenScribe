import React, { Component } from 'react';
import styles from '../../../styles/writing.module.css'
import Image from 'next/image';
import { connect } from 'react-redux';
import Cross from '../../icons/cross.png'

import * as actions from '../../../store/actions/Editing'
import Link from './Link';

class Submit extends Component {
    constructor(props) {
        super(props);

        this.SubmitDisplay=(boolean)=>{
            this.props.SubmitDisplay(boolean)
        }




    }
    state={
        Date:null,
        LinkActive:true,
        AffActive:false,
        Links:[],
        Affiliates:[],

    }

    componentDidUpdate(){
        let LinkDisp=document.getElementsByClassName(`${styles.RefLink}`)[0]
        let Affiliate=document.getElementsByClassName(`${styles.wholecontainer}`)[0]

        if(!this.state.LinkActive){
            LinkDisp.style.display="none"
            Affiliate.style.display="block"


        }
        else{
            LinkDisp.style.display="flex"
            Affiliate.style.display="none"


        }



    }
    componentDidMount(){
        let crossSubmit=document.getElementById("CrossImageSubmit")
        let article=document.getElementsByClassName("article")[0]
        let Controlbar=document.getElementsByClassName(`${styles.controldbar}`)[0]
        let DoneBtn = document.getElementById("WritingDoneBtn")

        let LinkAct=document.getElementById("submitLink")
        let AffAct=document.getElementById("submitAffiliate")
        let Activeness=document.getElementsByClassName(`${styles.SubmitbarOption}`)

        let plusLink = document.getElementById("LinkAddImage")

        let LinkInputsAll=document.getElementsByClassName(`${styles.LinkInput}`)

        let LinkInputs=[LinkInputsAll[0],LinkInputsAll[1]]

        const displayLink=document.getElementById("displayPrevLinks")
        let linkinpbox=document.getElementById("linkinpbox")
        let AffBtn=document.getElementById("AffAdImg")

        // let crosses= document.getElementsByClassName(`${styles.CrossBtnLink}`)
        // for(let i=0;i<crosses.length;i++){
        //     crosses[i].addEventListener("click",()=>{
        //         crosses[i].parentElement.parentElement.removeChild(crosses[i].parentElement)
        //     })
        // }


        AffBtn.onclick=()=>{
            if(LinkInputsAll[2].value.length!==0 && LinkInputsAll[3].value.length!==0&& LinkInputsAll[4].value.length!==0){


                let parent=document.getElementsByClassName(`${styles.displayPrevAff}`)[0]

                
                let Arraystate=this.state.Affiliates

                let object={

                    Tag:LinkInputsAll[2].value,
                    url:LinkInputsAll[3].value,
                    Link:LinkInputsAll[4].value
                }

                Arraystate.push(object)



                this.setState({
                    Affiliate:Arraystate
                })

                

                let NewElemHolder=document.createElement("div")

                let NewElem=document.createElement("div")

                NewElem.className=`${styles.AffiliateImg}`
                let NewElemSpan=document.createElement("span")
                let crossBtn=document.createElement("img")



                crossBtn.src= '../../icons/cross.png'
                crossBtn.style.height="10px"
                crossBtn.style.width="10px"
                crossBtn.className=`${styles.CrossBtnLink}`
                crossBtn.onclick=()=>{
                    let text = LinkInputsAll[2].value
                    let dict=this.state.Affiliates
                    for(let j=0;j<dict.length;j++){
                        if(dict[j].Tag==text){
                            dict.splice(j,1)
                            this.setState({
                                Affiliates:dict
                            })
                        }
                    }
                    crossBtn.parentElement.parentElement.parentElement.removeChild(crossBtn.parentElement.parentElement)

       

    
                }
                NewElem.style.background=`url('${LinkInputsAll[3].value}') center center/cover`

                NewElemSpan.innerText=LinkInputsAll[2].value
                
                NewElem.append(crossBtn)
                NewElemHolder.append(NewElem)
                NewElemHolder.append(NewElemSpan)
          

                NewElemHolder.style.flexDirection="column"
                NewElemHolder.style.display="flex"
                NewElemHolder.style.justifyContent="center"
                NewElemHolder.style.alignItems="center"
                NewElemHolder.className=`${styles.AffSet}`

                
                parent.append(NewElemHolder)

                LinkInputsAll[2].value=""
                LinkInputsAll[3].value=""
                LinkInputsAll[4].value=""






            }

        }

        plusLink.onclick=()=>{
            if(LinkInputs[0].value.length!==0 && LinkInputs[1].value.length!==0){
                let Arraystate=this.state.Links
                let object={
                    Tag:LinkInputs[0].value,
                    url:LinkInputs[1].value
                }

                

                Arraystate.push(object)

          
                this.setState({
                    Links:Arraystate
                })
           
                let NewElem=document.createElement("div")
                let NewElemSpan=document.createElement("span")
                let crossBtn=document.createElement("img")
                crossBtn.src= '../../icons/cross.png'
                crossBtn.style.height="10px"
                crossBtn.style.width="10px"
                crossBtn.className=`${styles.CrossBtnLink}`
                crossBtn.onclick=()=>{
                    let text = LinkInputs[0].value
                    let dict=this.state.Links
                    for(let j=0;j<dict.length;j++){
                        if(dict[j].Tag==text){
                            dict.splice(j,1)
                            this.setState({
                                Links:dict
                            })
                        }
                    }
                    crossBtn.parentElement.parentElement.removeChild(crossBtn.parentElement)

    
                }


                NewElemSpan.innerText=LinkInputs[0].value
                
                NewElem.append(NewElemSpan)
                NewElem.append(crossBtn)
                NewElem.style.display="flex"
                NewElem.style.flexDirection="row"
                NewElem.style.justifyContent="center"
                NewElem.style.alignItems="center"
                NewElem.className=`${styles.LinkSet}`

                displayLink.append(NewElem)
                LinkInputs[0].value=""
                LinkInputs[1].value=""


            
            }
          
            

            
        } 
        


        for(let i=0;i<Activeness.length;i++){

            Activeness[i].addEventListener("click",()=>{
                if(Activeness[i]==AffAct){
                    this.setState({
                        LinkActive:false,
                        AffAct:true,
                    })
                    LinkAct.style.opacity=".3"
                    LinkAct.style.borderBottom=undefined
                    AffAct.style.opacity="1"
                    AffAct.style.borderBottom="1px solid lightskyblue"

                }
                else{
                
                    this.setState({
                        LinkActive:true,
                        AffAct:false,
                    })

                    AffAct.style.opacity=".3"
                    AffAct.style.borderBottom=undefined
                    LinkAct.style.opacity="1"
                    LinkAct.style.borderBottom="1px solid lightskyblue"

                 

                }
            })
        }

        const self =this
        crossSubmit.onclick=function(){
            self.SubmitDisplay(false)

            Controlbar.style.display="block"
            article.style.opacity="1"
            DoneBtn.style.opacity="1"

        }
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var today  = new Date();

        const DateNow = today.toLocaleDateString("en-US", options)
        this.setState({
            Date:DateNow,
        })


    }
    

    render() {
        return (<>
            <div className={styles.SubmitBar} >


                <div className={styles.SubmitBarTop}>

          
            <div   className={styles.WriterInfo}>
                <div  className={styles.WriterImage}  id="WriterImageSubmitBar" style={{background:'url("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS5FXAyhXJaW9Epa1l8Hpz0VfmSjylO20Jplb8EIa36rXJIsFXS") center center/cover'}}>
  

           

                </div>
                <span   className={styles.WriterName}>Brain Cox</span>

            </div>

                <div className={styles.SubmitBarCross}>

                    <Image src={Cross} height={500} width={30} id="CrossImageSubmit" alt="" />

                </div>

                </div>


                <div className={styles.SumUpSubmit}>
                    <div className={styles.SumUpTItle}>This is a dummy sample Blog on RavenScribe <br/><span className={styles.dateSpan}>{this.state.Date}</span></div>

                    <div id="BlogThumbnailSum" className={styles.SumUpThumbnail} style={{background:'url("https://images.unsplash.com/photo-1462258409682-731445253757?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80") center center/cover'}}> </div>
               
                        



                </div>

                <div className={styles.BlogAttachments}>

                    <div className={styles.keywords}>
                        <span>Keywords -</span>
                        <input type='text' className={styles.SubmitInputs}></input>
                    </div>
                    

                    <div className={styles.BlogCategory}>
                        <span>Category -</span>
                        <select name="select" className={styles.SubmitInputsSelect}>
                            <option value="Education">Education</option> 
                            <option value="Entertainment" selected>Entertainment</option>
                            <option value="News">News</option>
                            <option value="Tutorial Guide">Tutorial Guide</option>
                            <option value="Lifestyle">Lifestyle</option>
                            <option value="Lists">Lists</option>
                            <option value="Philosophy">Philosophy</option>
                            <option value="Literature">Literature</option>
                            <option value="Discussion">Discussion</option>
                            <option value="Review">Reviews</option>
                            <option value="Research">Research</option>
                            <option value="Facts">Facts</option>
                            <option value="Science And Technology">Science And Technology</option>
                            <option value="Fitness">Fitness</option>
                            <option value="Others">Others</option>
                
                        </select>
            
                    </div>

                    <div className={styles.RadioSelection}>
                        <span>Made for adults only -</span>
                        <div className={styles.SubmitInputsRadio} >
                             <input className={styles.radio} selected type="radio" id="No" name="restriction" value="0" checked="checked"/>
                            <label for="css">No</label>
                            <input className={styles.radio} type="radio" id="Yes" name="restriction" value="1"/>
                            <label for="html">Yes</label>
                     

                        </div>
                        
                    </div>


                    <div className={styles.DescSubmit}>
                        <span>Description -</span>
                        <textarea id="DescSubmit"  className={styles.DescTextArea} name="txtname" rows="4" cols="50" maxlength="200" placeholder='Description of this blog'></textarea>
                    </div>



                    
                    

                    <div className={styles.SubmiAandLselection}>
                        <span id="submitLink"  className={styles.SubmitbarOption}>Links</span>
                        <span id="submitAffiliate" className={styles.SubmitbarOption}>Affiliate</span>
                    </div>



          
                    <div className={styles.RefLink}>
                        <span>Reffer Links -</span>
                        <div className={styles.LinkInpBar} id="linkinpbox">

                            <input name="InputTab" placeholder='Tag/Label/Name of the link youre reffering' className={styles.LinkInput}></input>
                            <input name="InputLink" placeholder='Paste the URL here' className={styles.LinkInput}></input>
                            <div className={styles.LinkAddImage}>
                            <Image src={Cross} height={10} width={10} id="LinkAddImage" className={styles.LinkAddIMG} alt="" />

    
                            </div>
                            <div className={styles.displayPrevLinks} id="displayPrevLinks">


                                
                            </div>
                            

                        </div>
             
                    </div>
                    

                <div className={styles.wholecontainer}>
                    <div className={styles.AffiliateLink}>
                        <span>Reffer Links -</span>
                        <div className={styles.LinkInpBar} id="linkinpbox">

                            <input name="AffName" placeholder='The Name of your product' className={styles.LinkInput} id="AffName"></input>

                            <input name="AffImg" placeholder='Paste the Picture URL address here' className={styles.LinkInput} id="AffImg"></input>

                            <input name="AffLink" placeholder='Paste the URL to your Product' className={styles.LinkInput} id="AffLink"></input>
                            
                            <div className={styles.LinkAddImage}>
                            <Image src={Cross} height={10} width={10} id="AffAdImg" className={styles.LinkAddIMG} alt="" />

    
                            </div>
                      
                            

                        </div>
                      
             
                    </div>
                      <div className={styles.displayPrevAff} id="displayPrevAff">


                        </div>
                    
                </div>


                  
                  



                </div>

              

                
            <button id="Submit" className={styles.Submit}>Pusblish</button>
            </div>
            </>

        );
    }
}

const mapStateToProps = (state) => {
    return {
     

        SubmitDisplayVar:state.Edit.SubmitBarDisplay




    }
}


const mapDispatchToProps = (dispatch) => {
    return {

        SubmitDisplay: (boolean) => dispatch(actions.SubmitBarDisplay(boolean)),
        
  

    }
}

// export default Writing;
export default (connect(mapStateToProps,mapDispatchToProps)(Submit))

