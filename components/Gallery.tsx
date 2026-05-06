"use client";

import Image from "next/image";

export default function Gallery() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop",
      alt: "Luxury laundry wash facility",
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      alt: "Premium dry cleaning service",
    },
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      alt: "Professional ironing and pressing",
    },
    {
      src: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=400&h=400&fit=crop",
      alt: "Doorstep laundry pickup and delivery",
    },
    {
      src: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop",
      alt: "Expert folding and garment care",
    },
    {
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
      alt: "Premium garment packaging",
    },
    {
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop",
      alt: "Premium wardrobe management",
    },
    {
      src: "https://images.unsplash.com/photo-1506629905607-0b5b8b5e4b8f?w=400&h=400&fit=crop",
      alt: "Professional laundry service experience",
    },
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      alt: "Advanced laundry technology",
    },
    {
      src: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=400&h=400&fit=crop",
      alt: "Quality control and inspection",
    },
    {
      src: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop",
      alt: "Eco-friendly laundry solutions",
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      alt: "Express laundry service",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Work</h2>
          <p className="section-subtitle">
            Premium quality in every detail. See the care we put into your garments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                <p className="text-gold font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
