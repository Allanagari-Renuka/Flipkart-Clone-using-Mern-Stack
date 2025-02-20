import React, { useState,useEffect } from 'react';
import axios from 'axios';
import CartItem from './cartItem.jsx';
import PriceDetails from './priceDetails.jsx';
import Placeorder from './placeorder.jsx';

function Cart () {
    
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async()=>{
            try{
                const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
                setData(response.data)
            }
            catch(err){
                console.log("Error occured",err)
            }
        }
        fetchData()
    }, []);
    
    return ( 
        <>
        <div className='flex  mx-30 my-5'>
            <div className='mr-10 w-220 pb-5 bg-white'>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <Placeorder />

            </div>
            {/* <div className='bg-white'> */}
                <PriceDetails/>
            {/* </div> */}
        </div>
        
        </>
     );
}

export default Cart;