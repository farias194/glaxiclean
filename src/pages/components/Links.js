
import React from "react";
import styles from '../../styles/Links.module.css';
import Link from "next/link";

function Links( props){




    return(
        <div className={styles[`Links${props.NavState ? 'Open' :'Closed'}`]}>
        <ul>
            <Link className = {styles.LinksOpenLinks}href ='../components/Services'>Services</Link>
            <Link className={styles.LinksOpenLinks}href='../components/AboutUsPage'>About Us
            </Link>
            <Link className= {styles.LinksOpenLinks} href='/'> Home</Link>
        </ul>


    </div>
    );

}
export default Links