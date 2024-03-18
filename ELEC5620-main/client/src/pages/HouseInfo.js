import React from 'react';

// import houseData
import { housesData } from '../data';
//  useParams
import {useLocation, useParams} from 'react-router-dom';
// import icons
import { BiBed, BiBath, BiArea, BiPhone } from 'react-icons/bi';
// import link
import { Link } from 'react-router-dom';
import axios from "axios";
import history from "../history/History";

const HouseInfo = () => {
  const { id } = useParams();
  const { uid } = useParams();
  const property = housesData.find((house) => {
    return house.id === parseInt(id);
  });


  const appointment = async () => {
    console.log("uid:" + uid);
    axios
        .get("http://localhost:8090/appointment/doAppoint", {
          params: {
            id: uid,
            houseid: id,
          },
        })
        .then((res) => {
          if(res.data.code === 200){
            console.log("success");
          } else {
          }
        });
  }

  return (
    <div className='container mx-auto min-h-[800px] mb-14'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
        <div>
          <h2 className='text-2xl font-semibold'>{property.name}</h2>
          <h3 className='text-lg mb-4'>{property.address}</h3>
        </div>
        <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
          <div className='bg-green-500 rounded-full text-white px-3 inline-block'>
            {property.type}
          </div>
          <div className='bg-violet-500 rounded-full text-white px-3 inline-block'>
            {property.country}
          </div>
        </div>
        <div className='text-3xl font-semibold text-violet-600'>
          $ {property.price}
        </div>
      </div>
      <div className='flex flex-col items-start gap-8 lg:flex-row'>
        <div className='max-w-[768px]'>
          <div className='mb-8'>
            <iframe
              src={property.url}
              height={"500px"}
              width={"750px"}
              name = "iframe-metaverse"
              />
          </div>
          <div className='flex gap-x-6 text-violet-700 mb-6'>
            <div className='flex gap-x-2 items-center'>
              <BiBed className='text-2xl' />
              <div className='text-lg font-medium'>{property.bedrooms}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <BiBath className='text-2xl' />
              <div className='text-lg font-medium'>{property.bathrooms}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <BiArea className='text-2xl' />
              <div className='text-lg font-medium'>{property.surface}</div>
            </div>
          </div>
          <p>{property.description}</p>
        </div>
        <div className='flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8'>
          <div className='flex items-center gap-x-4 mb-8'>
            <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
              <img src={property.agent.image}></img>
            </div>
            <div>
              <div className='font-bold text-lg'>{property.agent.name}</div>
              <Link to='' className='text-violet-700 text-sm'>
                99.1% favorable rate
              </Link>
            </div>
          </div>

          <button
              className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition'
              type='submit' onClick={appointment}>
            Make an appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default HouseInfo;
