import react from "react";
import styles from '../../styles/BookNowButton.module.css'
import Link from "next/link";
const  BookNowButton= ()=>{

    return(
<div className={styles.container}>
<Link src=' https://calendly.com/ariasfrank057/single-cleaning'>
<button className={styles.button}>
Book Now

</button>
</Link>
</div>

    )
}
export default BookNowButton;