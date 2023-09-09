import React, { use, useState } from "react";
import Logo from './/footerLogo';
import styles from '../../../public/Navbar.module.css'
import Links from ".//Links";
import logo  from "../../../public/logo.svg";
import Image from "next/image";
import logoText from '../../../public/logoText.svg'
/*const backup =  <div className= {`styles.NavbarContainer${isOpen?'Open' :'Closed'}`}  onClick={toggle}>*/


function Navbar (){
    console.log(styles)

const [isOpen, setOpen] = useState(false)
const [isMobile, setMobile] = useState(false);

function checkMobile (){
    if (window.innerWidth === '1000px' ){
        setMobile(!isMobile)
    }

}


function toggle(){
    setOpen(!isOpen)
}
/*const navClassname = classNames('styles.NavbarContainer',{
    'Open':isOpen,
    'Closed':!isOpen
},'')*/

/*<div className= {{styles}`.NavbarContainer${isOpen?'Open' :'Closed'}`}  onClick={toggle}>*/

    return(


         <div className= {styles[`NavbarContainer${isOpen?'Open' :'Closed'}`]}  onClick={toggle}>
<nav className={styles.logoNavHolder}>
<Image className ={styles.logoText} src={logoText} alt='logotext'/>

<Logo className ={styles.NavbarLogo} 
/>
</nav>
<div id ='navbarLinks '> 
<Links NavState={isOpen}/>
</div>
           


        </div>

)

}



export default Navbar