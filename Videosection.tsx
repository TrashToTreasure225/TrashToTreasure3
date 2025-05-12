import React from 'react';
import { PlayCircle } from 'lucide-react';

export const VideoSection: React.FC = () => {
  return (
    <section 
      id="video" 
      className="py-20 bg-gradient-to-br from-accent-50 to-primary-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Sorting Waste Matters
          </h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Understanding the impact of proper waste management is crucial for our environment's future.
          </p>
        </div>

        <div className="max-w-4xl mx-auto reveal-on-scroll">
          <div className="relative overflow-hidden rounded-xl shadow-xl bg-white">
            {/* Video thumbnail with play overlay (for effect, actual embed below) */}
            <div className="relative aspect-video">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/pLL4PW4LZT8"
                title="Why Sorting Waste Matters"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow-md reveal-on-scroll">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              <PlayCircle className="inline-block mr-2 text-accent-500" size={24} />
              Key Takeaways
            </h3>
            <p className="text-gray-600">
              This video highlights the critical importance of waste separation and the dangers of unsorted waste. 
              When we mix organic and inorganic materials, we create environments where harmful chemicals can leach 
              into soil and water. Proper sorting allows for recycling, composting, and resource recovery - essential 
              steps toward a sustainable future. Even small items like chopsticks can have a significant environmental 
              impact when not disposed of properly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
