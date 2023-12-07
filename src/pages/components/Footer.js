import React from "react";
import Footerimg from '../../../public/Footer.webp'
import styles from '../../styles/Footer.module.css'
import Logo from './/footerLogo.js'
import Links from './/Links'
import Link from "next/link";
import Services from "./Services";
import Image from "next/image";

function Footer (){

return(
<div className={styles.FooterContainer} id='FooterContainer'>
<div className={styles.footerLinks}>
    <div className={styles.footerLogoContainer}>
<Logo/>

    <p>glaxiclean</p>
    </div>
<ul className={styles.linkContainer}>
    <Link className={styles.links} href='../components/Services'><li>Services</li></Link>
    <Link className={styles.links} href='../'><li>Home</li></Link>
    <Link className={styles.links} href='../components/AboutUsPage'><li>About</li></Link>
</ul>
</div>
    </div>
);
}

export default Footer;