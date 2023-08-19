import react from "react";
import styles from '../../styles/Slider.module.css'
const Slider =()=>{

    return(

        <div className={styles.container}>
            
            <div className={styles.inputRoom}>
        <label for='rooms'> rooms</label>
        
        <input type='range' min='1' label='max'   max='10'/>
        </div>

        <label for='bathrooms'> bathrooms

        <input type='range' min='1' label='max'  max='10'/></label>
   
        </div>
    );
}
export default Slider