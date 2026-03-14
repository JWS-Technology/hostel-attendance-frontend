"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, ArrowRight, ShieldCheck, Mail, User, Target, Users } from 'lucide-react';
import Link from 'next/link';

const DirectorSection = () => {
    const [mobileTab, setMobileTab] = useState<'profile' | 'vision'>('profile');
    const [isMounted, setIsMounted] = useState(false);

    // Fix hydration: Only run window-specific logic after mounting
    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
            {/* Desktop Background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 hidden lg:block" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Mobile Tab Switcher */}
                <div className="flex lg:hidden w-full p-1 bg-slate-100 rounded-2xl mb-6">
                    <button
                        onClick={() => setMobileTab('profile')}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${mobileTab === 'profile' ? 'bg-white shadow-sm text-[#D32F2F]' : 'text-slate-400'}`}
                    >
                        <User size={14} /> Profile
                    </button>
                    <button
                        onClick={() => setMobileTab('vision')}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${mobileTab === 'vision' ? 'bg-white shadow-sm text-[#D32F2F]' : 'text-slate-400'}`}
                    >
                        <Target size={14} /> Vision
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">

                    <AnimatePresence mode="wait">
                        {/* PORTRAIT SECTION */}
                        {(mobileTab === 'profile' || (isMounted && window.innerWidth > 1024)) && (
                            <motion.div
                                key="portrait"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className={`relative w-full lg:w-5/12 max-w-sm lg:max-w-none mx-auto ${mobileTab === 'vision' ? 'hidden lg:block' : 'block'}`}
                            >
                                <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white ring-1 ring-slate-100">
                                    <Image src="/images/Fr.Jeyasellan.jpg" alt="Director" fill className="object-cover" />
                                    <div className="absolute bottom-4 left-4 right-4 p-5 bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#D32F2F] animate-pulse" />
                                            <span className="text-[#D32F2F] font-black text-[8px] uppercase tracking-[0.3em]">Director</span>
                                        </div>
                                        <h3 className="text-lg md:text-2xl font-black text-[#1A1A1A] tracking-tight">Rev. Dr. Name</h3>
                                        <p className="text-slate-500 font-bold text-[9px] uppercase tracking-widest">Ph.D., M.Phil.</p>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* VISION CONTENT SECTION */}
                        {(mobileTab === 'vision' || (isMounted && window.innerWidth > 1024)) && (
                            <motion.div
                                key="content"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className={`w-full lg:w-7/12 ${mobileTab === 'profile' ? 'hidden lg:block' : 'block'}`}
                            >
                                <div className="hidden lg:flex items-center gap-3 mb-6">
                                    <div className="h-[2px] w-12 bg-[#D32F2F]" />
                                    <span className="text-[#D32F2F] font-black text-xs uppercase tracking-[0.4em]">Chief Administrator</span>
                                </div>

                                <h2 className="text-4xl md:text-7xl font-black text-[#1A1A1A] tracking-tighter mb-6 leading-none uppercase text-center lg:text-left">
                                    Strategic <br className="hidden lg:block" /> <span className="text-[#F9A825]">Leadership.</span>
                                </h2>

                                <div className="relative mb-8 bg-slate-50 lg:bg-transparent p-6 lg:p-0 rounded-[2rem]">
                                    <p className="text-lg md:text-2xl text-slate-600 leading-relaxed font-medium italic text-center lg:text-left">
                                        "Our mission is to foster a campus where safety, discipline, and academic excellence go hand in hand."
                                    </p>
                                </div>

                                {/* Desktop-only Actions */}
                                <div className="hidden lg:flex flex-col gap-4">
                                    <button className="w-max px-10 py-5 bg-[#1A1A1A] text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-[#D32F2F] transition-all flex items-center gap-3 shadow-xl">
                                        <Mail size={16} /> Contact Office
                                    </button>
                                    <Link href="/administration/team">
                                        <div className="flex items-center gap-4 group cursor-pointer">
                                            <div className="flex flex-col text-left">
                                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">View Full Team</p>
                                                <p className="text-[#1A1A1A] font-black text-sm uppercase group-hover:text-[#F9A825] transition-colors">Assistant Directors</p>
                                            </div>
                                            <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#F9A825]/5 transition-all">
                                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* --- COMMON MOBILE BUTTONS (ONLY VISIBLE ON MOBILE) --- */}
                    <div className="w-full flex lg:hidden flex-col gap-4 mt-4">
                        <button className="w-full px-10 py-5 bg-[#1A1A1A] text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-lg">
                            <Mail size={16} /> Contact Office
                        </button>

                        <Link href="/administration/team" className="block">
                            <motion.div
                                whileTap={{ scale: 0.98 }}
                                className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#F9A825] shadow-sm">
                                        <Users size={20} />
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Our Governance</span>
                                        <span className="text-xs font-black text-[#1A1A1A] uppercase tracking-tight">Management Team</span>
                                    </div>
                                </div>
                                <ArrowRight size={18} className="text-[#F9A825]" />
                            </motion.div>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DirectorSection;