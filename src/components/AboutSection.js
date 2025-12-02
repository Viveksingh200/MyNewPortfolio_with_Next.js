"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, User2, Layers } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      
      {/* Soft background gradients */}
      <div className="absolute top-10 left-0 w-96 h-96 bg-blue-600/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[180px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">
              Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A clean, modern overview of who I am and what I do as a developer.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* LEFT SIDE — Image + Mission */}
          <div className="space-y-18 mx-auto">

            {/* IMAGE + GLOW RINGS */}
            <div className="relative flex items-center justify-center mt-12">
              <motion.div
                className="absolute w-72 h-72 rounded-full border border-blue-400/30"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 4 }}
              />
              <motion.div
                className="absolute w-96 h-96 rounded-full border border-purple-400/20"
                animate={{ scale: [1.1, 1, 1.1] }}
                transition={{ repeat: Infinity, duration: 5 }}
              />

              <motion.div
                className="relative w-74 h-74 overflow-hidden shadow-2xl rounded-full"
                initial={{ rotateY: 0 }}
                whileHover={{ rotateY: 10 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <img
                  src="/about.jpg"
                  alt="Vivek Singh"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* WHO I AM */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <User2 className="w-8 h-8 text-blue-400" />
                <h3 className="text-3xl font-bold">Who I Am</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a MERN Stack Developer who loves building fast, modern, clean 
                and user-friendly digital experiences. I enjoy blending beautiful 
                UI with scalable backend logic.
              </p>
            </div>

            </div>

          {/* RIGHT SIDE — Content */}
          <div className="space-y-12">

            {/* WHAT I BUILD */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Code2 className="w-8 h-8 text-purple-400" />
                <h3 className="text-3xl font-bold">What I Build</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                I focus on full-stack products: dashboards, blogs, listing
                platforms, authentication systems, REST APIs, admin panels, 
                and end-to-end MERN applications.
              </p>
            </div>

            {/* TECH STACK */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Layers className="w-8 h-8 text-pink-400" />
                <h3 className="text-3xl font-bold">Tech Stack</h3>
              </div>

              <div className="flex flex-wrap gap-3 mt-2">
                {[
                  "MongoDB",
                  "Express",
                  "React",
                  "Node.js",
                  "Next.js",
                  "Tailwind CSS",
                  "JWT Auth",
                  "Mongoose",
                  "Git",
                  "React Hook Form",
                  "Yup"
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* ⭐ MISSION MOVED BELOW IMAGE */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Rocket className="w-8 h-8 text-green-400" />
                <h3 className="text-3xl font-bold">Mission</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                My goal is to design and develop clean, modern and scalable 
                applications that feel premium and deliver real value.
              </p>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
