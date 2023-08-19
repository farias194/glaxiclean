import React from "react";
import CleanersGif from '../../../public/Cleaners.gif'
import styles from '../../styles/Cleaners.module.css'
import Image from "next/image";
function Cleaners(){

    return(
        <div className={styles.CleanerContainer} id ="CleanerContainer">
<h1 className={styles.CleanerContainer}> Eco Friendly Cleaners
</h1>
<h2>We only use <span className={styles.spanner}> natural ecofriendly products</span>. So you and your pets can breathe easy</h2>
</div>
    )
}
export default Cleaners