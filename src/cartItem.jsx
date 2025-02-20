import React, { useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

function CartItem() {
    const [quantity, setQuantity] = useState(1)

    const removeQuantity = ()=>{
        if(quantity>1)
            setQuantity(quantity-1)
    }
    const addQuantity = ()=>{
        if(quantity<10)
            setQuantity(quantity+1)
    }
    return ( 
        <div className='flex justify-between shadow-xl shadow-gray-300 m-5 p-3 items-center'>
            <div className='m-2 shadow-2xl cursor-pointer rounded-lg h-50'><img className=' rounded-lg h-50 w-100 ' src="Images\speaker.webp" alt="speaker Image" /></div>
            <div className='m-5 w-250'>
                <h1 className='text-2xl'>FITRIC M3 (PORTABLE BLUETOOTH MINI SPEAKER) Dynamic Metal Sound With High Bass with Google, Alexa & Siri Assistant Smart Speaker  (Multicolor)</h1>
                <div className='flex my-5 items-center'>
                    <h1 className='text-2xl font-bold'> ₹299 </h1> 
                    <h1 className='ml-5 text-green-700 font-medium'>70% Off 1 offer available</h1>
                </div>
                <div className='flex h-8'>
                    <button className='w-7 border rounded-lg text-sm mr-3 cursor-pointer' onClick={removeQuantity}><RemoveIcon/></button>
                    <div className='mr-3 border w-8 rounded text-center text-lg'><h1>{quantity}</h1></div>
                    <button className='w-7 border rounded-lg text-sm cursor-pointer' onClick={addQuantity}><AddIcon/></button>
                    <button className='mx-10 h-8 w-25 border rounded-lg text-blod cursor-pointer'><DeleteIcon/> Remove</button>
                </div>
            </div>
        </div>
     );
}   

export default CartItem;