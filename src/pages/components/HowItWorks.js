import BubbleOneImage from 'public/BubbleOneImage.png';
import BubbleTwoImage from 'public/BubbleTwoImage.png';
import BubbleThreeImage from 'public/BubbleThreeImage.png';
import styles from '../../styles/HowItWorks.module.css';
import Bubbles from './/Bubbles'
import stylesBubbles from '../../styles/Bubbles.module.css'
import Blob from 'public/blob.svg';

function HowItWorks(){

const bubbleClassName = ['BubbleOne', 'BubbleTwo', 'BubbleThree'];

const bubbleImage = [BubbleOneImage, BubbleTwoImage, BubbleThreeImage];
const bubbleTextNumber= [ '1 ', '2 ', '3 '];
const bubbleText = ['Sign Up through our booking site', 'Select the areas which you would like to clean','Relax and let us take care of the rest'
];


    return(


        <div className={styles.HowItWorksContainer} id="HowItWorksContainer">
<h1>How It Works</h1>
<div className={styles.BubblesContainer}>
    
<Bubbles 
    className ={bubbleClassName[0]}
    bubbleImage = {bubbleImage[0]}
    bubbleTextNumber = {bubbleTextNumber[0]}
    bubbleText ={bubbleText[0]}
    
    />
    <div></div>
        <Bubbles 
    className ={bubbleClassName[1]}
    bubbleImage = {bubbleImage[1]}
    bubbleText ={bubbleText[1]}
    bubbleTextNumber ={bubbleTextNumber[1]}/>
        <Bubbles 

    className ={bubbleClassName[2]}
    bubbleImage = {bubbleImage[2]}
    bubbleText ={bubbleText[2]}
    bubbleTextNumber ={bubbleTextNumber[2]}/>
        
        </div>
        </div>
    )
}
export default HowItWorks