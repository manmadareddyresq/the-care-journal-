'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-500 to-green-500"
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="text-center text-white"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <motion.div className="mx-auto h-24 w-24 rounded-2xl bg-white/30 backdrop-blur-xl shadow-2xl" 
              animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} />
            <h1 className="mt-8 text-4xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              The Care Journal
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
