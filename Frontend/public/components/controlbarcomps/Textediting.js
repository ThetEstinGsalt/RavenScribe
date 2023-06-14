import React, { Component } from 'react';
import styles from '../../../styles/writing.module.css'
import * as actions from '../../../store/actions/Editing';
import TextImage from '../../icons/TextT.png'
import Quote from '../../icons/Quote.png'
import Heading from '../../icons/Heading.png'
import Bold from '../../icons/Bold.png'
import List from '../../icons/List.png'
import InsertArrow from '../../icons/InsertArrow.png'
import { connect } from 'react-redux';
import Image from 'next/image'


class Textediting extends Component {
    constructor(props){
        super(props);
        this.SetFont=(font)=>{
            this.props.Fontset(font)
        }
        this.SetInsert=(insert)=>{
            this.props.Insert(insert)
        }
 
    }
    state={
        Index:0,
    }
    componentDidMount(){
     
        let a =document.getElementsByClassName(`${styles.TexTstyleOption }`)
        


     
        for(let i=0;i<a.length;i++){
            a[i].addEventListener("click",()=>{
         
                
                
                if(this.props.Font==a[i].children[0].id){
                    this.SetFont(`${a[i].children[0].id}-${this.state.Index}`)

                    let increment=this.state.Index + 1
                    this.setState({
                        Index:increment
                    })
                    // this.Index(1)
                }
                else{
                    this.SetFont(a[i].children[0].id)
                    // this.Index(1)



                }

     
 
                
            })
        }

        let b =document.getElementsByClassName(`${styles.InsertArrowBox}`)[0]
        for(let j=0; j<b.children.length;j++){
            b.children[j].addEventListener("click",()=>{
                this.SetInsert(b.children[j].id)
            })

        }

    }
    render() {
        
        return (
            <>
            <div className={styles.ParentTextEditing}>


    
                     <div className={styles.TextEditing}>

       
                        {/* <div className={styles.TexTstyleOption }>

                        <Image className={styles.IconImageTexting} src={TextImage} height={500} width={30} id="subHeading" alt="" />

                        </div> */}
                
                        <div className={styles.TexTstyleOption}>
                        <Image className={styles.IconImageTexting} src={Quote} height={500} width={30} id="quotes" alt="" />
                        </div>

                        <div className={styles.TexTstyleOption }>
                        <Image className={styles.IconImageTexting} src={List} height={500} width={30} id="list" alt="" />
                        </div>

                        <div className={styles.TexTstyleOption }>
                        <Image className={styles.IconImageTexting} src={Bold} height={500} width={30} id="subHeading" alt="" />
                        </div>

                        <div className={styles.TexTstyleOption }>
                        <Image className={styles.IconImageTexting} src={Heading} height={500} width={30} id="articleHeading" alt="" />
                        </div>

                
                       
            
                  
                    </div>
                            
                    <div className={styles.InsertArrowBox}>
                        <Image src={InsertArrow} height={500} width={30} className={styles.InvertedInsertArrow} alt="" id="Down" />

                        
                        <Image src={InsertArrow} height={500} width={30}  alt="" className={styles.StraightInsertArrow}id='Up'/>
                        
                        
                            
                        </div>


                      

                    </div>
                    {/* <div className={styles.ElaboratedTextBars}>
                        <div className={styles.ElaboratedTextBar}>
                            Text
                            </div>
                        <div className={styles.ElaboratedTextBar}>
                            Bold
                            </div>
                        <div className={styles.ElaboratedTextBar}>
                            Quote
                            </div>
                        </div> */}
                
            </>
        );
    }
}




const mapStateToProps = (state) => {
    return {

        
        loading: state.auth.loading,
        error: state.auth.error,

        // isAuthenticated: state.token,
        isAuthenticated: state.token !== null,
        Font:state.Edit.Font,
        Font_Index:state.Edit.Font,

        Insert:state.Edit.Insert


    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Fontset: (Font) => dispatch(actions.FontSuccess(Font)),

        Insert: (Insert) => dispatch(actions.INSERTSUCCESS(Insert))

    }
}



export default  (connect(mapStateToProps, mapDispatchToProps)(Textediting))