import { useState } from "react";

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
import insta92 from "../assets/insta92.jpeg";
import insta93 from "../assets/insta93.jpeg";

// ✅ Works array
const works = [
  // Reels
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
    title: "Promo Reel",
    img: insta4,
    link: "https://www.instagram.com/reel/DOqZOLZj7Sp/?igsh=MXYwd2gxYXBhb25jag==",
  },

  {
    id: 3,
    category: "Reels",
    subCategory: "Promotion",
    title: "Promo Reel",
    img: insta5,
    link: "https://www.instagram.com/reel/DN-qL1Sk7GP/?igsh=emQwZDU1OTVocWgz",
  },

  {
    id: 4,
    category: "Reels",
    subCategory: "Promotion",
    title: "Promo Reel",
    img: insta6,
    link: "https://www.instagram.com/reel/DN5T8mEEfkn/?igsh=MXd6MTNsN3NnenFyaQ==",
  },

  {
    id: 5,
    category: "Reels",
    subCategory: "Promotion",
    title: "Promo Reel",
    img: insta7,
    link: "https://www.instagram.com/reel/DOGX1PNjx97/?igsh=MWdteWxzaWhmcmNycQ==",
  },

  {
    id: 6,
    category: "Reels",
    subCategory: "Promotion",
    title: "Promo Reel",
    img: insta8,
    link: "https://www.instagram.com/reel/DOGpOxCkg9n/?igsh=cjJzZm9rODI2bTE2",
  },

  {
    id: 7,
    category: "Reels",
    subCategory: "Promotion",
    title: "Promo Reel",
    img: insta91,
    link: "https://www.instagram.com/reel/DTdldtNk92y/?igsh=bGZwM3ozNjUyZmt3",
  },

  {
    id: 8,
    category: "Reels",
    subCategory: "Promotion",
    title: "Promo Reel",
    img: insta92,
    link: "https://www.instagram.com/reel/DTVRHSqgSaO/?igsh=MWVrMDFhZ2Q5Ymh2YQ%3D%3D",
  },

  {
    id: 9,
    category: "Reels",
    subCategory: "Promotion",
    title: "Promo Reel",
    img: insta93,
    link: "https://www.instagram.com/reel/DTRy3pOgXVP/?igsh=MW9zZ3U1ODRjc2dtbg%3D%3D",
  },

  {
    id: 10,
    category: "Reels",
    subCategory: "Storytelling",
    title: "Storytelling Reel",
    img: insta3,
    link: "https://www.instagram.com/reel/DNbFuKIotrc/?igsh=MWJoZTN4YjBnZHZxaQ==",
  },

  {
    id: 11,
    category: "Reels",
    subCategory: "Storytelling",
    title: "Storytelling Reel",
    img: insta2,
    link: "https://www.instagram.com/reel/DOtBJvPk7C9/?igsh=M2ZrcGNvaG10amVw",
  },

  {
    id: 12,
    category: "Reels",
    subCategory: "Storytelling",
    title: "Storytelling Reel",
    img: insta9,
    link: "https://youtube.com/shorts/2lk0G8eo6m0?si=unZvMzetFuiafGQX",
  },

  {
    id: 13,
    category: "Reels",
    subCategory: "Storytelling",
    title: "Storytelling Reel",
    img: insta10,
    link: "https://youtube.com/shorts/T5caeSFEl8I?si=SBhneBZIuFg9m_-M",
  },

  {
    id: 14,
    category: "Reels",
    subCategory: "Storytelling",
    title: "Storytelling Reel",
    img: insta11,
    link: "https://youtube.com/shorts/Vm_dvjn01U8?si=7vMUWpXhAl_k-79r",
  },

  // Long Videos
  {
    id: 15,
    category: "Long Videos",
    title: "Interview",
    img: longv1,
    link: "https://youtu.be/zLIbVYYEm_4?si=sL_w-ufVRmO4NxAR",
  },

  {
    id: 16,
    category: "Long Videos",
    title: "Travel Vlog Part-1",
    img: longv2,
    link: "https://youtu.be/U1F5LoXZBgE?si=JtM1w8oj8-fFUw5A",
  },

  {
    id: 17,
    category: "Long Videos",
    title: "Travel Vlog Part-2",
    img: longv3,
    link: "https://youtu.be/eKVDuULwI3I?si=4Tq2gwmDV_KugA7b",
  },

  {
    id: 18,
    category: "Long Videos",
    title: "Hills Vlog",
    img: longv4,
    link: "https://youtu.be/glLwS4gfELU?si=w7xcNHts8a_1Q9ry",
  },

  {
    id: 19,
    category: "Long Videos",
    title: "Comedy",
    img: longv5,
    link: "https://youtu.be/klFmoEHtEqs?si=O5i2GA_YSnrhzk-q",
  },

  {
    id: 20,
    category: "Long Videos",
    title: "Information",
    img: longv6,
    link: "https://youtu.be/VjHDS1DG6x8?si=dpcqpqCLgJDLyxTg",
  },

  {
    id: 21,
    category: "Long Videos",
    title: "Information",
    img: longv7,
    link: "https://youtu.be/BvmqRMxFBzY?si=MIMc0nmTsssdgebk",
  },

  // Logo Design
  {
    id: 22,
    category: "Logo Design",
    title: "Aqua & Pets",
    img: logo1,
  },

  {
    id: 23,
    category: "Logo Design",
    title: "Institute",
    img: logo2,
  },

  {
    id: 24,
    category: "Logo Design",
    title: "Travel",
    img: logo3,
  },
];

