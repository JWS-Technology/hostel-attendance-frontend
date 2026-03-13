"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
            {/* 1. Background Image Layer */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/sh.jpg"
                    alt="Sacred Heart Hostel"
                    fill
                    priority
                    className="object-cover opacity-30 scale-105"
                />
                {/* Organizational Overlays using Deep Navy */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-transparent to-[#1A1A1A]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/80 via-transparent to-[#1A1A1A]/80" />
            </div>

            {/* 2. Content Layer */}
            <div className="max-w-7xl mx-auto px-6 py-24 z-10 text-center relative mt-20 lg:mt-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >


                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white tracking-tighter mb-8 leading-[0.85]">
                        SACRED <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D32F2F] via-[#F9A825] to-[#D32F2F]">
                            HEART
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 font-medium leading-relaxed mb-12 drop-shadow-2xl">
                        A premium <span className="text-[#F9A825]">Academic Friendly</span> environment.
                        Join our legacy of discipline, safety, and world-class comfort.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">


                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 bg-transparent text-white border-2 border-white/10 rounded-xl font-black text-xs uppercase tracking-[0.2em] w-full sm:w-auto transition-all backdrop-blur-sm"
                        >
                            Student Portal
                        </motion.button>
                    </div>
                </motion.div>

                {/* 3. Themed Statistics Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto"
                >
                    {[
                        { label: "Modern Rooms", val: "450+", sub: "Premium Living" },
                        { label: "Available Beds", val: "125", sub: "Apply Today", highlight: true },
                        { label: "Capacity", val: "1200", sub: "Annual Enrollment" }
                    ].map((stat, i) => (
                        <div key={i} className="group relative p-8 bg-white/5 backdrop-blur-md border border-white/5 rounded-[2.5rem] hover:border-[#D32F2F]/40 transition-all duration-500 text-left overflow-hidden">
                            {/* Hover Accent */}
                            <div className="absolute top-0 left-0 w-1 h-0 bg-[#F9A825] group-hover:h-full transition-all duration-500" />

                            <span className="block text-slate-500 uppercase text-[9px] font-black tracking-[0.3em] mb-4 group-hover:text-[#F9A825] transition-colors">
                                {stat.label}
                            </span>
                            <span className={`text-5xl font-black tracking-tighter transition-colors block mb-1 ${stat.highlight ? 'text-[#D32F2F]' : 'text-white'}`}>
                                {stat.val}
                            </span>
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{stat.sub}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;