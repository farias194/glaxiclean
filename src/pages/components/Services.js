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
<h1> Services</h1>
<p>We offer a variety of services. If you need single rooms, we got that. Multiple rooms, we got that too. Look below </p>   </div>
    </div>
    <div className={styles.ExplainerMaster}>

<div className={styles.ServicesExplainContainer}>
    <div className={styles.ExplainerOne}>

        <h2>Full Home Cleaning</h2>
        <Image src={HomeCleaningIcon} alt='Home Cleaning Icon'/>
        <ul>
    <li>   Time-saving convenience</li>
  <li>Attention to Detail</li>
  <li>Health and Hygiene</li>
 <li>Stress Free Experience</li>

        </ul>
    </div>

    <div className={styles.ExplainerTwo}>

        <h2>Office Cleaning</h2>

        <Image src={OfficeCleaningIcon} alt='Office Cleaning Icon'/>

        <li>Comprehensive office cleaning for a pristine workspace</li>
    <li>Time-saving convenience for a productive office environment</li>
   
    <li>Attention to detail for a polished and professional office appearance</li>
    <li>Satisfaction guarantee for your peace of mind  </li>  
    
    </div>

    <div className={styles.ExplainerThree}>
<h1>Single Rooms</h1>
<h3>Don’t need a full house cleaning? No problem. We offer one two or more room cleanings</h3>
<ul>
    <li>Good for single households</li>
    <li>flexible sheduling</li>
    <li>rescheduling options</li>

</ul>
</div>

<div className={styles.ExplainerFour}>
<h1>Green Cleaning</h1>
<ul>
    <li> Hypoallergenic </li>
    <li>Products that are safe for pets and small childre</li>
</ul>
</div>
</div>
    </div>
<Footer/>
  </div>
    )
    
}
export default Services;