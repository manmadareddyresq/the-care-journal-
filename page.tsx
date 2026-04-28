'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { articles } from './data.json';
import { Sun, Heart } from 'lucide-react';

const featured = articles[0];
const trending = articles.slice(1, 4);

export default function Home() {
  return (
    <div className="space-y-24 py-8">
      {/* Hero */}
      <section className="glass neumorph mx-auto max-w-7xl rounded-3xl p-12 text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
          <img src={featured.image} alt={featured.title} className="mx-auto h-96 w-full rounded-3xl object-cover shadow-2xl" />
          <h1 className="mt-12 text-5xl font-bold gradient-border md:text-7xl">{featured.title}</h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-600 dark:text-slate-300">{featured.excerpt}</p>
          <Link href={`/articles/${featured.slug}`} className="glass neumorph mt-12 inline-flex items-center gap-3 rounded-2xl px-8 py-4 font-semibold shadow-xl backdrop-blur-xl hover:scale-105">
            <Heart className="h-5 w-5 text-health-500" /> Read Full Article
          </Link>
        </motion.div>
      </section>

      {/* Trending */}
      <section className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold gradient-border mb-12 text-center">🔥 Trending</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {trending.map((article, i) => (
            <motion.div key={article.slug} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <Link href={`/articles/${article.slug}`} className="glass neumorph block overflow-hidden rounded-3xl p-8 hover:scale-105">
                <img src={article.image} alt={article.title} className="h-48 w-full rounded-2xl object-cover" />
                <h3 className="mt-6 font-bold text-xl gradient-border">{article.title}</h3>
                <p className="mt-3 text-slate-600 dark:text-slate-300">{article.excerpt}</p>
                <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
                  <span>{article.author}</span> • <span>{article.readingTime}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
