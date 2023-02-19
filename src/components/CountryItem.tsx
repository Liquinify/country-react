import React from "react";

type Props = {
  country: any
};

const CountryItem = ({ country }: Props): JSX.Element => {
  return (
    <div className="item">
      <img className="item__img" src={country.flags.png} alt="Country flag" />
      <div className="item__information">
        <h2 className="item__title">{country.name.common}</h2>
        <ul className="item__list">
          <li className="item__description">
            <span className="item__span">Population:</span>{" "}
            {country.population
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          </li>
          <li className="item__description">
            <span className="item__span">Region:</span> {country.region}
          </li>
          <li className="item__description">
            <span className="item__span">Capital:</span> {country.capital}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CountryItem;
