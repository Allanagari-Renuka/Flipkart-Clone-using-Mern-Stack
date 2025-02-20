import React, { useState } from "react";

const BuyNow = () => {
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handlePayment = () => {
    alert(`Order placed using ${paymentMethod}`);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <label className="block mb-2">Address</label>
      <input
        type="text"
        className="w-full p-2 border rounded mb-4"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter your address"
      />

      <label className="block mb-2">Phone Number</label>
      <input
        type="text"
        className="w-full p-2 border rounded mb-4"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter your phone number"
      />

      <label className="block mb-2">Payment Method</label>
      <select
        className="w-full p-2 border rounded mb-4"
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      >
        <option value="COD">Cash on Delivery</option>
        <option value="UPI">UPI</option>
        <option value="Credit/Debit Card">Credit/Debit Card</option>
      </select>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        onClick={handlePayment}
      >
        Place Order
      </button>
    </div>
  );
};

export default BuyNow;
