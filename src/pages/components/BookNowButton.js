import react from "react";
import styles from '../../styles/BookNowButton.module.css'
import Link from "next/link";
const  BookNowButton= ()=>{

    return(
<div className={styles.container}>
<button className={styles.button}>
Book Now

</button>
</div>

    )
}
export default BookNowButton;