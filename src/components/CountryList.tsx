import React from "react";
import { Link } from "react-router-dom";
import CountryDescription from "../pages/CountryDescription";
import CountryItem from "./CountryItem";

type Props = {
  countries: never[];
};

const CountryList = ({ countries }: Props): JSX.Element => {
  return (
    <div>
      {countries.map((country: any, index: number) => (
        <Link
          to={`country/${country.name.common}`}
          element={<CountryDescription />}
          key={index}
        >
          <CountryItem country={country} />
        </Link>
      ))}
    </div>
  );
};

export default CountryList;
