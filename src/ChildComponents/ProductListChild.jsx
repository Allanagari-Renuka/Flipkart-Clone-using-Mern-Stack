import React from "react";
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import Dress from "../images/Wear/Dress.webp";
import Saree from "../images/Wear/Saree.webp";
import Jeans from "../images/Wear/Jeans.webp";
import Shirts from "../images/Wear/Shirts.webp";
import Pants from "../images/Wear/Pants.webp";
import Pants1 from "../images/Wear/Pants1.webp";
import Shirts1 from "../images/Wear/Shirts1.webp";
import Shoes from "../images/Wear/Shoes.webp";
import Shoes1 from "../images/Wear/Shoes1.webp";
import Tshirts from "../images/Wear/Tshirts.webp";

// Map product names to their respective image imports
const imageMap = {
    Dress, Saree, Shirts, Pants, Pants1, Shirts1, Shoes, Shoes1, Tshirts,Jeans
};

const ProductListChild = ({ name, gendercat }) => {
    const navigate = useNavigate();
    return (
        <div>
            <Card className="w-50 h-80 cursor-pointer" onClick={() => navigate(`/category/${gendercat}/${name}`)}>
                <CardHeader floated={false} className="h-80">
                    <img src={imageMap[name] || Tshirts} alt={name} className="w-full h-full object-cover" />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        {name}
                    </Typography>
                </CardBody>
            </Card>
        </div>
    );
};

export default ProductListChild;
