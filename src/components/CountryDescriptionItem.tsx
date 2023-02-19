import React from "react";

type Props = {
  country: any;
};

const CountryDescriptionItem = ({ country }: Props): JSX.Element => {
  return (
    <div className="description">
      <img
        className="description__img"
        src={country.flags.png}
        alt="Country flag"
      />
      <div className="description__container">
        <h1 className="description__name">{country.name.common}</h1>
        <div className="description__lists">
          <ul className="description__list">
            <li>
              Native name:{" "}
              {Object.keys(country.name.nativeName).map(
                (nativelang: string, index: number) => (
                  <p className="description__item flex" key={index}>
                    {nativelang}
                  </p>
                )
              )}
            </li>
            <li>
              Population:{" "}
              {country.population
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </li>
            <li>Region: {country.region}</li>
            <li>Sub Region: {country.subregion}</li>
            <li>Capital: {country.capital}</li>
          </ul>
          <ul className="description__list">
            <li>Top Level Domain: {country.tld}</li>
            <li className="description__item">
              Currencies:{" "}
              {Object.keys(country.currencies).map(
                (currency: string, index: number) => (
                  <p key={index} className="description__item">
                    {currency}
                  </p>
                )
              )}
            </li>
            <li className="description__item">
              Languages:{" "}
              {Object.keys(country.languages).map(
                (language: string, index: number) => (
                  <p key={index} className="description__item">
                    {language}
                  </p>
                )
              )}
            </li>
          </ul>
        </div>
        <div className="description__borders">
          <p className="description__border-title">Border Countries: </p>
          {country.borders === undefined ? (
            <div className="description__border">None</div>
          ) : (
            country.borders.map((border: string, index: number) => (
              <div className="description__border" key={index}>
                {border}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryDescriptionItem;
