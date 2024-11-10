import React from "react";
import styles from '../../styles/Services.module.css'
import NavbarLayout from "./NavbarLayout";
import Pattern from '../../../public/blobpattern.png'
import Footer from "./Footer";
import Element from '../../../public/Element.svg';
import starElement from '../../../public/starElement.svg';
import Image from "next/image";
import HomeCleaningIcon from '../../../public/HomeCleaningIcon.svg';
import OfficeCleaningIcon from '../../../public/OfficeIcon.svg';
import divDrip from '../../../public/uhh-.svg'
function Services() {

    return(
        <div >
        <NavbarLayout/>

        <div className={styles.ServicesContainer}>
<div className={styles.ServicesHeroContainer}>
<h1> Home Sweet Eco-Home</h1>
<p>Kick back and relax in a home that's as clean as it is environmentally friendly. Our non-toxic cleaning products make your place sparkle without any weird chemicals messing up the vibe.</p>  </div>
    
    <div className={styles.ExplainerMaster}>

<div className={styles.ServicesExplainContainer}>
    <div className={styles.ExplainerOne}>

        <h2>Full Home Cleaning</h2>
      {/*  <Image src={HomeCleaningIcon} alt='Home Cleaning Icon'/> */}
        <ul>
    <li>   Time-saving convenience</li>
  <li>Attention to Detail</li>
  <li>Health and Hygiene</li>
 <li>Stress Free Experience</li>

        </ul>
    </div>

    <div className={styles.ExplainerTwo}>

        <h2>Office Cleaning</h2>

       {/* <Image src={OfficeCleaningIcon} alt='Office Cleaning Icon'/> */}

        <li>Comprehensive office cleaning for a pristine workspace</li>
    <li>Time-saving convenience for a productive office environment</li>
   
    <li>Attention to detail for a polished and professional office appearance</li>
    <li>Satisfaction guarantee for your peace of mind  </li>  
    
    </div>

    <div className={styles.ExplainerThree}>
<h2>Single Rooms</h2>
<ul>
    <li>Good for single households</li>
    <li>flexible sheduling</li>
    <li>rescheduling options</li>

</ul>
</div>

<div className={styles.ExplainerFour}>
<h2>Green Cleaning</h2>
<ul>
    <li> Hypoallergenic </li>
    <li>Products that are safe for pets and small childre</li>
</ul>
</div>
</div>
    </div>
    </div>
<Footer/>
  </div>
    )
    
}
export default Services;