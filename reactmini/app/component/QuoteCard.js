"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function QuoteCard() {
  const [quoteData, setQuoteData] = useState(null);
  const [ranNum, setRanNum] = useState(1);
  const apikey = "D6i8JRZuql3loEMSFyPnQU5RbZ8ldFBoBBmqSpCQ";
  useEffect(() => {
    fetch(`https://api.api-ninjas.com/v1/quotes?category=`, {
      headers: {
        "X-API-Key": apikey,
        // Add other headers if required by the API
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setQuoteData(data);
        console.log(data);
      });
  }, [ranNum]);

  function handleClick() {
    setRanNum((prev) => prev + 1);
  }
  let quote;
  

  return (
    <>
      {quoteData && (
        <motion.div
          className="quoteCard mx-auto my-10 w-[900px] max-h-fit text-black flex flex-col relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0}}
          transition={{ duration: 1, ease: "easeOut"}}
        >
          <motion.h2 className=" text-[40px] px-8 py-10">
            {(`"${quoteData.map((post) => post.quote)}"`).split('').map((char, i)=>(
                <motion.span initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 0.5, delay: i * 0.05}}>{char}</motion.span>
            ))}
          </motion.h2>
          <motion.h2 className=" text-[20px] px-8 py-10">
            -{quoteData.map((post) => post.author)}
          </motion.h2>
          <button
            onClick={handleClick}
            className="bg-[#ffc2f7] font-mono border border-black rounded-lg absolute bottom-8 right-8 px-2 py-1 font-bold text-black active:scale-90"
          >
            Get New Quote
          </button>
        </motion.div>
      )}
    </>
  );
}

export default QuoteCard;
