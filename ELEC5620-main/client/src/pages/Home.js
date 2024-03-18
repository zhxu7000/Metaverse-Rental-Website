import React from 'react';
import {useLocation, useParams} from 'react-router-dom';

// import components
import HouseList from '../components/HouseList';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div className='min-h-[900px]'>
      <Banner />
        <div className='container mx-auto flex justify-center'>
            <p className='hover:text-violet-900 text-xl font-bold lg:text-[22px] '>Login in to start your 3D metaverse travel !</p>
        </div>
    </div>
  );
};

export default Home;
