import { useEffect, useState } from 'react';
import type { Country } from '../../types/Country';

const Original = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [country1, setCountry1] = useState<Country | null>(null);
  const [country2, setCountry2] = useState<Country | null>(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/region/america")
      .then(res => res.json())
      .then((data: Country[]) => {
        // Ordenar alfabéticamente para que los selectores se vean mejor
        const sortedData = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountries(sortedData);
        // Seleccionar dos países por defecto para que no se vea vacío
        setCountry1(sortedData[0]);
        setCountry2(sortedData[1]);
      })
      .catch(err => console.error(err));
  }, []);

  const handleSelect1 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = countries.find(c => c.cca3 === e.target.value);
    if (selected) setCountry1(selected);
  };

  const handleSelect2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = countries.find(c => c.cca3 === e.target.value);
    if (selected) setCountry2(selected);
  };

  if (!country1 || !country2) return <div className="page-container">Cargando comparador...</div>;

  return (
    <div className="page-container original-section">
      <h2>Comparador de Países</h2>
      <p className="text-muted" style={{ marginBottom: '30px' }}>
        Selecciona dos países para comparar sus estadísticas demográficas y geográficas.
      </p>

      <div className="compare-controls">
        <select value={country1.cca3} onChange={handleSelect1} className="filter-select">
          {countries.map(c => <option key={c.cca3} value={c.cca3}>{c.name.common}</option>)}
        </select>
        <div className="vs-badge">VS</div>
        <select value={country2.cca3} onChange={handleSelect2} className="filter-select">
          {countries.map(c => <option key={c.cca3} value={c.cca3}>{c.name.common}</option>)}
        </select>
      </div>

      <div className="compare-grid">
        {/* Tarjeta País 1 */}
        <div className="compare-card">
          <img src={country1.flags.svg} alt={country1.name.common} className="compare-flag" />
          <h3>{country1.name.common}</h3>
          <div className="compare-stat">
            <span>Capital</span>
            <strong>{country1.capital?.[0] || 'N/A'}</strong>
          </div>
          <div className={`compare-stat ${country1.population > country2.population ? 'winner' : ''}`}>
            <span>Población</span>
            <strong>{country1.population.toLocaleString()}</strong>
          </div>
          <div className="compare-stat">
            <span>Región</span>
            <strong>{country1.subregion}</strong>
          </div>
        </div>

        {/* Tarjeta País 2 */}
        <div className="compare-card">
          <img src={country2.flags.svg} alt={country2.name.common} className="compare-flag" />
          <h3>{country2.name.common}</h3>
          <div className="compare-stat">
            <span>Capital</span>
            <strong>{country2.capital?.[0] || 'N/A'}</strong>
          </div>
          <div className={`compare-stat ${country2.population > country1.population ? 'winner' : ''}`}>
            <span>Población</span>
            <strong>{country2.population.toLocaleString()}</strong>
          </div>
          <div className="compare-stat">
            <span>Región</span>
            <strong>{country2.subregion}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Original;