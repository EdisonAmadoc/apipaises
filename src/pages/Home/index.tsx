import { useEffect, useState } from 'react';
import { type Country } from '../../types/Country';
import { Link } from 'react-router-dom';


const Home = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/region/america")
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(err => console.error(err));
  }, []);

  const filteredCountries = countries.filter(c => {
    const matchSearch = c.name.common.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "All" || c.subregion === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="page-container">
      <div className="controls">
        <input 
          type="text" 
          placeholder="Buscar país..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <select onChange={(e) => setFilter(e.target.value)} className="filter-select">
          <option value="All">Todas las regiones</option>
          <option value="North America">Norteamérica</option>
          <option value="South America">Sudamérica</option>
          <option value="Central America">Centroamérica</option>
          <option value="Caribbean">Caribe</option>
        </select>
      </div>

      <div className="grid">
        {filteredCountries.map(country => (
         <div key={country.cca3} className="card">
            <div className="card-img-container">
              <img src={country.flags.svg} alt={country.name.common} className="card-img" />
            </div>
            <div className="card-body">
              <h3>{country.name.common}</h3>
              <Link to={`/detalle/${country.cca3}`} className="btn-link">Ver Detalle</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;