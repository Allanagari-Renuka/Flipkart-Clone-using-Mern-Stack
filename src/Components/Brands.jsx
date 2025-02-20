
import React from 'react';
import { brandData } from '../data/branddata.js';
import Brand from './Brand.jsx';
//import '../Styles/brands.css';


export default function Brands(){

    return(
        <div className='mainBrands'>

            {/* {
                brandData.map(item=> <Brand name={item}/>)
            } */}
            <Brand/>

            {/* <h1 className="text-red-500">Hello Tailwind</h1> */}

        </div>
    );

}


