"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsMounted(true);
        const handleScroll = () => setIsScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);

        if (isMobileMenuOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/#about' },
        { name: 'Rooms', href: '/rooms' }, // Direct page
        { name: 'Facilities', href: '/#facilities' },
        { name: 'Gallery', href: '/gallery' }, // Direct page
    ];

    if (!isMounted) return null; // Prevent hydration mismatch

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${isScrolled
                ? 'py-3 bg-white/80 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-b border-slate-100'
                : 'py-8 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between lg:grid lg:grid-cols-3">

                    {/* LEFT NAV - Desktop */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.slice(0, 3).map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all relative group ${isScrolled ? 'text-slate-900' : 'text-white'
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#D32F2F] transition-all duration-300 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                            </Link>
                        ))}
                    </nav>

                    {/* CENTER LOGO */}
                    <div className="flex justify-center">
                        <Link href="/" className="flex flex-col items-center group">
                            <div className={`relative transition-all duration-500 ${isScrolled ? 'w-12 h-12' : 'w-20 h-20 md:w-24 md:h-24'}`}>
                                <Image
                                    src="/logo.png"
                                    alt="Sacred Heart Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <div className={`mt-2 text-center transition-all duration-500 ${isScrolled ? 'opacity-0 h-0 scale-90' : 'opacity-100'}`}>
                                <span className={`block font-black text-[11px] tracking-[0.5em] uppercase ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                                    Sacred <span className="text-[#D32F2F]">Heart</span>
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* RIGHT NAV - Desktop */}
                    <nav className="hidden lg:flex items-center justify-end gap-8">
                        {navLinks.slice(3).map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all relative group ${isScrolled ? 'text-slate-900' : 'text-white'
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#D32F2F] transition-all duration-300 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                            </Link>
                        ))}

                        {/* PORTAL CTA */}
                        <Link href="/login">
                            <button className={`ml-4 px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ${isScrolled
                                ? 'bg-[#1A1A1A] text-white hover:bg-[#D32F2F]'
                                : 'bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white hover:text-slate-900'
                                }`}>
                                Portal <ArrowUpRight size={14} />
                            </button>
                        </Link>
                    </nav>

                    {/* MOBILE TOGGLE */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className={`lg:hidden p-3 rounded-xl transition-all ${isScrolled ? 'bg-slate-100 text-slate-900' : 'bg-white/10 text-white backdrop-blur-md border border-white/20'
                            }`}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </div>

            {/* MOBILE DRAWER */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-white z-[200] flex flex-col p-8"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <span className="font-black text-[#D32F2F] tracking-[0.3em] text-[10px]">MANAGEMENT</span>
                            <button onClick={() => setIsMobileMenuOpen(false)} className="p-4 bg-slate-50 rounded-full text-slate-900">
                                <X size={24} />
                            </button>
                        </div>

                        <nav className="flex flex-col gap-6">
                            {[...navLinks, { name: 'Portal', href: '/portal' }].map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`text-5xl font-black tracking-tighter transition-colors ${pathname === link.href ? 'text-[#D32F2F]' : 'text-slate-900 hover:text-[#D32F2F]'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <div className="mt-auto pt-10 border-t border-slate-100">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Sacred Heart Residence</p>
                            <p className="text-xs font-bold text-slate-600">Established 2026 • Quality Living</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navigation;