import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, ExternalLink } from 'lucide-react';

const tracks = [
  {
    title: "Midnight Dreams",
    duration: "3:45",
    url: "#",
    external: "​https://soundcloud.com/lmusic-studios/"
  }
];

export default function Music() {
  return (
    <section id="music" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Latest Tracks
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Play className="w-5 h-5 text-white" />
                </button>
                <div>
                  <h3 className="text-white font-semibold">{track.title}</h3>
                  <p className="text-gray-400 text-sm">{track.duration}</p>
                </div>
              </div>
              <a 
                href={track.external}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://open.spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
          >
            Listen on Spotify
          </a>
        </div>
      </div>
    </section>
  );
}