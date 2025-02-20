import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { clothing_section } from '../data/branddata'
import ClothingChild from '../ChildComponents/ClothingChild'
import Kids from '../images/category/Kids.webp';
import Men from '../images/category/Men.webp';
import Women from '../images/category/Women.webp';

// Define categories with names and images
const clothingCategories = [
    { name: "Men", image: Men },
    { name: "Women", image: Women },
    { name: "Kids", image: Kids}
];

function ClothingSection() {
  return (
    <div className="p-6">
      <h1 className='font-mono text-3xl mb-6 font-bold text-red-600 text-center'>Clothing</h1>
      
      {/* Container for all categories */}
      <div className='flex justify-around items-center gap-24'>
        {clothingCategories.map((category, index) => (
          <ClothingChild key={index} name={category.name} image={category.image} />
        ))}
      </div>
    </div>
  );
}

export default ClothingSection;
