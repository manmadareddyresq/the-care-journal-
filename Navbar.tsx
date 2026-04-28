'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <>
      <motion.nav className="glass neumorph fixed top-4 left-1/2 z-50 w-full max-w-6xl -translate-x-1/2 rounded-3xl px-8 py-4 backdrop-blur-xl shadow-2xl">
        <div className="mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold gradient-border">
            The Care Journal
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/articles" className="font-semibold text-slate-700 hover:text-primary-500">Articles</Link>
            <Link href="/search" className="font-semibold text-slate-700 hover:text-primary-500">Search</Link>
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="h-10 w-10 rounded-2xl bg-slate-200 p-2 dark:bg-slate-700">
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
          <button onClick={() => setIsOpen(true)} className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div className="glass fixed inset-0 z-40 flex flex-col p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button onClick={() => setIsOpen(false)} className="self-end"><X className="h-8 w-8" /></button>
            <div className="mt-20 space-y-6">
              <Link href="/" className="text-3xl font-bold" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/articles" className="text-3xl font-bold" onClick={() => setIsOpen(false)}>Articles</Link>
              <Link href="/search" className="text-3xl font-bold" onClick={() => setIsOpen(false)}>Search</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
