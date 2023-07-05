import React, { Component } from 'react';
import styles from '../../styles/Conform.module.css'
class ConformationBar extends Component {
    componentDidMount(){
        let btn = Array.from(document.getElementsByClassName(`${styles.PromptRes}`))
        btn.forEach((item, index)=>{
            item.onclick=()=>{
                console.log(item.id.split("-")[1])


            }
    
        })

    }

    render() {
        return (
            <div>
                <div className={styles.ConfoBar}>
                    <div className={styles.Prompt} id="Prompt">Are your sure you want to Delete this comment ?</div>
                    <div className={styles.Resbtns}>

                    <button className={styles.PromptRes} id='conformation-1'>Yes</button>
                    <button className={styles.PromptRes} id='conformation-0'>No</button>


                    </div>
        
                    
                </div>
            </div>
        );
    }
}

export default ConformationBar;
