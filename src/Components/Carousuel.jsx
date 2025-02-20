import React from 'react'
import { Carousel } from "@material-tailwind/react";
import img1 from '../images/Carosuel/img1.webp';
import img2 from '../images/Carosuel/img2.webp';
import img3 from '../images/Carosuel/img3.webp';
import img4 from '../images/Carosuel/img4.webp';
// npx tailwindcss-cli@latest init     - > for material tailwind.config.js

const Carousuel = () => {
    // const imagesCnt=["1","2","3","4"]
    return (
        <>
            <Carousel className="rounded-xl h-80" autoplay={true} autoplayDelay={3000} loop={true}>
                <img src={img1} alt='image 1' className='h-full w-full object-cover' />
                <img src={img2} alt='image 2' className='h-full w-full object-cover'/>
                <img src={img3} alt='image 3' className='h-full w-full object-cover' />
                <img src={img4} alt='image 4' className='h-full w-full object-cover' />
            </Carousel>



        </>
    )
}

export default Carousuel