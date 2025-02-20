import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import mobile from "../images/electronics/mobile.webp";
import laptop from "../images/electronics/laptop.webp";
import pc from "../images/electronics/pc.webp";
import headset from "../images/electronics/headset.webp";
import head from "../images/electronics/head.webp";
import home from "../images/electronics/home.webp";

import jeans from "../images/clothes/jeans.webp";
import kid from "../images/clothes/kid.webp";
import kids from "../images/clothes/kids.webp";
import lehenga from "../images/clothes/lehenga.webp";
import kurti from "../images/clothes/kurti.webp";
import shirt from "../images/clothes/shirt.webp";

const Electronics = () => {
  const electric = [
    {
      category: "Electronics",
      sub_category: "Mobile Phones",
      title: "Smartphone",
      description: "Latest model smartphone with great features",
      price: 1000,
      rating: {
        rate: 4.8,
        count: 500,
      },
      image: mobile,
    },
    {
      category: "Electronics",
      sub_category: "Laptops",
      title: "Laptop",
      description: "High performance laptop for gaming and work",
      price: 500, 
      rating: {
        rate: 4.3,
        count: 300,
      },
      image: laptop,
    },
    {
      category: "Electronics",
      sub_category: "Desktop PC's",
      title: "Desktop PC",
      description: "High performance Desktop PC for gaming and work",
      price: 1200,
      rating: {
        rate: 4.9,
        count: 150,
      },
      image: pc,
    },
    {
      category: "Electronics",
      sub_category: "Earphones",
      title: "Earphone",
      description: "Noise-cancelling wireless earphones",
      price: 200,
      rating: {
        rate: 4.7,
        count: 400,
      },
      image: head,
    },
    {
      category: "Electronics",
      sub_category: "Hometheatre",
      title: "home",
      description: "perfect music  to vibe",
      price: 200,
      rating: {
        rate: 4.7,
        count: 400,
      },
      image: home,
    },
    {
      category: "Electronics",
      sub_category: "Headphones",
      title: "Wireless Headphones",
      description: "Noise-cancelling wireless headphones",
      price: 200,
      rating: {
        rate: 4.7,
        count: 400,
      },
      image: headset,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-6 cursor-pointer">
      <h2 className="text-2xl font-bold mb-6">Best of Electronics</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {electric.map((item, index) => (
          <Card key={index} className="w-full md:w-1/4 min-w-[200px] hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 mb-4">
                  <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">{item.sub_category}</p>
                  <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                  <p className="font-bold text-lg mb-2">₹{item.price}</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm">{item.rating.rate}</span>
                    <span className="text-sm text-gray-500">({item.rating.count})</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Clothes Section */}
      <Clothes />
    </div>
  );
};

const Clothes = () => {
  const cloth = [
    {
      category: "Clothes",
      sub_category: "Men's Wear",
      title: "Jeans",
      description: "This is jeans",
      price: 200,
      rating: {
        rate: 4.5,
        count: 200,
      },
      image: jeans,
    },
    {
      category: "Clothes",
      sub_category: "Men's Wear",
      title: "T-shirt",
      description: "This is a T-shirt",
      price: 150,
      rating: {
        rate: 4.2,
        count: 150,
      },
      image: shirt,
    },
    {
      category: "Clothes",
      sub_category: "Women's Wear",
      title: "Kurti",
      description: "This is a stylish dress",
      price: 300,
      rating: {
        rate: 4.7,
        count: 220,
      },
      image: kurti,
    },
    {
      category: "Clothes",
      sub_category: "Women's Wear",
      title: "Lehenga",
      description: "This is a casual lehenga",
      price: 120,
      rating: {
        rate: 4.0,
        count: 180,
      },
      image: lehenga,
    },
    {
      category: "Clothes",
      sub_category: "Kid's Wear",
      title: "Boys",
      description: "This is ethnic wear for boys",
      price: 450,
      rating: {
        rate: 4.6,
        count: 100,
      },
      image: kids,
    },
    {
      category: "Clothes",
      sub_category: "Kid's Wear",
      title: "Girls",
      description: "This is ethnic wear for girls",
      price: 450,
      rating: {
        rate: 4.6,
        count: 100,
      },
      image: kid,
    },
  ];

  return (
    <div className="mt-10">
      {/* Clothes Section */}
      <h2 className="text-2xl font-bold mb-6">Best of Clothes</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {cloth.map((item, index) => (
          <Card key={index} className="w-full md:w-1/4 min-w-[200px] hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 mb-4">
                  <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">{item.sub_category}</p>
                  <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                  <p className="font-bold text-lg mb-2">₹{item.price}</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm">{item.rating.rate}</span>
                    <span className="text-sm text-gray-500">({item.rating.count})</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Electronics;
