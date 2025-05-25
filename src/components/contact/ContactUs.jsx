"use client";

import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Instagram,
  Linkedin,
  Facebook,
  Dribbble,
} from "lucide-react";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUs() {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;

    const formData = new FormData(form);

    fetch("https://formsubmit.co/ajax/info@liquidchairgroup.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === "true") {
          form.reset();
          toast.success("Message sent successfully!");
        } else {
          toast.error("Something went wrong!");
        }
      })
      .catch(() => toast.error("Submission failed."));
  };

  return (
    <section className="py-16 px-4 bg-white">
      <ToastContainer position="top-center" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10">
        {/* Contact Form */}
        <div className="bg-blue-50 rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl md:text-[48px] font-semibold text-gray-900 mb-8">
            Get In Touch With Us
          </h2>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            {/* Hidden fields */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="New Contact Form Submission"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Input your name"
                required
                className="w-full p-3 rounded-md border border-gray-300 text-black"
              />
              <input
                type="email"
                name="email"
                placeholder="Input your Email"
                required
                className="w-full p-3 rounded-md border border-gray-300 text-black"
              />
            </div>
            <input
              type="text"
              name="company"
              placeholder="Company name"
              className="w-full p-3 rounded-md border border-gray-300 text-black"
            />
            <textarea
              rows={5}
              name="message"
              placeholder="Submit your message"
              required
              className="w-full p-3 rounded-md border border-gray-300 text-black"
            ></textarea>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-blue-600 text-[#070707] font-semibold py-4 px-9 rounded-md hover:bg-blue-700 transition"
            >
              Send message
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m-7-7l7 7-7 7"
                />
              </svg>
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-8">
            Ready to transform your business? Contact us today.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start gap-3 p-4 border rounded-lg">
              <Phone className="text-blue-600 w-6 h-6" />
              <div>
                <p className="font-semibold text-[#070707]">Phone number</p>
                <p className="text-gray-600 text-sm">+555-58472-58</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 border rounded-lg">
              <Clock className="text-blue-600 w-6 h-6" />
              <div>
                <p className="font-semibold text-[#070707]">Availability</p>
                <p className="text-gray-600 text-sm">Daily 24 hour open</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 border rounded-lg">
              <Mail className="text-blue-600 w-6 h-6" />
              <div>
                <p className="font-semibold text-[#070707]">Email</p>
                <p className="text-gray-600 text-sm">
                  info@liquidchairgroup.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 border rounded-lg">
              <MapPin className="text-blue-600 w-6 h-6" />
              <div>
                <p className="font-semibold text-[#070707]">Location</p>
                <p className="text-gray-600 text-sm">JL, raya kuta no. 242</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg mb-2 text-[#070707]">
              Social Media
            </h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-700 hover:text-blue-600">
                <Instagram />
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                <Linkedin />
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                <Facebook />
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                <Dribbble />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
