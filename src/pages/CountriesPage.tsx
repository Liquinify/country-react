import axios from "axios";
import React, { SetStateAction } from "react";
import { Link, Routes } from "react-router-dom";
import { apiURL } from "../api/Url";
import CountryList from "../components/CountryList";
import Searchbar from "../components/Searchbar";
import Select from "../components/Select";

type Props = {
  countries: never[];
  setCountries: React.Dispatch<SetStateAction<never[]>>;
};

const CountriesPage = ({ countries, setCountries }: Props) => {
  
  const getCountriesByName = async (countryName: string) => {
    try {
      const res = await axios.get(`${apiURL}/name/${countryName}`);

      if (!res.status) throw new Error("Not found any country");

      const data = await res.data;
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getCountriesByRegion = async (regionName: string): Promise<void> => {
    try {
      const res = await axios.get(`${apiURL}/region/${regionName}`);

      if (!res.status) throw new Error("Failed to found countries");

      const data = await res.data;
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="separator">
        <Searchbar onSearch={getCountriesByName} />
        <Select onSelect={getCountriesByRegion} />
      </div>
      <CountryList countries={countries} />
    </div>
  );
};

export default CountriesPage;
