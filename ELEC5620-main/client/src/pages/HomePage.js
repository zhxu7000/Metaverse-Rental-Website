import React from 'react';
import {useLocation, useParams} from 'react-router-dom';

// import components
import HouseList from '../components/HouseList';
import Banner from '../components/Banner';
import Center from "../components/Center";

const Home = () => {

    return (
        <div className='min-h-[1800px]'>
            <Center />
            <Banner />
            <HouseList />
        </div>
    );
};

export default Home;
