// import React from "react";
// import Electronics from "../Products/Electronics";

// function Product(){
//     return (
//         <div>
//             <Electronics />
//         </div>
//     )
// }
// export default Product;












// import dotenv from "dotenv";
// import React from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';

// dotenv.config();
// const BASE_URL = process.env.BASE_URL;
// export const products = [
//   {
//     category: "Clothes",
//     sub_category: "Men's Wear",
//     title: "Jeans",
//     description: "this is jeans",
//     price: 200,
//     rating: {
//       rate: 4.5,
//       count: 200,
//     },
//     image: `${BASE_URL}/images/jeans.jpg`,
//   },
//   {
//     category: "Clothes",
//     sub_category: "Men's Wear",
//     title: "T-shirt",
//     description: "this is a T-shirt",
//     price: 150,
//     rating: {
//       rate: 4.2,
//       count: 150,
//     },
//     image: `${BASE_URL}/images/jeans.jpg`,
//   },
//   {
//     category: "Clothes",
//     sub_category: "Women's Wear",
//     title: "Dress",
//     description: "this is a stylish dress",
//     price: 300,
//     rating: {
//       rate: 4.7,
//       count: 220,
//     },
//     image: `${BASE_URL}/images/jeans.jpg`,
//   },
//   {
//     category: "Clothes",
//     sub_category: "Women's Wear",
//     title: "Blouse",
//     description: "this is a casual blouse",
//     price: 120,
//     rating: {
//       rate: 4.0,
//       count: 180,
//     },
//     image: `${BASE_URL}/images/jeans.jpg`,
//   },
//   {
//     category: "Clothes",
//     sub_category: "Men's Wear",
//     title: "Jacket",
//     description: "this is a winter jacket",
//     price: 450,
//     rating: {
//       rate: 4.6,
//       count: 100,
//     },
//     image: `${BASE_URL}/images/jeans.jpg`,
//   },
//   {
//     category: "Electronics",
//     sub_category: "Mobile Phones",
//     title: "Smartphone",
//     description: "latest model smartphone with great features",
//     price: 1000,
//     rating: {
//       rate: 4.8,
//       count: 500,
//     },
//     image: `${BASE_URL}/images/jeans.jpg`,
//   },
//   {
//     category: "Electronics",
//     sub_category: "Mobile Phones",
//     title: "Smartphone Case",
//     description: "durable smartphone case",
//     price: 50,
//     rating: {
//       rate: 4.3,
//       count: 300,
//     },
//     image: `${BASE_URL}/images/jeans.jpg`,
//   },
//   {
//     category: "Electronics",
//     sub_category: "Laptops",
//     title: "Laptop",
//     description: "high performance laptop for gaming and work",
//     price: 1200,
//     rating: {
//       rate: 4.9,
//       count: 150,
//     },
//     image: `${BASE_URL}/images/jeans.jpg`,
//   },
//   {
//     category: "Electronics",
//     sub_category: "Laptops",
//     title: "Laptop Sleeve",
//     description: "protective sleeve for laptops",
//     price: 30,
//     rating: {
//       rate: 4.1,
//       count: 80,
//     },
//     image: `${BASE_URL}/images/jeans.jpg`,
//   },
//   {
//     category: "Electronics",
//     sub_category: "Headphones",
//     title: "Wireless Headphones",
//     description: "noise-cancelling wireless headphones",
//     price: 200,
//     rating: {
//       rate: 4.7,
//       count: 400,
//     },
//     image: `${BASE_URL}/images/jeans.jpg`,
//   },
//   {
//     category: "Accessories",
//     sub_category: "Watches",
//     title: "Smart Watch",
//     description: "track your health and fitness with a smart watch",
//     price: 150,
//     rating: {
//       rate: 4.4,
//       count: 220,
//     },
//     image: `${BASE_URL}/images/jeans.jpg`,
//   },
//   {
//     category: "Accessories",
//     sub_category: "Jewelry",
//     title: "Necklace",
//     description: "beautiful gold necklace",
//     price: 300,
//     rating: {
//       rate: 4.9,
//       count: 130,
//     },
//     image: `${BASE_URL}/images/jeans.jpg`,
//   },
//   {
//     category: "Accessories",
//     sub_category: "Bags",
//     title: "Leather Handbag",
//     description: "premium leather handbag",
//     price: 250,
//     rating: {
//       rate: 4.6,
//       count: 90,
//     },
//     image: `${BASE_URL}/images/jeans.jpg`,
//   },
//   {
//     category: "Accessories",
//     sub_category: "Sunglasses",
//     title: "Sunglasses",
//     description: "stylish sunglasses for summer",
//     price: 80,
//     rating: {
//       rate: 4.3,
//       count: 350,
//     },
//     image: `${BASE_URL}/images/jeans.jpg`,
//   },
//   {
//     category: "Groceries",
//     sub_category: "Fruits",
//     title: "Apple",
//     description: "fresh and organic apples",
//     price: 5,
//     rating: {
//       rate: 4.8,
//       count: 200,
//     },
//     image: `${BASE_URL}/images/jeans.jpg`,
//   },
//   {
//     category: "Groceries",
//     sub_category: "Vegetables",
//     title: "Carrot",
//     description: "fresh carrots from local farm",
//     price: 2,
//     rating: {
//       rate: 4.6,
//       count: 180,
//     },
//     image: `${BASE_URL}/images/jeans.jpg`,
//   },
//   {
//     category: "Groceries",
//     sub_category: "Beverages",
//     title: "Orange Juice",
//     description: "freshly squeezed orange juice",
//     price: 4,
//     rating: {
//       rate: 4.7,
//       count: 300,
//     },
//     image: `${BASE_URL}/images/jeans.jpg`,
//   },
//   {
//     category: "Groceries",
//     sub_category: "Snacks",
//     title: "Chips",
//     description: "crispy potato chips",
//     price: 3,
//     rating: {
//       rate: 4.2,
//       count: 400,
//     },
//     image: `${BASE_URL}/images/jeans.jpg`,
//   },
//   {
//     category: "Groceries",
//     sub_category: "Beverages",
//     title: "Coffee",
//     description: "premium ground coffee",
//     price: 10,
//     rating: {
//       rate: 4.5,
//       count: 350,
//     },
//     image: `${BASE_URL}/images/jeans.jpg`,
//   },
//   {
//     category: "Groceries",
//     sub_category: "Fruits",
//     title: "Banana",
//     description: "fresh bananas",
//     price: 1,
//     rating: {
//       rate: 4.4,
//       count: 500,
//     },
//     image: `${BASE_URL}/images/jeans.jpg`,
//   },
// ];