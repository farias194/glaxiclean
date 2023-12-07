import React, { use, useState, useEffect} from "react";
import Logo from './/footerLogo';
import styles from '../../../public/Navbar.module.css'
import Links from ".//Links";
import logo  from "../../../public/gclogo.svg";
import Image from "next/image";
import logoText from '../../../public/logoText.svg'
/*const backup =  <div className= {`styles.NavbarContainer${isOpen?'Open' :'Closed'}`}  onClick={toggle}>*/


function Navbar (){
    console.log(styles)

const [isOpen, setOpen] = useState(false)
const [isMobile, setMobile] = useState(false);


useEffect(() =>{

const handleResize = () =>{
    setMobile(window.innerWidth < 700);
};

handleResize();

    window.addEventListener('resize' , handleResize);
    return()=>{
        window.removeEventListener('resize', handleResize)
    }
},[]);


function toggle(){
    setOpen(!isOpen)
}
/*const navClassname = classNames('styles.NavbarContainer',{
    'Open':isOpen,
    'Closed':!isOpen
},'')*/

/*<div className= {{styles}`.NavbarContainer${isOpen?'Open' :'Closed'}`}  onClick={toggle}>*/

    return(

         <div className= {styles[`NavbarContainer${isOpen?'Open' :'Closed'}${isMobile ? 'Mobile': 'Desktop'}`]}onClick={toggle}>


<Logo className ={styles.NavbarLogo} 
/>
<div id ='navbarLinks '> 
<Links NavState={isOpen}/>
</div>
           


        </div>

)

}



export default Navbar