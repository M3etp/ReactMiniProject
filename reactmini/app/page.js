'use client'

import React, { useEffect, useState } from "react";

function Home() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("AUD");
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/convertcurrency?want=${fromCurrency}&have=${toCurrency}&amount=${amount}`,
          {
            method: "GET",
            headers: {
              "X-Api-Key": "D6i8JRZuql3loEMSFyPnQU5RbZ8ldFBoBBmqSpCQ",
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setConvertedAmount(result);
        console.log(result);
        setConvertedAmount(result.new_amount)
      } catch (error) {
        console.error("Error fetching conversion data:", error);
      }
    };

    fetchData();
  }, [amount, fromCurrency, toCurrency]);

  return (
    <>
      <nav className="w-full h-[60px] bg-blue-400">

      </nav>
      <div className="flex justify-center items-center h-[70%]">
        <div className=" bg-neutral-200 rounded-lg h-fit w-[900px] px-10 py-10 mt-10 flex flex-col justify-center">
          <div className="mb-4 self-center">
          <label htmlFor="amount" className="mr-10">Enter your Amount:</label>
          <input className="w-[250px] py-1" id="amount"
          type="number" placeholder="Enter Your Amount" onChange={(e)=>setAmount(e.target.value)} value={amount}/>
          </div>
          <div className="mb-4 self-center">
          <label htmlFor="current" className="mr-10">Enter your Currency:</label>
          <input className="w-[250px] py-1" id="current"
          type="text" onChange={(e)=>setFromCurrency(e.target.value)} value={fromCurrency}/>
          </div>
          <div className="mb-4 self-center">
          <label htmlFor="converted" className="mr-10">Enter Currency To Convert:</label>
          <input className="w-[250px] py-1" id="converted"
          type="text" onChange={(e)=>setToCurrency(e.target.value)} value={toCurrency}/>
          </div>
          <div className="mb-4 self-center">
          <label htmlFor="finalamount" className="mr-10">Converted Amount:</label>
          <span className="w-[250px] py-1 underline font-bold text-lg" id="finalamount">{convertedAmount}</span>
          </div>

        </div>
        
      </div>
      
    </>
  );
}

export default Home;


// {
//   "new_amount": 1.09,
//   "new_currency": "USD",
//   "old_currency": "EUR",
//   "old_amount": 1
// }