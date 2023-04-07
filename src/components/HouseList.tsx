import React, { useContext } from 'react';

// import context
import { useMyContext } from './HouseContext';

// import components
import House from "./House";

// import Link
import { Link } from 'react-router-dom';

// import icons
import { ImSpinner2 } from "react-icons/im"
import { IProps } from '../data';


// export interface PropsTest extends IProps {
//   house: IProps[]
// }

const HouseList = () => {

  const { houses, loading } = useMyContext();

  // console.log(houses);

  if (loading) {
    return <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
  }

  if (houses.length < 1) {
    return <div className="text-center text-3xl text-gray-400 mt-48">Sorry, nothing found</div>
  }

  return (
    <section className='mb-20'>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {
            houses.map((house: any, index) => {
              console.log(house);
              return (
                <Link to={`/proprety/${house.id}`} key={index} >
                  <House house={house} />
                </Link>
              )
            })
          }
        </div>
      </div>
    </section>
  )
};

export default HouseList;