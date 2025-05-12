import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  url: string;
  title: string;
  category: string;
}

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const galleryImages: GalleryImage[] = [
    {
      url: "https://images.pexels.com/photos/6964115/pexels-photo-6964115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Students sorting plastic waste",
      category: "sorting"
    },
    {
      url: "https://images.pexels.com/photos/2547565/pexels-photo-2547565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Organic waste collection",
      category: "organic"
    },
    {
      url: "https://images.pexels.com/photos/5808817/pexels-photo-5808817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Beach cleanup event",
      category: "events"
    },
    {
      url: "https://images.pexels.com/photos/5089175/pexels-photo-5089175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Maggot cultivation process",
      category: "organic"
    },
    {
      url: "https://images.pexels.com/photos/6964068/pexels-photo-6964068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Plastic bottles ready for recycling",
      category: "sorting"
    },
    {
      url: "https://images.pexels.com/photos/6964136/pexels-photo-6964136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Student awareness campaign",
      category: "events"
    },
    {
      url: "https://images.pexels.com/photos/6913398/pexels-photo-6913398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Weighing collected materials",
      category: "sorting"
    },
    {
      url: "https://images.pexels.com/photos/6192355/pexels-photo-6192355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Community education workshop",
      category: "events"
    }
  ];

  const categories = ['all', 'sorting', 'organic', 'events'];
  
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Impact in Pictures
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            See our students in action as they transform waste into valuable resources.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 reveal-on-scroll">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-primary-100'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 reveal-on-scroll">
          {filteredImages.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
              onClick={() => setSelectedImage(image)}
              style={{ height: '250px' }}
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <h3 className="text-white p-4 font-medium">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <button 
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={24} />
            </button>
            <div className="max-w-4xl max-h-[80vh] overflow-hidden" onClick={e => e.stopPropagation()}>
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title} 
                className="max-w-full max-h-[75vh] object-contain"
              />
              <div className="bg-white p-4">
                <h3 className="text-xl font-medium text-gray-800">{selectedImage.title}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Category: {selectedImage.category.charAt(0).toUpperCase() + selectedImage.category.slice(1)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
