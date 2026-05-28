import { useState } from "react";
import {
  Play,
  Film,
  Palette,
  ExternalLink,
} from "lucide-react";

// Images
import longv1 from "../assets/longv1.jpeg";
import longv2 from "../assets/longv2.jpeg";
import longv3 from "../assets/longv3.jpeg";
import longv4 from "../assets/longv4.jpeg";
import longv5 from "../assets/longv5.jpeg";
import longv6 from "../assets/longv6.jpeg";
import longv7 from "../assets/longv7.jpeg";

import logo1 from "../assets/4.png";
import logo2 from "../assets/3.png";
import logo3 from "../assets/logoc3.png";

import insta1 from "../assets/insta1.png";
import insta2 from "../assets/insta2.jpeg";
import insta3 from "../assets/insta3.jpeg";
import insta4 from "../assets/insta4.jpeg";
import insta5 from "../assets/insta5.jpeg";
import insta6 from "../assets/insta6.jpeg";
import insta7 from "../assets/insta7.png";
import insta8 from "../assets/insta8.png";
import insta9 from "../assets/insta9.jpeg";
import insta10 from "../assets/insta10.jpeg";
import insta11 from "../assets/insta11.jpeg";
import insta91 from "../assets/insta9.png";

// ================= DATA =================

const works = [
  // REELS
  {
    id: 1,
    category: "Reels",
    subCategory: "Before & After",
    img: insta1,
    link: "https://www.instagram.com/reel/DOV68c7kodE/?igsh=cGtjZWluY3ZicGdy",
  },

  {
    id: 2,
    category: "Reels",
    subCategory: "Promotion",
    img: insta4,
    link: "https://www.instagram.com/reel/DOqZOLZj7Sp/?igsh=MXYwd2gxYXBhb25jag==",
  },

  {
    id: 3,
    category: "Reels",
    subCategory: "Promotion",
    img: insta5,
    link: "https://www.instagram.com/reel/DN-qL1Sk7GP/?igsh=emQwZDU1OTVocWgz",
  },

  {
    id: 4,
    category: "Reels",
    subCategory: "Promotion",
    img: insta6,
    link: "https://www.instagram.com/reel/DN5T8mEEfkn/?igsh=MXd6MTNsN3NnenFyaQ==",
  },

  {
    id: 5,
    category: "Reels",
    subCategory: "Promotion",
    img: insta7,
    link: "https://www.instagram.com/reel/DOGX1PNjx97/?igsh=MWdteWxzaWhmcmNycQ==",
  },

  {
    id: 6,
    category: "Reels",
    subCategory: "Promotion",
    img: insta8,
    link: "https://www.instagram.com/reel/DOGpOxCkg9n/?igsh=cjJzZm9rODI2bTE2",
  },

  {
    id: 7,
    category: "Reels",
    subCategory: "Promotion",
    img: insta91,
    link: "https://www.instagram.com/reel/DTdldtNk92y/?igsh=bGZwM3ozNjUyZmt3",
  },

  {
    id: 8,
    category: "Reels",
    subCategory: "Storytelling",
    img: insta3,
    link: "https://www.instagram.com/reel/DNbFuKIotrc/?igsh=MWJoZTN4YjBnZHZxaQ==",
  },

  {
    id: 9,
    category: "Reels",
    subCategory: "Storytelling",
    img: insta2,
    link: "https://www.instagram.com/reel/DOtBJvPk7C9/?igsh=M2ZrcGNvaG10amVw",
  },

  {
    id: 10,
    category: "Reels",
    subCategory: "Storytelling",
    img: insta9,
    link: "https://youtube.com/shorts/2lk0G8eo6m0?si=unZvMzetFuiafGQX",
  },

  {
    id: 11,
    category: "Reels",
    subCategory: "Storytelling",
    img: insta10,
    link: "https://youtube.com/shorts/T5caeSFEl8I?si=SBhneBZIuFg9m_-M",
  },

  {
    id: 12,
    category: "Reels",
    subCategory: "Storytelling",
    img: insta11,
    link: "https://youtube.com/shorts/Vm_dvjn01U8?si=7vMUWpXhAl_k-79r",
  },

  // LONG VIDEOS
  {
    id: 13,
    category: "Long Videos",
    title: "Interview",
    img: longv1,
    link: "https://youtu.be/zLIbVYYEm_4?si=sL_w-ufVRmO4NxAR",
  },

  {
    id: 14,
    category: "Long Videos",
    title: "Travel Vlog Part-1",
    img: longv2,
    link: "https://youtu.be/U1F5LoXZBgE?si=JtM1w8oj8-fFUw5A",
  },

  {
    id: 15,
    category: "Long Videos",
    title: "Travel Vlog Part-2",
    img: longv3,
    link: "https://youtu.be/eKVDuULwI3I?si=4Tq2gwmDV_KugA7b",
  },

  {
    id: 16,
    category: "Long Videos",
    title: "Hills Vlog",
    img: longv4,
    link: "https://youtu.be/glLwS4gfELU?si=w7xcNHts8a_1Q9ry",
  },

  {
    id: 17,
    category: "Long Videos",
    title: "Comedy",
    img: longv5,
    link: "https://youtu.be/klFmoEHtEqs?si=O5i2GA_YSnrhzk-q",
  },

  {
    id: 18,
    category: "Long Videos",
    title: "Information",
    img: longv6,
    link: "https://youtu.be/VjHDS1DG6x8?si=dpcqpqCLgJDLyxTg",
  },

  {
    id: 19,
    category: "Long Videos",
    title: "Information",
    img: longv7,
    link: "https://youtu.be/BvmqRMxFBzY?si=MIMc0nmTsssdgebk",
  },

  // LOGOS
  {
    id: 20,
    category: "Logo Design",
    title: "Aqua & Pets",
    img: logo1,
  },

  {
    id: 21,
    category: "Logo Design",
    title: "Institute",
    img: logo2,
  },

  {
    id: 22,
    category: "Logo Design",
    title: "Travel",
    img: logo3,
  },
];

