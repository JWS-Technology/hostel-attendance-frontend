"use client";

import React from 'react';
import { motion } from 'framer-motion';

const updates = [
    {
        date: "15 Mar",
        title: "Phase 2 Admissions Open",
        category: "Enrollment",
        urgent: true
    },
    {
        date: "18 Mar",
        title: "New High-Speed Mesh WiFi Installation",
        category: "Facilities",
        urgent: false
    },
    {
        date: "22 Mar",
        title: "Special Sunday Feast: Menu Updated",
        category: "Mess",
        urgent: false
    }
];

const Announcements = () => {
    return (
        <section className="py-24 px-6 bg-slate-950">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-stretch">

                    {/* LEFT SIDE: The Featured Action Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-2/5 relative group cursor-pointer"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#7C3563] to-purple-600 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative h-full bg-[#7C3563] rounded-[2.8rem] p-10 flex flex-col justify-between overflow-hidden shadow-2xl">
                            {/* Background Decoration */}
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors" />

                            <div>
                                <span className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest mb-6">
                                    Priority Action
                                </span>
                                <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter">
                                    JOIN THE <br /> SACRED HEART <br /> COMMUNITY.
                                </h2>
                            </div>

                            <div className="mt-12">
                                <p className="text-white/80 font-medium mb-8 max-w-xs leading-relaxed">
                                    Experience the most safe and student-centric environment in the city.
                                </p>
                                <motion.button
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-4 bg-white text-[#7C3563] px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl"
                                >
                                    Apply Now
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE: Vertical Announcement List */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-3/5 flex flex-col justify-center"
                    >
                        <div className="flex items-center justify-between mb-10">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-8 bg-[#7C3563] rounded-full" />
                                <h3 className="text-2xl font-black text-white tracking-tight uppercase">Latest Notices</h3>
                            </div>
                            <button className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-[#7C3563] transition-colors">
                                View All Archives
                            </button>
                        </div>

                        <div className="space-y-4">
                            {updates.map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 10 }}
                                    className="group flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/[0.08] transition-all cursor-pointer"
                                >
                                    {/* Date Circle */}
                                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex flex-col items-center justify-center border ${item.urgent ? 'bg-[#7C3563]/20 border-[#7C3563] text-[#7C3563]' : 'bg-slate-900 border-white/10 text-slate-400'
                                        }`}>
                                        <span className="text-lg font-black leading-none">{item.date.split(' ')[0]}</span>
                                        <span className="text-[10px] font-bold uppercase">{item.date.split(' ')[1]}</span>
                                    </div>

                                    {/* Text Content */}
                                    <div className="flex-grow">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-[#7C3563] mb-1 block">
                                            {item.category}
                                        </span>
                                        <h4 className="text-lg font-bold text-white group-hover:text-[#7C3563] transition-colors">
                                            {item.title}
                                        </h4>
                                    </div>

                                    {/* Arrow */}
                                    <div className="text-slate-600 group-hover:text-white transition-colors">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Announcements;