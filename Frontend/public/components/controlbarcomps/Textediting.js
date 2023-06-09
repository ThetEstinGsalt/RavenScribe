import React, { Component } from 'react';
import styles from '../../../styles/writing.module.css'
import * as actions from '../../../store/actions/Editing';

import { connect } from 'react-redux';


class Textediting extends Component {
    constructor(props){
        super(props);
        this.SetFont=(font)=>{
            this.props.Fontset(font)
        }
    }
    componentDidMount(){
        let a =document.getElementsByClassName(`${styles.TexTstyleOption }`)

        console.log(a.length)
        console.log(a.item)
        for(let i=0;i<a.length;i++){
            a[i].addEventListener("click",()=>{
                // console.log(a[i].children[0].id)
                this.SetFont(a[i].children[0].id)
     
 
                
            })
        }
    }
    render() {
        
        return (
            <>
                     <div className={styles.TextEditing}>

       
                        <div className={styles.TexTstyleOption }><div className={styles.CasualTextSelect} id="blog-content">Text</div></div>
                      
                        <div className={styles.TexTstyleOption}><li>Text</li></div>

                        <div className={styles.TexTstyleOption }><div className={ "quotes"+" " + styles.TextQuoteSelect} id="quotes">"Text"</div></div>


                        <div className={styles.TexTstyleOption }><div className={styles.HeadingSelect +" "+ "article-heading"} id="article-heading">Text</div></div>


                        <div className={styles.TexTstyleOption }><div className={styles.subHeadingSelect +" "+ "subHeading"} id="subHeading">Text</div></div>
                       
            
                  
                    </div>
                
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
        Font:state.Edit.Font


    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Fontset: (Font) => dispatch(actions.FontSuccess(Font))

    }
}



export default  (connect(mapStateToProps, mapDispatchToProps)(Textediting))