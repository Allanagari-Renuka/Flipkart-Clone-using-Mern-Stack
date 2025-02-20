import React from "react";
import Kilos from '../images/brandsCards/Kilos.webp';
import Appliances from '../images/brandsCards/Appliances.webp';
import Beauty from '../images/brandsCards/Beauty.webp';
import Electronics from '../images/brandsCards/Electronics.webp';
import Fashion from '../images/brandsCards/Fashion.webp'
import Home from '../images/brandsCards/Home.webp';
import Two from '../images/brandsCards/Two.webp';
import Mobiles from '../images/brandsCards/Mobiles.webp';


const brands = [
    { name: "Kilos", image: Kilos },
    { name: "Appliances", image: Appliances },
    { name: "Mobiles", image: Mobiles },
    { name: "Beauty", image: Beauty },
    { name: "Electronics", image: Electronics },
    { name: "Fashion", image: Fashion },
    { name: "Home", image: Home },
    { name: "Two wheelers", image: Two },
];

export function Brand(props) {
    // console.log(pro)
    return (

        <div className="flex justify-around items-center">
        {brands.map((brand, index) => (
        <div key={index} className="flex flex-col items-center">
          <img src={brand.image} alt={brand.name} className="w-24 h-24 object-cover rounded-md " />
          <p className="text-sm font-semibold mt-2">{brand.name}</p>
        </div>
        ))}
        </div>

    );
}

export default Brand;