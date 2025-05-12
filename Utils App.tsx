import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { VideoSection } from './components/VideoSection';
import { Dashboard } from './components/Dashboard';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <About />
        <VideoSection />
        <Dashboard />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
