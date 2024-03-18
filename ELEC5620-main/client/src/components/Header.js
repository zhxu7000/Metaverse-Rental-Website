import React from 'react';

// import link
import {Link, useLocation} from 'react-router-dom';
// import User image
import User from '../assets/img/agents/images.png';

const Header = () => {

  return (
    <header className='py-6 mb-6 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
          <p className='text-violet-900 text-xl font-bold lg:text-[22px] '>Metaverse Estate Rental</p>
        </Link>
        <div className='flex items-center gap-6'>
          <Link className='hover:text-violet-900 transition' to={'/signin'} >
            <img src={User} width='50px' height='50px'></img>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
