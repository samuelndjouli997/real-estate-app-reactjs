import React from 'react';

// import data
import { housesData } from "../data";

// import use params
import { useParams } from 'react-router-dom';

// import icons
import { BiBed, BiBath, BiArea } from "react-icons/bi";

// import link

import { Link } from 'react-router-dom';

const PropertyDetails = () => {

  // get the house id
  const { id }: any = useParams();
  console.log(id);
  // get the house based on the id
  const house: any = housesData.find(house => {
    return house.id === parseInt(id);
  })

  console.log(house);

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{house.name}</h2>
            <h3 className="text-lg mb-4">{house.address}</h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <div className="bg-green-500 text-white px-3 rounded-full">{house.type}</div>
            <div className="bg-violet-500 text-white px-3 rounded-full">{house.country}</div>
          </div>
          <div className="text-3xl font-semibold text-violet-600">$ {house.price}</div>
        </div>
      </div>
    </section>
  )
};

export default PropertyDetails;
