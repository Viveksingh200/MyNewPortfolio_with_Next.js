"use client";

import { Sparkles, ArrowRight, ChevronDown } from "lucide-react";
import TerminalWindow from "./TerminalWindow";
import { socials } from "@/data/socials";

export default function Hero({ scrollY }) {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden px-6"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Terminal Window */}
        <div className="mb-10">
          <TerminalWindow />
        </div>

        {/* Badge */}
          <div className="inline-flex mt-8 gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm hoverable">
            <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
            <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
              Vivek Singh
            </span>
          </div>

        {/* Main Hero Content */}
        <div className="text-center">

          {/* Heading */}
          <h1
            className="text-7xl md:text-9xl font-black leading-none tracking-wide md:mt-10 lg:-mt-14 "
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <div className="relative flex justify-center items-center">
              <span className="absolute select-none text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x ">
                FULL STACK
              </span>
              <div className="relative z-10 top-24">
                <img
                  src="/me.png"
                  alt="Your Photo"
                  className="w-52 md:w-72 lg:w-100 rounded-sm shadow-2xl object-cover md:mr-12"
                />
              </div>
            </div>
            <div className="relative flex justify-center items-center">
                <span className="md:mt-18 lg:-mt-18 z-10 absolute text-gray-300">
              DEV<span className="outline-text outline-hover">ELO</span>PER
            </span>
            </div>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-400 mx-auto leading-relaxed mt-30 max-w-3xl">
            Building fast, scalable & modern web applications using MongoDB,
            Express, React, and Node.js. Passionate about clean UI, smooth
            experiences & problem-solving.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <a href="#work"><button className="group relative px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 rounded-full font-bold overflow-hidden hoverable">
              <span className="relative z-10 flex items-center gap-2">
                Explore Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            </a>

            <button className="px-8 py-4 border-2 border-white/20 rounded-full font-bold hover:bg-white/5 hover:border-white/40 transition-all duration-300 hoverable">
              View Resume
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center pt-8">
            {socials.map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 hoverable"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </div>
    </section>
  );
}
