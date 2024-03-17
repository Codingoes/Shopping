import React from 'react'
import './Herosection.css'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const Hersosection=()=>{
    return(
        <div className='herosection'>
            <div className='larrow'><IoIosArrowBack /> </div>
            <div className='contentpage'>GET START YOUR FAVOURITE SHOPPING</div>
            <div className='rarrow'><IoIosArrowForward /></div>

        </div>

    )
}

export default Hersosection;