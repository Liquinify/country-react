import React, { useState } from 'react';
import { HiSearch } from "react-icons/hi";

type Props = {
  onSearch: (countryName:string) => Promise<void>
}

const Searchbar = ({onSearch}: Props): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('')

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    
    onSearch(searchValue)
  }

  return (
    <form className='form' onSubmit={submitHandler}>
      <HiSearch className="form__icon" onClick={submitHandler}/>
      <input 
        className="form__input" 
        placeholder="Search for a country..." 
        value={searchValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
      />
    </form>
  )
}

export default Searchbar;