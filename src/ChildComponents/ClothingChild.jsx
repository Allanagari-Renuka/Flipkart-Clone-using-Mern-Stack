import React from 'react';
import { useNavigate } from 'react-router-dom';

const ClothingChild = ({ name, image}) => {
    const navigate=useNavigate();
    return (
        <div className='shadow-amber-500 hover:shadow-2xl hover:scale-110 cursor-pointer '>
            <button onClick={() => navigate(`/category/${name}`) }>
                <img
                    className='w-40 h-40 object-cover rounded-md justify-around'
                    src={image} 
                    alt={`${name} section`}
                />
            </button>
            <h3 className="mt-2 text-lg font-semibold">{name} Category</h3>
        </div>
    );
}

export default ClothingChild;
