import Head from "next/head";
import Link from "next/link";
import styles from '../../styles/ghero.module.css'
import Heroimg from '/public/HeroImageAlt.png'
import Slider from "./Slider";
import BookNowButton from "./BookNowButton";
function Hero (){

    return(
<div className={styles.HeroContainer}>

<div className={styles.HeroClass} >

        <h1>
        Green Cleaning on your schedule
        </h1>
        
        <h2>New Jerseys premier cleaning service, serving the entire North Jersey area</h2>
    <h2>Book now for a free cleaning</h2>
<BookNowButton/>        </div>
        </div>
    )
}
export default Hero