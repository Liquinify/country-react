import React from "react";

type Props = {
  onSelect: (regionName: string) => Promise<void>;
};

const Select = ({ onSelect }: Props): JSX.Element => {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const regionName = e.target.value;

    onSelect(regionName);
  };

  return (
    <select className="select" onChange={handleSelect}>
      <option className="select__option">Filter by Region</option>
      <option className="select__option" value="Africa">
        Africa
      </option>
      <option className="select__option" value="America">
        America
      </option>
      <option className="select__option" value="Asia">
        Asia
      </option>
      <option className="select__option" value="Europe">
        Europe
      </option>
      <option className="select__option" value="Oceania">
        Oceania
      </option>
    </select>
  );
};

export default Select;
