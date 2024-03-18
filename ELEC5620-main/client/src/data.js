// import house images
import House1 from './assets/img/houses/house1.png';
import House2 from './assets/img/houses/house2.png';
import House3 from './assets/img/houses/house3.png';
import House4 from './assets/img/houses/house4.png';
import House5 from './assets/img/houses/house5.png';
import House6 from './assets/img/houses/house6.png';
import House7 from './assets/img/houses/house7.png';
import House8 from './assets/img/houses/house8.png';
import House9 from './assets/img/houses/house9.png';
import House10 from './assets/img/houses/house10.png';
import House11 from './assets/img/houses/house11.png';
import House12 from './assets/img/houses/house12.png';

// import apartments images
import Apartment1 from './assets/img/apartments/a1.png';
import Apartment2 from './assets/img/apartments/a2.png';
import Apartment3 from './assets/img/apartments/a3.png';
import Apartment4 from './assets/img/apartments/a4.png';
import Apartment5 from './assets/img/apartments/a5.png';
import Apartment6 from './assets/img/apartments/a6.png';

// import agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.png';
import Agent12 from './assets/img/agents/agent12.png';

export const housesData = [
  {
    id: 1,
    type: 'House',
    name: 'House 1',
    description:
      'This luxury house featuring direct lift access to your own entry foyer, this lifestyle apartment boasts multiple living areas & 360 degree balcony terrace access.',
    image: House1,
    url: 'https://my.matterport.com/show/?m=jm5WwEA3HUN&title=0&brand=0&wh=0',
    country: 'Sydney',
    address: '17 Eucalyptus Drive, Paddington NSW 2021',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '1500/pw',
    agent: {
      image: Agent1,
      name: 'Alice',
      phone: '0123 456 78910',
    },
  },
  {
    id: 2,
    type: 'House',
    name: 'Luxury House',
    description:
      'Luxury 3 Bedroom, 3 Bathroom Villa in Los Alcazares.',
    image: House2,
    url: 'https://my.matterport.com/show/?m=vtvMK6t7KBh',
    country: 'Sydney',
    address: '132 Blossom Street, Surry Hills NSW 2010',
    bedrooms: '3',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '1200/pw',
    agent: {
      image: Agent2,
      name: 'Daryl',
      phone: '0123 456 78910',
    },
  },
  {
    id: 3,
    type: 'House',
    name: 'House 3',
    description:
      'Be captivated by the far-reaching views. Immerse yourself in the metropolitan buzz that flows through the streets below. Your luxury tower offers a wealth of pleasures, both inside and out.',
    image: House3,
    url: 'https://my.matterport.com/show/?m=iCdKzsDP7rp',
    country: 'Sydney',
    address: '45 Harbour View Terrace, Kirribilli NSW 2061',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '1700/pw',
    agent: {
      image: Agent3,
      name: 'Amado',
      phone: '0123 456 78910',
    },
  },
  {
    id: 4,
    type: 'House',
    name: 'House 4',
    description:
      'Very clean and neat condition with spacious bedrooms, modern bathrooms and modern kitchen with special lightings.',
    image: House4,
    url: 'https://my.matterport.com/show/?m=WRMHHrCoN8W',
    country: 'Sydney',
    address: '88 Sunnybank Crescent, Glebe NSW 2037',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '2000/pw',
    agent: {
      image: Agent4,
      name: 'Kaitlyn',
      phone: '0123 456 78910',
    },
  },
  {
    id: 5,
    type: 'House',
    name: 'House 5',
    description:
      'Enjoy picture perfect scenery, this magnificent waterside apartment offers spacious open floor plan with gorgeous views. It is within 30 seconds walk to the waterfront.',
    image: House5,
    url: 'https://my.matterport.com/show/?m=n5m9Sep4UQb',
    country: 'Sydney',
    address: '209 Seaside Lane, Bondi Beach NSW 2026',
    bedrooms: '5',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2015',
    price: '2100/pw',
    agent: {
      image: Agent5,
      name: 'Grover',
      phone: '0123 456 78910',
    },
  },
  {
    id: 6,
    type: 'House',
    name: 'House 6',
    description:
      'Exceptional living environments in the perfect location makes this apartment an unique luxury Home.',
    image: House6,
    url: 'https://my.matterport.com/show/?m=gKBGBgyT6RL',
    country: 'Melbourne',
    address: '3274 Parkland Road, Newtown NSW 2042',
    bedrooms: '6',
    bathrooms: '3',
    surface: '6200 sq ft',
    year: '2014',
    price: '2200/pw',
    agent: {
      image: Agent6,
      name: 'Karen',
      phone: '0123 456 78910',
    },
  },
  {
    id: 7,
    type: 'Apartment',
    name: 'Apartment 1',
    description:
      'The main bedroom has a large private ensuite with floor to ceiling tiles. Both bedrooms have amazing water views and open onto the massive balcony as well.',
    image: Apartment1,
    url: 'https://my.matterport.com/show/?m=mhvYoSyrWgn',
    country: 'Melbourne',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2012',
    price: '2000/pw',
    agent: {
      image: Agent7,
      name: 'Jawhar',
      phone: '0123 456 78910',
    },
  },
  {
    id: 8,
    type: 'Apartment',
    name: 'Apartment 2',
    description:
      'Security parking, storage cage, and all the benefits living in Rhodes have to offer round out the features of this breathtaking apartment.',
    image: Apartment2,
    url: 'https://my.matterport.com/show/?m=NEkSiJE9ygW',
    country: 'Sydney',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2011',
    price: '3000/pw',
    agent: {
      image: Agent8,
      name: 'Juana',
      phone: '0123 456 78910',
    },
  },
  {
    id: 9,
    type: 'Apartment',
    name: 'Apartment 3',
    description:
      'Enjoy the stunning Waterview from this fabulous near-new corner block on the elevated level in the heart of town..',
    image: Apartment3,
    url: 'https://my.matterport.com/show/?m=fHTwkah1k47',
    country: 'Sydney',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1100 sq ft',
    year: '2011',
    price: '4000/pw',
    agent: {
      image: Agent9,
      name: 'Jerry',
      phone: '0123 456 78910',
    },
  },
  {
    id: 10,
    type: 'House',
    name: 'House 7',
    description:
      'All living areas open effortlessly to sun-drenched gardens & alfresco entertaining terrace.',
    image: House7,
    url: 'https://my.matterport.com/show/?m=EAwuLRxafYg',
    country: 'Melbourne',
    address: '7240C Argyle St. Lawndale, CA 90260',
    bedrooms: '5',
    bathrooms: '3',
    surface: '3200 sq ft',
    year: '2015',
    price: '1170/pw',
    agent: {
      image: Agent10,
      name: 'Vera',
      phone: '0123 456 78910',
    },
  },
  {
    id: 11,
    type: 'House',
    name: 'House 8',
    description:
      'Endless ocean views, stretches of golden coastline and an absolute beachfront aspect.there is no better combination to deliver a life of luxury than this. ',
    image: House8,
    url: 'https://my.matterport.com/show/?m=9p6fJe3PeSN',
    country: 'Melbourne',
    address: '798 Talbot St. Bridgewater, NJ 08807',
    bedrooms: '7',
    bathrooms: '2',
    surface: '2200 sq ft',
    year: '2019',
    price: '1450/pw',
    agent: {
      image: Agent11,
      name: 'Sofia',
      phone: '0123 456 78910',
    },
  },
  {
    id: 12,
    type: 'House',
    name: 'House 9',
    description:
      'Designed to maximise space and natural light, this impeccable modern home is like a private garden oasis, promoting a lifestyle of carefree luxury and relaxation..',
    image: House9,
    url: 'https://my.matterport.com/show/?m=ynMhWKEKxL8',
    country: 'Sydney',
    address: '2 Glen Creek St. Alexandria, VA 22304',
    bedrooms: '4',
    bathrooms: '4',
    surface: '4600 sq ft',
    year: '2015',
    price: '1390/pw',
    agent: {
      image: Agent12,
      name: 'Raymond',
      phone: '0123 456 78910',
    },
  },
  {
    id: 13,
    type: 'House',
    name: 'House 10',
    description:
      'This magnificent five-bedroom family mansion compromising of open plan lounge and dining rooms, large breakfast room looking over private gardens and a sparling swimming pool.',
    image: House10,
    url: 'https://my.matterport.com/show/?m=LXBUkGMyAtV',
    country: 'Melbourne',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '5',
    bathrooms: '2',
    surface: '5200 sq ft',
    year: '2014',
    price: '1800/pw',
    agent: {
      image: Agent1,
      name: 'Patricia',
      phone: '0123 456 78910',
    },
  },
  {
    id: 14,
    type: 'House',
    name: 'House 11',
    description:
      'Superbly designed this coastal home creates a sanctuary for those wanting a tranquil escape from the world.',
    image: House11,
    url: 'https://my.matterport.com/show/?m=iXEMxZtkqa4',
    country: 'Sydney',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '5',
    bathrooms: '2',
    surface: '3200 sq ft',
    year: '2011',
    price: '2130/pw',
    agent: {
      image: Agent2,
      name: 'Daryl',
      phone: '0123 456 78910',
    },
  },
  {
    id: 15,
    type: 'House',
    name: 'House 12',
    description:
      'Outdoors the floating terrace is a picturesque platform for croissant and coffee sunrises, and cheese and wine sunsets.',
    image: House12,
    url: 'https://my.matterport.com/show/?m=vtvMK6t7KBh',
    country: 'Melbourne',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '4',
    bathrooms: '3',
    surface: '5200 sq ft',
    year: '2013',
    price: '2210/pw',
    agent: {
      image: Agent3,
      name: 'Amado',
      phone: '0123 456 78910',
    },
  },
  {
    id: 16,
    type: 'Apartment',
    name: 'Apartment 16',
    description:
      'The vast home has been newly transformed by a meticulous revival, in keeping with its architectural pedigree.',
    image: Apartment4,
    url: 'https://my.matterport.com/show/?m=FQYjbV5qY2j',
    country: 'Melbourne',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1300 sq ft',
    year: '2011',
    price: '2100/pw',
    agent: {
      image: Agent4,
      name: 'Kaitlyn',
      phone: '0123 456 78910',
    },
  },
  {
    id: 17,
    type: 'Apartment',
    name: 'Apartment 17',
    description:
      'When viewed from the adjacent coastal walk a contemporary architectural delight stands tall. The sandy concrete structure displays the finest of architectural craftmanship.',
    image: Apartment5,
    url: 'https://my.matterport.com/show/?m=QrQ8y15GFcm',
    country: 'Sydney',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2012',
    price: '3200/pw',
    agent: {
      image: Agent5,
      name: 'Grover',
      phone: '0123 456 78910',
    },
  },
  {
    id: 18,
    type: 'Apartment',
    name: 'Apartment 18',
    description:
      'Beautifully designed in a special coastal setting, Clovelly Cove is an oasis that offers complete luxury and comfort for your beach side getaway.',
    image: Apartment6,
    url: 'https://my.matterport.com/show/?m=2TZn2GTessc',
    country: 'Melbourne',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2010',
    price: '3800/pw',
    agent: {
      image: Agent6,
      name: 'Karen',
      phone: '0123 456 78910',
    },
  },
];
