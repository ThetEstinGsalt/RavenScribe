import React, { Component } from 'react';
import styles from '../../../styles/writing.module.css'
class Textediting extends Component {
    render() {
        return (
            <>
                     <div className={styles.TextEditing}>
                        <div className={styles.Option_Txt_selection}>
                        <div className='article-heading'>this is the text if i align it in the riht way and im blindfoldee  </div>
                        <div className='blog-content'>this is the text if i align it in the riht way and im blindfoldee </div>
                    </div>
                    </div>
                
            </>
        );
    }
}

export default Textediting;
