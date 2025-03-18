import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Teeman profile"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">About Teeman</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Teeman is a groundbreaking artist who seamlessly blends electronic, hip-hop, and soul music into a unique sonic experience. With over a decade of producing and performing, he has established himself as a pioneer in the contemporary music scene.
            </p>
            <p className="text-gray-300 leading-relaxed">
              His innovative approach to music production and captivating live performances have earned him a dedicated following and critical acclaim. Teeman continues to push boundaries and explore new musical territories, creating immersive experiences that resonate with audiences worldwide.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}