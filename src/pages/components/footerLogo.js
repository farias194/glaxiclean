import React from "react";
import styles from '../../styles/Logo.module.css'
import stylesNav from '../../styles/Navbar.module.css'
import logo  from "../../../public/logo.svg";
import Image from "next/image";
function Logo(...props){

return(
<div className={styles.NavbarLogo}>
    
<Image src={logo} alt='logo'/>
</div>
)
}
export default Logo