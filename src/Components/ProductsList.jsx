import React from 'react'
import { products } from '../data/branddata.js';
import { useNavigate, useParams } from 'react-router-dom';
import ProductListChild from '../ChildComponents/ProductListChild.jsx';

function ProductsList() {
    //const params = useParams();
    const {title}=useParams();
    const navigate=useNavigate();
    // console.log(title)
    // console.log(title)
    // console.log(products[title])
    return (
        <div className='grid grid-cols-3 gap-y-7 bg-amber-200 p-5'>
            {
                //products[title]?.map(item => <ProductListChild  key={item} name={item}  gendercat={title}/>)                
                products[title] &&
                    products[title].map((type) => (
                        <div key={type} onClick={() => navigate(`/category/${title}/${type}`)}>
                            <ProductListChild name={type} gendercat={title} />
                        </div>
                ))
            }            
        </div>
    );
}

export default ProductsList