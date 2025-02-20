
import React from "react"
import { BrowserRouter,Routes, Route } from "react-router-dom"
import Home from "./Components/Home.jsx";
import ProductsList from "./Components/ProductsList.jsx";
import Login from "./Components/Login.jsx";
import ClothingSection from "./Components/ClothingSection.jsx";
import ProductTypes from "./Components/ProductTypes.jsx";
import Signup from "./Components/Signup.jsx";
import './index.css';
import ClothingChild from "./ChildComponents/ClothingChild.jsx";
import ProductDetails from "./Components/ProductDetails.jsx";
import Cart from "./Components/Cart.jsx";

 
function App() {

    return(
        <div>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/signup' element={<Signup/>} />
                    <Route path="/" element={<ClothingSection />} />
                    <Route path="/category/:title" element={<ProductsList />} />
                    <Route path="/category/:title/:childtitle" element={<ProductTypes />} />
                    <Route path="/category/:title/:childtitle/:productId" element={<ProductDetails />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>

            

           
            
        </div>
    )


}

export default App
