import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Music from './components/Music';
import About from './components/About';
import Booking from './components/Booking';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Music />
        <About />
        <Booking />
      </main>
    </div>
  );
}

export default App;