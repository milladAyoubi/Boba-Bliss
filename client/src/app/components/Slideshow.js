import { useEffect, useState } from 'react';

const Slideshow = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    }, 1500);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="slideshow container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''} lg:rounded-2xl`}
          style={{
            backgroundImage: `url(${image})`,
            opacity: index === currentSlide ? 1 : 0,
          }}
        />
      ))}
    
      <style jsx>{`
        .slideshow {
          position: relative;
          width: 100%;
          height: 400px;
          margin: 2rem auto 10rem auto;
        }

        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 400px;
          background-size: cover;
          background-position: center;
          transition: opacity 0.6s ease-in-out;
        }

        .slide.active {
          opacity: 1;
        }

       
      `}</style>
    </div>
  );
};

export default Slideshow;
