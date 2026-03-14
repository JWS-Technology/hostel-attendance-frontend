"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
    const objectives = [
        "Foster an academic-centric living environment",
        "Maintain 24/7 student safety and well-being",
        "Build a community of mutual respect and discipline"
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* LEFT: IMAGE SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
                            <Image
                                src="/images/sh.jpg"
                                alt="Sacred Heart Hostel Building"
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-110"
                            />
                        </div>

                        {/* Floating Historical Button Overlay */}
                        <div className="absolute -bottom-6 -right-6">
                            <motion.button
                                whileHover={{ scale: 1.05, rotate: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#1A1A1A] text-white p-8 rounded-2xl shadow-2xl border-b-4 border-[#F9A825] flex flex-col items-start gap-2 group"
                            >
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F9A825]">Archives</span>
                                <span className="text-xl font-black flex items-center gap-3">
                                    Historical View
                                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* RIGHT: CONTENT SIDE */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[#D32F2F] font-black text-xs uppercase tracking-[0.5em] block mb-4">Established Excellence</span>
                            <h2 className="text-5xl md:text-6xl font-black text-[#1A1A1A] tracking-tighter mb-8">
                                About Our <span className="text-[#F9A825]">Hostel</span>
                            </h2>

                            <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium">
                                The Sacred Heart Hostel provides more than just a place to stay; it offers a <span className="text-[#1A1A1A] font-bold underline decoration-[#F9A825]">safe and academic-friendly</span> environment where students can excel in their studies and personal growth.
                            </p>

                            {/* Mission & Objectives Grid */}
                            <div className="grid grid-cols-1 gap-8 mb-12">
                                {/* Mission */}
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#D32F2F]/10 flex items-center justify-center text-[#D32F2F]">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-black text-[#1A1A1A] uppercase text-xs tracking-widest mb-2">Our Mission</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">To nurture future leaders by providing a holistic community environment that balances rigorous academics with cultural growth.</p>
                                    </div>
                                </div>

                                {/* Objectives */}
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#F9A825]/10 flex items-center justify-center text-[#F9A825]">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-black text-[#1A1A1A] uppercase text-xs tracking-widest mb-2">Hostel Objectives</h4>
                                        <ul className="space-y-2">
                                            {objectives.map((obj, i) => (
                                                <li key={i} className="text-slate-500 text-sm flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
                                                    {obj}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Community Environment Tag */}
                            <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-[#F9A825]">
                                <h4 className="font-black text-[#1A1A1A] text-xs uppercase tracking-widest mb-2">Community Environment</h4>
                                <p className="text-slate-500 text-sm italic">"A home away from home where diversity meets discipline."</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;