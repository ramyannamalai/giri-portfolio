import Slider from "react-slick";
import logo1 from "../assets/1.png";
import logo2 from "../assets/2.png";
import logo3 from "../assets/3.png";
import logo4 from "../assets/4.png";
import logo5 from "../assets/5.png";
import logo6 from "../assets/6.png";
import logo7 from "../assets/7.png";
import logo8 from "../assets/8.png";
import logo9 from "../assets/9.png";
import logo10 from "../assets/10.png";

export default function OurClients() {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
  ];

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 6, // default desktop
  slidesToScroll: 1,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 4 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 600, // ✅ mobiles and smaller
      settings: { slidesToShow: 2, slidesToScroll: 1 },
    },
  ],
};


  return (
    <section className="bg-black py-10 md:py-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide font-exo">
          Our Clients
        </h2>
        <div className="w-40 h-1 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 mx-auto mt-2"></div>
      </div>

      <Slider {...settings}>
        {logos.map((logo, idx) => (
          <div key={idx} className="px-3 flex justify-center"> 
            {/* ✅ added px-3 (gap between logos) */}
            <img
              src={logo}
              alt={`Logo ${idx + 1}`}
              className="h-20 w-auto rounded-xl object-contain transition focus:outline-none focus:ring-0"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
