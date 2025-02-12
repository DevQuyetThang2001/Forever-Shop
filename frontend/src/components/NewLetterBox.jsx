// eslint-disable-next-line no-unused-vars
import React from "react";

const NewLetterBox = () => {
    const onSubmitHandle = (e) => {
        e.preventDefault();
        
    }
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subcribes now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
      <form onSubmit={onSubmitHandle} className="flex w-full sm:w-1/2 items-center gap-3 mx-auto my-6 border pl-3">
        <input className="w-full sm:flex-1 outline-none" type="email" placeholder="Enter your email" required/>
        <button type="submit" className="bg-black text-white text-xs px-10 py-4">SUBCRIBES</button>
      </form>
    </div>
  );
};

export default NewLetterBox;