const reelSubTabs = [
  "Promotion",
  "Storytelling",
  "Before & After",
];

export default function MyWork() {
  const [activeTab, setActiveTab] = useState("Reels");
  const [activeSubTab, setActiveSubTab] = useState("Promotion");

  // FILTER
  const filteredWorks =
    activeTab === "Reels"
      ? works.filter(
          (item) =>
            item.category === "Reels" &&
            item.subCategory === activeSubTab
        )
      : works.filter((item) => item.category === activeTab);

  // TAB STYLE
  const tabStyle = (tab) =>
    activeTab === tab
      ? "bg-white text-black"
      : "bg-[#1A1F22] text-gray-400 hover:text-white";

  return (
    <section className="bg-[#0B0F11] text-white py-20 px-5 md:px-14 overflow-hidden">
      {/* HEADING */}
      <div className="text-center mb-14">
        <p className="uppercase tracking-[5px] text-gray-400 text-sm mb-3">
          Portfolio Showcase
        </p>

        <h2 className="text-4xl md:text-6xl font-black font-exo">
          Latest Creative Works
        </h2>

        <div className="w-28 h-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mx-auto mt-5 rounded-full"></div>
      </div>

      {/* MAIN TABS */}
      <div className="flex justify-center gap-4 flex-wrap mb-10">
        <button
          onClick={() => {
            setActiveTab("Reels");
            setActiveSubTab("Promotion");
          }}
          className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${tabStyle(
            "Reels"
          )}`}
        >
          <Play size={18} />
          Reels
        </button>

        <button
          onClick={() => setActiveTab("Long Videos")}
          className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${tabStyle(
            "Long Videos"
          )}`}
        >
          <Film size={18} />
          Long Videos
        </button>

        <button
          onClick={() => setActiveTab("Logo Design")}
          className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${tabStyle(
            "Logo Design"
          )}`}
        >
          <Palette size={18} />
          Logo Design
        </button>
      </div>

      {/* REEL SUB TABS */}
      {activeTab === "Reels" && (
        <div className="flex justify-center gap-3 flex-wrap mb-14">
          {reelSubTabs.map((sub) => (
            <button
              key={sub}
              onClick={() => setActiveSubTab(sub)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                activeSubTab === sub
                  ? "bg-gradient-to-r from-pink-500 to-purple-600"
                  : "bg-[#1A1F22] text-gray-400 hover:text-white"
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      )}

      {/* WORK GRID */}
      <div
        className={`grid gap-8 ${
          activeTab === "Reels"
            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {filteredWorks.map((work) => (
          <a
            key={work.id}
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-3xl bg-[#13181B] border border-white/10 hover:border-pink-500/50 transition-all duration-500"
          >
            {/* IMAGE */}
            <div className="relative overflow-hidden">
              <img
                src={work.img}
                alt={work.title}
                className={`w-full transition-all duration-700 group-hover:scale-110 ${
                  work.category === "Reels"
                    ? "h-[500px] object-cover"
                    : work.category === "Logo Design"
                    ? "h-[260px] object-contain p-10 bg-white"
                    : "h-[280px] object-cover"
                }`}
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-500"></div>

              {/* ICON */}
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500">
                <ExternalLink size={18} />
              </div>
            </div>

            {/* CONTENT */}
            {work.category !== "Reels" && (
              <div className="p-5">
                <h3 className="text-xl font-bold mb-1">
                  {work.title}
                </h3>

                <p className="text-sm text-gray-400">
                  {work.category}
                </p>
              </div>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}