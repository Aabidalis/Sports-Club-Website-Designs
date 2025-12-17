import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const galleryImages = [
  {
    url: '/sports/upcrick.jpeg',
    title: 'Cricket Ground',
    span: 'col-span-2'
  },
  {
    url: '/sports/upbad.jpeg',
    title: 'Badminton Court',
    span: 'col-span-1'
  },
  {
    url: '/sports/swimming.jpeg',
    title: 'Swimming Pool',
    span: 'col-span-1'
  },
  {
    url: '/sports/testview.jpeg',
    title: 'Front view',
    span: 'col-span-2'
  },
  {
    url: '/sports/upfoot.jpeg',
    title: 'football court',
    span: 'col-span-1'
  },
  {
    url: '/sports/uparena.jpeg',
    title: 'Arena View',
    span: 'col-span-2'
  }
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">Gallery</h2>
          <p className="text-gray-400 text-lg">
            Explore our world-class facilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryImages.map((image, idx) => (
            <div
              key={idx}
              className={`${image.span} relative group overflow-hidden rounded-2xl h-64 cursor-pointer`}
            >
              <ImageWithFallback
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                <h3 className="text-white text-xl">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
