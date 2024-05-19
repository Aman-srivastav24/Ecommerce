import React, { useState, useEffect } from 'react';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import slide4 from '../assets/slide.jpg'
import shoes from '../assets/shoes.jpg'
import tshirt from '../assets/tshirt.jpg'
const images = [slide1, slide2, slide3,slide4];

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500); // Duration of fade out
    }, 4000); // Image change interval including fade out and fade in time

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className='banner m-4 '>
      <div className='slide h-[450px] flex'>
        <img 
          src={images[currentImageIndex]} 
          alt="" 
          className={`w-full h-full object-cover transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-[30%]'}`}
        />
      </div>
      <div className='section2 flex flex-col items-center mt-10 '>
        <h2 className='text-[38px] font-bold'>What We Sell</h2>
        <div className='flex mt-10 md:gap-[200px] gap-2 '>
          <div className='bg-black text-white flex flex-col text-center rounded-lg shadow-lg hover:scale-110 cursor-pointer'>
          <img src={shoes} className='h-[300px] w-[300px] shadow-lg rounded-lg'  alt="" />
          <span className='text-[20px] font-semibold'>Shoes</span>
          </div>

          <div className='bg-black text-white flex flex-col text-center rounded-lg shadow-lg hover:scale-110 cursor-pointer'>
          <img src={tshirt} className='h-[300px] w-[300px] shadow-lg rounded-lg'  alt="" />
          <span className='text-[20px] font-semibold'>T-shirt</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
