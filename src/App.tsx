import { useContext, useEffect, useState } from "react";
import "./styles/main.scss";
import Navbar from "./components/Navbar";
import axios from "axios";
import { ThemeContext } from "./context/ThemeContext";
import { apiURL } from "./api/Url";
import CountriesPage from "./pages/CountriesPage";
import { Route, Routes } from "react-router-dom";
import CountryDescription from "./pages/CountryDescription";
import CountryList from "./components/CountryList";

function App(): JSX.Element {
  const [countries, setCountries] = useState([]);
  const { theme } = useContext<any | {}>(ThemeContext);

  const getCountries = () => {
    axios
      .get(`${apiURL}/all`)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className={theme}>
      <Navbar getCountries={getCountries} />
      <Routes>
        <Route
          path="/"
          element={
            <CountriesPage countries={countries} setCountries={setCountries} />
          }
        />
        <Route path="/country" element={<CountryDescription />}>
          <Route
            path=":countryName"
            element={<CountryList countries={countries} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
