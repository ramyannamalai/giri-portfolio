import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import React, { useState, useRef } from "react";
export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_x5xe9yj",
        "template_hfgreda",
        {
          from_name: form.name,
          to_name: "Girieswaran",
          from_email: form.email,
          to_email: "girieswarann@gmail.com",
          message: form.message,
        },
        "wJJvTXsLdhUAYaw-w"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="bg-black text-white px-6 md:px-16 py-16 relative font-exo">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-left">
        I AM READY TO CONSULT YOU
      </h2>

      {/* Gradient Line */}
      <div className="mt-4 mb-10 w-64 h-[2px]  bg-gradient-to-r from-red-500 via-green-500 to-purple-500"></div>

      {/* Contact Form */}
      <div className="flex flex-row md:flex-row justify-left items-left gap-4">
       <form
  ref={formRef}
  onSubmit={handleSubmit}
  className="mt-12 flex flex-col md:flex-row md:flex-wrap gap-8 w-full"
>
  {/* Name */}
  <label className="flex flex-col w-full md:w-1/3">
    <span className="text-white font-medium mb-2">Your Name</span>
    <input
      type="text"
      name="name"
      value={form.name}
      onChange={handleChange}
      placeholder="What's your good name?"
      className="bg-transparent border border-gray-600 px-4 py-3 w-full focus:outline-none"
    />
  </label>

  {/* Email */}
  <label className="flex flex-col w-full md:w-1/3">
    <span className="text-white font-medium mb-2">Your Email</span>
    <input
      type="email"
      name="email"
      value={form.email}
      onChange={handleChange}
      placeholder="What's your email?"
      className="bg-transparent border border-gray-600 px-4 py-3 w-full focus:outline-none"
    />
  </label>

  {/* Message */}
  <label className="flex flex-col w-full md:w-1/3">
    <span className="text-white font-medium mb-2">Your Message</span>
    <textarea
      rows={3}
      name="message"
      value={form.message}
      onChange={handleChange}
      placeholder="What you want to say?"
      className="bg-transparent border border-gray-600 px-4 py-3 w-full focus:outline-none resize-none"
    />
  </label>

  {/* Button */}
  <div className="flex w-full md:w-auto items-center justify-start md:justify-end">
    <button
      type="submit"
      className="bg-purple-600 hover:bg-purple-700 px-8 py-3 font-bold uppercase mt-4 md:mt-0"
    >
      {loading ? "Sending..." : "Send"}
    </button>
  </div>
</form>

      </div>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row justify-left items-left gap-8 mt-10 text-gray-300 text-lg">
         <a
    href="tel:+919123506136"
    className="flex items-center gap-2 hover:text-purple-400 transition cursor-pointer"
  >
    <FaPhoneAlt className="text-purple-500" />
    <span>+91 9123506136</span>
  </a>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-purple-500" />
          <span>Chennai, India</span>
        </div>
         <a
    href="mailto:girieswarann@gmail.com"
    className="flex items-center gap-2 hover:text-purple-400 transition cursor-pointer"
  >
    <FaEnvelope className="text-purple-500" />
    <span>girieswarann@gmail.com</span>
  </a>
      </div>

      {/* Scroll to Top Arrow */}
      <div className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
        <div className="flex mr-16 gap-2 ">
          <span
           className="rotate-90 text-lg mt-2 cursor-pointer "
           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
           >Go Back To The Top</span>
          

          <div className="h-40 w-[2px] bg-gradient-to-b from-red-500 via-green-500 ml-0 to-blue-500"></div>
        </div>
      </div>
    </div>
  );
}
