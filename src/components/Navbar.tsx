import React from 'react'
import { Link } from 'react-router-dom'
import ThemeSwitch from './ThemeSwitch'

type Props = {
  getCountries: () => void
}

const Navbar = ({getCountries}: Props): JSX.Element => {
  return (
    <div className="navbar">
      <Link to='/'><h1 className="navbar__logo" onClick={() => getCountries()}>Where in the world?</h1></Link>
        <ThemeSwitch/>
    </div>
  )
}

export default Navbar