import React, { useState, useEffect, createContext, useContext, PropsWithChildren } from 'react';

import { housesData, IProps } from '../data'



interface MyContextProps {
  country: string,
  setCountry: React.Dispatch<React.SetStateAction<string>>,
  countries: string[],
  // setCountries: React.Dispatch<React.SetStateAction<never[]>>,
  property: string,
  setProperty: React.Dispatch<React.SetStateAction<string>>,
  properties: string[],
  // setProperties: React.Dispatch<React.SetStateAction<never[]>>,
  price: string,
  setPrice: React.Dispatch<React.SetStateAction<string>>,
  houses: IProps[],
  // setHouses: React.Dispatch<React.SetStateAction<IProps[]>>,
  loading: boolean,
  // setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  handleClick: () => void

}

// create context
export const HouseContext = createContext<MyContextProps | undefined>(undefined);

function useMyContext() {
  const context = useContext(HouseContext);

  if (context === undefined) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }

  return context;
}

const HouseContextProvider = ({ children }: PropsWithChildren<{}>) => {

  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState<string[]>([]);
  const [property, setProperty] = useState("Proprety type (any)");
  const [properties, setProperties] = useState<string[]>([]);
  const [price, setPrice] = useState("Price type (any)");
  const [loading, setLoading] = useState(false);

  // return all countries
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    })
    // console.log(allCountries);
    // remove duplicates
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)]

    // console.log(uniqueCountries);
    // set countries state 
    setCountries(uniqueCountries);
  }, [])

  // return all properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    })
    // console.log(allProperties);
    // remove duplicates
    const uniqueProperties = ['Location (any)', ...new Set(allProperties)]

    // console.log(uniqueProperties);
    // set Properties state 
    setProperties(uniqueProperties);
  }, [])

  const handleClick = () => {
    // SET LOADING
    setLoading(true);
    // console.log(country, property, price)

    // create a function that checks if the string includes '(any)'
    const isDefault = (str: string) => {
      return str.split(' ').includes('(any)');
    };

    // console.log(isDefault(country))

    // get first value of price and parse it to number
    const minPrice = parseInt(price.split(' ')[0]);

    // get second value of price which is the maximum value and parse it to number
    const maxPrice = parseInt(price.split(' ')[2]);
    // console.log(maxPrice);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      //  if all values are selected
      if (house.country === country && house.type === property && housePrice >= minPrice && housePrice <= maxPrice) {
        return house;
      }

      // if all values are default
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }

      // if country is not default
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }
      // if proprety is not default
      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }

      // if price is not default
      if (!isDefault(price) && isDefault(country) && isDefault(property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }

      // if country and propreties are ont default
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }

      // if country and price are not default
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }

      // if proprety and price are not default
      if (!isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }

    });

    setTimeout(() => {
      return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
    }, 1000)

    // console.log(newHouses);

    return newHouses;
  }


  return (
    <HouseContext.Provider value={{
      country,
      setCountry,
      countries,
      property,
      setProperty,
      properties,
      price,
      setPrice,
      houses,
      loading,
      handleClick,

    }}>
      {children}
    </HouseContext.Provider>
  )
};

export { HouseContextProvider, useMyContext };