// ✅ Sub-tabs for reels
const reelSubTabs = [
  "Promotion",
  "Storytelling",
  "Before & After",
];

export default function MyWork() {
  // Default active tab
  const [activeTab, setActiveTab] = useState("Long Videos");
  const [activeSubTab, setActiveSubTab] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;

  // ✅ Filtering
  const filteredWorks =
    activeTab === "Reels"
      ? works.filter(
          (work) =>
            work.category === "Reels" &&
            work.subCategory === activeSubTab
        )
      : works.filter(
          (work) => work.category === activeTab
        );

  // Pagination
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;

  const currentWorks = filteredWorks.slice(
    indexOfFirst,
    indexOfLast
  );

  const totalPages = Math.ceil(
    filteredWorks.length / itemsPerPage
  );

  // ✅ Image size
  const getImageSize = (category) => {
    if (category === "Long Videos") {
      return "h-48";
    }

    if (category === "Logo Design") {
      return "h-48 p-6 bg-white object-contain";
    }

    if (category === "Reels") {
      return "h-[520px] object-contain";
    }

    return "h-48";
  };

  return (
    <section className="bg-[#0F1416] text-white py-16 px-6 md:px-16">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide font-exo">
          My Works
        </h2>

        <div className="w-40 h-1 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 mx-auto mt-2"></div>
      </div>

      {/* Main Tabs */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap font-exo">
        {["Long Videos", "Reels", "Logo Design"].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setCurrentPage(1);

                if (tab === "Reels") {
                  setActiveSubTab("Promotion");
                } else {
                  setActiveSubTab("");
                }
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeTab === tab
                  ? "bg-gradient-to-r from-red-500 to-purple-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              {tab}
            </button>
          )
        )}
      </div>

      {/* Reel Sub Tabs */}
      {activeTab === "Reels" && (
        <div className="flex justify-center gap-4 mb-10 flex-wrap font-exo">
          {reelSubTabs.map((subTab) => (
            <button
              key={subTab}
              onClick={() => {
                setActiveSubTab(subTab);
                setCurrentPage(1);
              }}
              className={`px-4 py-1 rounded-full text-sm font-medium transition ${
                activeSubTab === subTab
                  ? "bg-gradient-to-r from-pink-500 to-yellow-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {subTab}
            </button>
          ))}
        </div>
      )}

      {/* Works Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-exo">
        {currentWorks.map((work) => (
          <a
            key={work.id}
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 border border-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition block"
          >
            <img
              src={work.img}
              alt={work.title}
              className={`w-full object-cover ${getImageSize(
                work.category
              )}`}
            />

            <div className="p-4">
              {/* Hide title for reels */}
              {work.category !== "Reels" && (
                <>
                  <h3 className="text-lg font-semibold">
                    {work.title}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {work.category}
                  </p>
                </>
              )}
            </div>
          </a>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 gap-3">
          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.max(prev - 1, 1)
              )
            }
            disabled={currentPage === 1}
            className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() =>
                setCurrentPage(index + 1)
              }
              className={`px-3 py-1 rounded-full ${
                currentPage === index + 1
                  ? "bg-gradient-to-r from-red-500 to-purple-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(prev + 1, totalPages)
              )
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}