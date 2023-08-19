import react from "react";
import styles from '../../styles/AboutUs.module.css'
import Navbar from "../components/Navbar";
import stylersN from '../../../public/Navbar.module.css'
import Image from "next/image";
import Footer from "./Footer";
import MaidImage from '../../../public/MaidImage.png'
const AboutUsPage =()=>{

    return(

<div className={styles.MasterContainer} >
    <Navbar/>

    
    <section className={styles.container}>

<h1 className={styles.AboutUsHeader}> clean homes dont have to be toxic</h1>
<p>Through our use of green cleaning products, we are not only reducing the environmental impact of our services but also creating a healthier indoor environment for you and your loved ones. Our meticulous attention to detail ensures that every nook and cranny is thoroughly cleaned, leaving your home refreshed, rejuvenated, and free from harmful residues.

Join us in our mission for a cleaner, safer, and more sustainable future.</p>
<p>We arere a small business serving the entire North Jersey area for 5 years. We take care of this part of life so you can kick butt in the rest of your life. 
</p>
</section>
<Image className={styles.MaidImageCont} src={MaidImage} alt=''></Image>



<section className={styles.AboutUsContainerInfo}>

<section className={styles.ContainerInfoOne}>
    <h1>Timeless and Effeciency</h1>
    <p>We understand that your time is valuable. Thats why we are dedicated to delivering our services with punctuality and efficiency. With our reliable team of skilled professionals, we strive to complete each cleaning project promptly and effectively, ensuring your home is left spotless and ready for you to enjoy.
</p>
</section>
<section className={styles.ContainerInfoTwo}>
    <h1>Unparalleled Customer Service</h1>
    <p>Your satisfaction is our ultimate goal. We go above and beyond to provide a customer experience that is second to none. From the moment you reach out to us, we listen attentively to your unique needs and preferences. Our friendly and courteous staff is always ready to address any questions 
    or concerns you may have, ensuring that you feel heard and valued every step of the way.</p>
</section>
<section className={styles.ContainerInfoThree}>
<h1>Green Cleaning for a Healthy Home</h1>
<p>
We deeply care about your health and the well-being of 
the environment. Thats why we have made a conscious choice to exclusively use green cleaning products. Unlike harsh chemicals that can have adverse effects on your health and the air quality in your home, our eco-friendly cleaning solutions are non-toxic, biodegradable, and safe for your family, including children and pets. We are committed to creating 
a clean and healthy living space without compromising on the planets future.
</p>

</section>

</section>
<Footer/>
</div>
    )
    }

export default AboutUsPage