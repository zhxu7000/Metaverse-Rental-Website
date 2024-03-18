import React from 'react';

import Image from '../assets/img/house-banner.png';
import Search from '../components/Search';

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[85px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[55px] font-semibold leading-none mb-6'>
            <span className='text-violet-700'>Make</span> Rental Great Again!
          </h1>
          <p className='max-w-[480px] mb-8'>
            Powerful, self-serve product and 360° 3D VR enabled property tours.
          </p>
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <div className='mb-8'>
            <iframe
                src={"https://my.matterport.com/show/?m=RsKKA9cRJnj"}
                height={"500px"}
                width={"750px"}
                name = "iframe-metaverse"
            />
          </div>
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
