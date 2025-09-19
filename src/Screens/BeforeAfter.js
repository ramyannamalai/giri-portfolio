import { useState } from "react";
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50); // middle by default

  return (
    <section className="bg-black text-white py-16 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-8">
        Before <span className="text-purple-500">&</span> After
      </h2>

      <div className="relative w-full max-w-4xl h-[400px] overflow-hidden rounded-xl shadow-lg">
        {/* Before Image */}
        <img
          src={img1}
          alt="Before"
          className="absolute top-0 left-0 w-full h-full object-cover "
        />

        {/* After Image (clipped) */}
        <img
          src={img2}
          alt="After"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        />

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-purple-500 cursor-col-resize"
          style={{ left: `${sliderPos}%` }}
          draggable="false"
          onMouseDown={(e) => {
            const move = (ev) => {
              let newPos = ((ev.clientX - e.target.parentNode.getBoundingClientRect().left) /
                e.target.parentNode.offsetWidth) * 100;
              if (newPos < 0) newPos = 0;
              if (newPos > 100) newPos = 100;
              setSliderPos(newPos);
            };
            const up = () => {
              window.removeEventListener("mousemove", move);
              window.removeEventListener("mouseup", up);
            };
            window.addEventListener("mousemove", move);
            window.addEventListener("mouseup", up);
          }}
        >
          {/* Circle Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-3 w-6 h-6 rounded-full bg-purple-500 border-2 border-white"></div>
        </div>
      </div>

      <p className="mt-6 text-gray-400">Slide to see the difference</p>
    </section>
  );
}
