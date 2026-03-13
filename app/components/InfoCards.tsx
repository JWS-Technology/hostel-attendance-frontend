"use client";

import React from 'react';
import { motion } from 'framer-motion';

const features = [
    {
        title: "Accommodation",
        stat: "120",
        unit: "Premium Rooms",
        desc: "Climate-controlled environments with ergonomic study setups and high-speed connectivity.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
    {
        title: "Dining Experience",
        stat: "3",
        unit: "Meals + Snacks",
        desc: "FSSAI certified kitchen serving diverse, balanced nutritional plans for healthy living.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
    },
    {
        title: "Elite Security",
        stat: "24/7",
        unit: "Surveillance",
        desc: "Multi-tier biometric access control and a dedicated on-site rapid response team.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        ),
    },
];

const InfoCards = () => {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {features.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.8 }}
                            className="group relative h-full"
                        >
                            {/* Themed Accent Glow (using Sacred Red) */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#D32F2F] to-[#F9A825] rounded-[2.5rem] opacity-0 group-hover:opacity-20 transition duration-500 blur-xl" />

                            {/* Card Body */}
                            <div className="relative h-full bg-[#1A1A1A] rounded-[2.5rem] p-10 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-500 border border-white/5 group-hover:border-[#D32F2F]/30">


                                <div>
                                    {/* Icon Box with Red-to-Gold Gradient */}
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D32F2F] to-[#F9A825] flex items-center justify-center text-white mb-10 shadow-lg shadow-[#D32F2F]/20">
                                        {item.icon}
                                    </div>

                                    <h3 className="text-[#F9A825] text-[11px] font-black uppercase tracking-[0.4em] mb-4">
                                        {item.title}
                                    </h3>

                                    <div className="flex items-baseline gap-2 mb-6">
                                        <span className="text-6xl font-black text-white tracking-tighter">
                                            {item.stat}
                                        </span>
                                        <span className="text-sm font-bold text-[#D32F2F] uppercase tracking-widest">
                                            {item.unit}
                                        </span>
                                    </div>

                                    <p className="text-slate-400 leading-relaxed text-sm font-medium">
                                        {item.desc}
                                    </p>
                                </div>


                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InfoCards;