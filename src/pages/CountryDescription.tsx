import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { apiURL } from "../api/Url";
import CountryDescriptionItem from "../components/CountryDescriptionItem";
import { HiArrowLongLeft } from "react-icons/hi2";

const CountryDescription = (): JSX.Element => {
  const [countryDesc, setCountryDesc] = useState([]);
  const { countryName } = useParams();

  const getCountryDescription = () => {
    axios
      .get(`${apiURL}/name/${countryName}`)
      .then((res) => setCountryDesc(res.data))
      .catch((e: Error) => console.log(e));
  };

  useEffect(() => {
    getCountryDescription();
  }, [countryName]);

  return (
    <div>
      <Link to="/">
        <button className="description__button">
          <HiArrowLongLeft className="description__icon" size={20} />
          Back
        </button>
      </Link>

      {countryDesc.map((country, index) => (
        <CountryDescriptionItem key={index} country={country} />
      ))}
    </div>
  );
};

export default CountryDescription;
