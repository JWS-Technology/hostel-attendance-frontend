"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);

        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const leftLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Rooms', href: '/rooms' },
    ];

    const rightLinks = [
        { name: 'Facilities', href: '/facilities' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Portal', href: '/portal' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled
                ? 'py-3 bg-white/95 backdrop-blur-md shadow-xl border-b border-sacred-yellow/30'
                : 'py-8 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* DESKTOP LAYOUT */}
                <div className="hidden lg:grid grid-cols-3 items-center">

                    {/* LEFT LINKS */}
                    <nav className="flex items-center gap-10">
                        {leftLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-[11px] font-black uppercase tracking-[0.25em] transition-all relative group ${isScrolled ? 'text-slate-900' : 'text-white'
                                    }`}
                            >
                                {link.name}
                                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-sacred-red transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* CENTER LOGO - Size increased, background removed */}
                    <div className="flex justify-center">
                        <Link href="/" className="flex flex-col items-center group">
                            <div className="relative w-24 h-24 md:w-28 md:h-28 transition-transform duration-500 group-hover:scale-105">
                                <Image
                                    src="/logo.png"
                                    alt="Sacred Heart Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <div className="mt-3 text-center">
                                <span className={`block font-black text-sm tracking-[0.4em] uppercase ${isScrolled ? 'text-slate-900' : 'text-white'
                                    }`}>
                                    Sacred <span className="text-sacred-red">Heart</span>
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* RIGHT LINKS */}
                    <nav className="flex items-center justify-end gap-10">
                        {rightLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-[11px] font-black uppercase tracking-[0.25em] transition-all relative group ${isScrolled ? 'text-slate-900' : 'text-white'
                                    }`}
                            >
                                {link.name}
                                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-sacred-red transition-all group-hover:w-full" />
                            </Link>
                        ))}

                    </nav>
                </div>

                {/* MOBILE LAYOUT */}
                <div className="flex lg:hidden items-center justify-between">
                    <Link href="/" className="flex items-center gap-4">
                        <div className="relative w-14 h-14">
                            <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className={`font-black text-lg tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                                SACRED <span className="text-sacred-red">HEART</span>
                            </span>
                            <span className="text-[8px] font-bold uppercase tracking-widest text-sacred-yellow">Management</span>
                        </div>
                    </Link>

                    <button
                        className={`p-4 rounded-2xl transition-all ${isScrolled ? 'bg-slate-100 text-sacred-red' : 'bg-white/10 text-white backdrop-blur-md border border-white/20'
                            }`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                            <span className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* MOBILE DRAWER */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-slate-950/90 backdrop-blur-xl z-[140]"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 35, stiffness: 350 }}
                            className="fixed inset-y-0 right-0 w-full max-w-xs bg-white z-[150] shadow-2xl flex flex-col h-[100dvh]"
                        >
                            <div className="flex flex-col h-full overflow-y-auto px-10 py-16">
                                <div className="flex justify-between items-center mb-16">
                                    <span className="font-black text-sacred-red tracking-[0.3em] text-xs">MENU</span>
                                    <button onClick={() => setIsMobileMenuOpen(false)} className="p-3 bg-slate-100 rounded-full">
                                        <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </div>

                                <nav className="flex flex-col gap-8">
                                    {[...leftLinks, ...rightLinks].map((link, i) => (
                                        <motion.div
                                            key={link.name}
                                            initial={{ x: 30, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: i * 0.05 }}
                                        >
                                            <Link
                                                href={link.href}
                                                className="text-4xl font-black text-slate-900 hover:text-sacred-red transition-colors"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>


                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navigation;