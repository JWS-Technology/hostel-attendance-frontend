"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight, Mail, User, Target, Users,
    Quote, CheckCircle2, Award, Zap
} from 'lucide-react';
import Link from 'next/link';

const DirectorSection = () => {
    const [mobileTab, setMobileTab] = useState<'profile' | 'vision'>('profile');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <section className="py-20 md:py-32 bg-[#FAF9F6] relative overflow-hidden">
            {/* Subtle Texture Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* --- MOBILE NAVIGATION (STRICT VISIBILITY) --- */}
                <div className="flex lg:hidden w-full p-1.5 bg-slate-200/50 rounded-2xl mb-10 border border-slate-200">
                    <button
                        onClick={() => setMobileTab('profile')}
                        className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-xl font-black text-[11px] uppercase tracking-widest transition-all ${mobileTab === 'profile'
                            ? 'bg-[#1A1A1A] text-white shadow-xl'
                            : 'text-slate-600 hover:text-[#1A1A1A]'
                            }`}
                    >
                        <User size={16} /> Profile
                    </button>
                    <button
                        onClick={() => setMobileTab('vision')}
                        className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-xl font-black text-[11px] uppercase tracking-widest transition-all ${mobileTab === 'vision'
                            ? 'bg-[#1A1A1A] text-white shadow-xl'
                            : 'text-slate-600 hover:text-[#1A1A1A]'
                            }`}
                    >
                        <Target size={16} /> Vision
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* --- LEFT: PORTRAIT (ALWAYS VISIBLE ON DESKTOP) --- */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`relative w-full lg:w-5/12 group ${mobileTab === 'vision' ? 'hidden lg:block' : 'block'}`}
                    >
                        <div className="relative aspect-[4/5] lg:aspect-[3.8/5] rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)] border-[12px] border-white">
                            <Image
                                src="/images/Fr.Jeyasellan.jpg"
                                alt="Director"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                            {/* Floating Rank Badge */}
                            <div className="absolute top-6 right-6 bg-[#F9A825] text-[#1A1A1A] px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-widest flex items-center gap-2 shadow-lg">
                                <Award size={14} /> Top Administration
                            </div>
                        </div>

                        {/* Name Plate */}
                        <div className="mt-8 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 mb-2">
                                <span className="h-1 w-8 bg-[#D32F2F] rounded-full" />
                                <span className="text-[#D32F2F] font-black text-[10px] uppercase tracking-[0.4em]">The Director</span>
                            </div>
                            <h3 className="text-3xl md:text-5xl font-black text-[#1A1A1A] tracking-tighter uppercase italic leading-none">
                                Rev. Dr. <br /> <span className="text-[#F9A825]">S. Samuel SJ</span>
                            </h3>
                            <p className="mt-2 text-slate-500 font-bold text-xs uppercase tracking-[0.2em]">Ph.D. in Computer Science & Management</p>
                        </div>
                    </motion.div>

                    {/* --- RIGHT: CONTENT SECTION --- */}
                    <div className={`w-full lg:w-7/12 ${mobileTab === 'profile' ? 'hidden lg:block' : 'block'}`}>
                        <div className="hidden lg:flex items-center gap-4 mb-8">
                            <Zap size={20} className="text-[#F9A825] fill-[#F9A825]" />
                            <span className="text-[#1A1A1A] font-black text-xs uppercase tracking-[0.5em]">Executive Vision 2026</span>
                        </div>

                        <h2 className="text-4xl md:text-7xl font-black text-[#1A1A1A] tracking-tighter mb-8 leading-[0.9] uppercase text-center lg:text-left italic">
                            Building <span className="text-[#D32F2F]">Digital</span> <br className="hidden lg:block" /> Excellence.
                        </h2>

                        {/* Quote Box with high contrast */}
                        <div className="relative mb-12 p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
                            <Quote className="absolute -top-4 -left-4 text-[#F9A825] bg-[#FAF9F6] p-2 rounded-full shadow-sm" size={48} />
                            <p className="text-xl md:text-3xl text-[#1A1A1A] leading-tight font-black italic text-center lg:text-left">
                                "Our mission is to foster a campus where safety, discipline, and academic excellence go hand in hand with <span className="text-[#D32F2F] underline decoration-4">global innovation.</span>"
                            </p>
                        </div>

                        {/* Feature Grid (Visible & Aligned) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                            {[
                                { title: "Academic Rigor", desc: "Highest standards of learning" },
                                { title: "Student Welfare", desc: "Pastoral care & support" },
                                { title: "Digital Future", desc: "Smart campus initiatives" },
                                { title: "Moral Ethics", desc: "Value-based leadership" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                    <CheckCircle2 className="text-[#D32F2F] mt-0.5" size={18} />
                                    <div>
                                        <p className="font-black text-[11px] uppercase tracking-widest text-[#1A1A1A]">{item.title}</p>
                                        <p className="text-slate-500 text-[10px] font-bold uppercase">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                            <button className="w-full sm:w-max px-12 py-6 bg-[#1A1A1A] text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#D32F2F] transition-all flex items-center justify-center gap-4 shadow-2xl group">
                                <Mail size={18} className="group-hover:rotate-12 transition-transform" /> Contact Office
                            </button>

                            <Link href="/administration/team" className="group">
                                <div className="flex items-center gap-4 cursor-pointer">
                                    <div className="flex flex-col text-left">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Explore</p>
                                        <p className="text-[#1A1A1A] font-black text-sm uppercase group-hover:text-[#F9A825] transition-colors border-b-2 border-[#F9A825]">Meet The Team</p>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-white border-2 border-[#1A1A1A] flex items-center justify-center group-hover:bg-[#1A1A1A] group-hover:text-white transition-all">
                                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DirectorSection;