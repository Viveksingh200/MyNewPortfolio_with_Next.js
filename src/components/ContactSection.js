'use client';

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowRight, Briefcase, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      e.target.reset();
      setSent(true);
      setTimeout(() => setSent(false), 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Something went wrong. Try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="relative p-10 md:p-16 bg-linear-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden">

          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-size-[3rem_3rem]" />

          <div className="relative z-10">

            <Briefcase className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-blue-400" />

            <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6">
              Let's Build Scalable{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">
                MERN Solutions
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Open to MERN projects, freelance work, internships, and modern collaborations.
            </p>

            {/* Contact Form */}
            <form
              onSubmit={sendEmail}
              className="grid gap-5 max-w-xl mx-auto text-left"
            >
              {/* Name */}
              <div>
                <label className="text-gray-300 text-sm">Your Name</label>
                <input
                  type="text"
                  name="from_name"
                  required
                  className="w-full p-3 mt-1 bg-white/5 border border-white/15 rounded-lg outline-none focus:border-blue-400 transition text-sm"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-gray-300 text-sm">Your Email</label>
                <input
                  type="email"
                  name="from_email"
                  required
                  className="w-full p-3 mt-1 bg-white/5 border border-white/15 rounded-lg outline-none focus:border-blue-400 transition text-sm"
                  placeholder="example@mail.com"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="text-gray-300 text-sm">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full p-3 mt-1 bg-white/5 border border-white/15 rounded-lg outline-none focus:border-blue-400 transition text-sm"
                  placeholder="+91 00000 00000"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-gray-300 text-sm">Your Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full p-3 mt-1 bg-white/5 border border-white/15 rounded-lg outline-none focus:border-blue-400 transition text-sm"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="group px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 rounded-full font-bold text-base hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300 hover:scale-[1.03] hoverable mx-auto flex items-center gap-2"
              >
                {loading ? "Sending..." : "Send"}
                <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {sent && (
                <p className="text-green-400 text-center text-sm pt-2 animate-pulse">
                  Message Sent Successfully!
                </p>
              )}
            </form>

            {/* WhatsApp Button */}
            <a href="https://wa.me/+919305380267" target="_blank">
              <button className="group mt-6 px-10 py-3 bg-white/10 border border-white/15 rounded-full font-semibold text-base hover:bg-white/20 transition-all duration-300 hover:scale-[1.03] hoverable mx-auto flex items-center gap-2">
                <FaWhatsapp size={20} />
                WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
