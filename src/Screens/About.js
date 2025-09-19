import React from "react";

export default function About() {
  return (
    <div className="bg-black text-white py-20 px-6 text-center font-exo md:py-48">
      {/* Title */}
      <h2 className="text-4xl md:text-[60px] font-bold uppercase tracking-wide">
        About Me
      </h2>

      {/* Gradient underline */}
      <div className="mt-4 mb-10 mx-auto w-40 h-1 bg-gradient-to-r from-red-500 via-green-500 to-purple-500 rounded-full"></div>

      {/* Description */}
      <p className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-300">
        I’m a passionate Video Content Creator with 1.2 years of experience in crafting engaging stories through visuals. With creativity, detail, and a lov
        e for storytelling, I transform raw footage into powerful, memorable content
      </p>

      {/* Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16 px-6">
        <div className="flex items-center justify-center space-x-2">
          <span className="text-xl  font-semibold">Long Video</span>
          <span className="w-3 h-3 bg-gradient-to-r from-yellow-400 via-green-400 to-red-500 rounded-full"></span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <span className="text-xl font-semibold">Reels Editing</span>
          <span className="w-3 h-3 bg-gradient-to-r from-yellow-400 via-green-400 to-red-500 rounded-full"></span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <span className="text-xl font-semibold">Logo Animation</span>
          <span className="w-3 h-3 bg-gradient-to-r from-yellow-400 via-green-400 to-red-500 rounded-full"></span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <span className="text-xl font-semibold">Podcast Edit</span>
          <span className="w-3 h-3 bg-gradient-to-r from-yellow-400 via-green-400 to-red-500 rounded-full"></span>
        </div>
      </div>
    </div>
  );
}
