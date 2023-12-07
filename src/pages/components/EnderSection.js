import react from "react";
import styles from '../../styles/EnderSection.module.css';

import BookNowButton from "../components/BookNowButton";
import Footer from "../components/Footer";

const EnderSection =() =>{

    return(
        <div>
        <div class={styles.EnderContainer}>

            <h1 className={styles.hello}>Dont Come Home From Work to More Work</h1>
            <BookNowButton/>
            <div className={styles.EnderFooterContainer}>
        <Footer/>
        </div>
        </div>
        </div>
    )
}
export default EnderSection;