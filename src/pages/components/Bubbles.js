/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import styles from '../../styles/Bubbles.module.css';


function Bubbles ({...props}){




    const {className,bubbleImage, bubbleText, bubbleTextNumber } = props;
    return(
<div className={styles[className]}>
        <div className={styles.numberMasterContainer}>
         <h2 className={styles.numberContainer}>{bubbleTextNumber} </h2> 
        </div>
        <div className={styles.bubbleMasterContainer}>
         <h2 className={styles.bubbleText}>{bubbleText}</h2>
          <Image 
       className={styles[`${props.className}Image`]} 
          src={bubbleImage}
          alt ={className}
          />
            </div>
</div>
    )
}
export default Bubbles;