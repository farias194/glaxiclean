import react from "react";
import Image from "next/image";
import Cleaners2 from '../../../public/Cleaners2.gif'
import Jiff2 from '../../../public/Jiff2.gif'
const Jiff =()=>{

    return(
        <div>
            <Image style={{
                filter: 'hue-rotate(90deg)',
                 position: 'absolute' ,
                  height: '100%',
                   width:'100%',
                    objectFit:'contain',
                     boxShadow: 'unset',
                     }} src={Jiff2} alt='gif'/>
        </div>
    )
}
export default Jiff