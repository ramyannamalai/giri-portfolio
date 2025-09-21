import React from "react";
import heroImg from "../assets/her.png"; // 👉 replace with your image
import { FaPlay } from "react-icons/fa";
import b1 from "../assets/ban1.png";
import b2 from "../assets/ban2.png";

const Banner = () => {
  return (
    <section className="bg-[#0F1416] text-white h-full pt-40 flex items-center justify-center px-6 md:px-16 bg-cover bg-center bg-no-repeat">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center max-w-7xl w-full">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <p className="uppercase text-sm tracking-widest text-white text-gray-400">
            Girieswaran
          </p>
          {/* Gradient underline */}
<div className="mt-4 mb-4 w-24 h-[2px] bg-gradient-to-r from-red-500 via-green-500 to-purple-500 rounded-full mx-auto md:mx-0"></div>

         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px] font-exo font-bold leading-tight mt-0">
  PROFESSIONAL <br />
  <span className="text-purple-500 font-exo"> VIDEO </span>EDITOR
</h1>

          <p className="font-exo  mt-4 font-white">
            Making Your Videos Look More Cool.
          </p>
          <a href="tel:+919123506136">
            <button className="mt-6 px-14 py-3 bg-purple-600 text-white font-exo font-bold rounded-md shadow-lg hover:bg-purple-700 transition-all">
              LETS TALK
            </button>
          </a>
        </div>

        {/* Right Content (Image with effects) */}
        <div className="relative flex justify-center">
          {/* Lightning background effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96 bg-purple-600 rounded-full blur-3xl opacity-20"></div>
          </div>

          {/* Main Image */}
          <img
            src={heroImg}
            alt="Video Editor"
            className="relative z-10 w-72 md:w-[450px] object-contain"
          />

          {/* Floating Adobe icons */}
          <img
            src={b1} // Adobe Premiere icon
            alt="Premiere Pro"
            className="absolute top-16 left-3 w-14 md:w-32 animate-pulse"
          />
          <img
            src={b2} // Adobe After Effects icon
            alt="After Effects"
            className="absolute bottom-14 md:right-10 right-2 w-14 md:w-28 animate-pulse"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
