import Head from "next/head";
import Link from "next/link";
import styles from '../../styles/ghero.module.css'
import Heroimg from '/public/hero-image.png'
import Slider from "./Slider";
import BookNowButton from "./BookNowButton";
function Hero (){

    return(
<div className={styles.HeroContainer}>

<div className={styles.HeroClass} >

        <h1>
        Green Cleaning, on your schedule
        </h1>
    
        </div>
        </div>
    )
}
export default Hero