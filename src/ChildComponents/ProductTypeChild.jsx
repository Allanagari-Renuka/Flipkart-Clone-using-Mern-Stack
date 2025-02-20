import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductTypeChild = ({ details, index }) => {
  const navigate = useNavigate();
  const { title, childtitle } = useParams();

  return (
    <div 
      className="shadow-sm cursor-pointer p-4 border rounded-lg" 
      onClick={() => navigate(`/category/${title}/${childtitle}/${index}`)}
    >
      <img className="w-60 h-60 rounded-lg" src={details.image} alt={details.tshirtName} />
      <h2 className="m-1 font-bold text-gray-500">{details.tshirtOrg}</h2>
      <p className="w-70 text-sm">{details.tshirtName}</p>
      <div className="flex gap-4 text-center mt-2">
        <span className="font-medium text-lg">₹{details.sp}</span>
        <span className="line-through text-gray-500">₹{details.cp}</span>
        <span className="text-green-500 font-medium">{details.dis}% off</span>
      </div>
    </div>
  );
};

export default ProductTypeChild;
