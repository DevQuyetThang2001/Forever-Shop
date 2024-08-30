import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl py-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          src={assets.contact_img}
          className="w-full md:max-w-[480px]"
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
            <p className="font-semibold text-xl text-gray-600">Our Store</p>
            <p className="font-semibold text-xl text-gray-500">Vinh, <br/> Nghe An</p>
            <p className="text-gray-500">0212-1212-31791 <br/> Email: admin@forever.com </p>
            <p className="font-semibold text-xl text-gray-600">Our Store</p>
            <p className="font-semibold text-xl text-gray-600">Careers at Forever</p>
            <p className="text-gray-600">Learn more about our terms and job openings</p>

            <button className="bg-transparent  text-gray-700 border border-gray-600 hover:bg-black hover:text-white px-8 py-2 font-light transition-all duration-500">Explore Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
