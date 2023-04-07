import React, { useState, useEffect } from 'react';

// import icons
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

// import headless ui
import { Menu } from '@headlessui/react';

// import house context
import { useMyContext } from './HouseContext';

const CountryDropdown = () => {

  const { country, setCountry, countries } = useMyContext();

  console.log(countries);

  const [isOpen, setIsOpen] = useState(false);
  console.log(country);

  return (
    <Menu as="div" className="dropdown relative ">
      <Menu.Button onClick={() => setIsOpen(prev => !prev)} className="dropdown-btn w-full text-left">
        <RiMapPinLine className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{country}</div>
          <div className="text-[13px]">Select your place</div>
        </div>
        {
          isOpen ? (<RiArrowDownSLine className="dropdown-icon-secondary" />) : (<RiArrowUpSLine className="dropdown-icon-secondary" />)
        }
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {
          countries.map((country, index) => {
            return (
              <Menu.Item
                onClick={() => setCountry(country)}
                as="li"
                className="cursor-pointer hover:text-violet-700 transition" key={index}>
                {country}
              </Menu.Item>
            )
          })
        }
      </Menu.Items>
    </Menu>
  )
}

export default CountryDropdown;
