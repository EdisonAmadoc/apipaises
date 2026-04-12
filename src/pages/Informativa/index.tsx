import { useEffect, useState } from 'react';
import type { Country } from '../../types/Country';

const Informativa = () => {
  const [stats, setStats] = useState({ totalPop: 0, maxPopCountry: "", count: 0 });

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/region/america")
      .then(res => res.json())
      .then((data: Country[]) => {
        const total = data.reduce((acc, curr) => acc + curr.population, 0);
        const maxCountry = data.reduce((prev, curr) => (prev.population > curr.population) ? prev : curr);
        
        setStats({
          totalPop: total,
          maxPopCountry: maxCountry.name.common,
          count: data.length
        });
      });
  }, []);

  return (
    <div className="page-container">
      <div className="info-card">
        <h2>Dashboard Analítico</h2>
        <p className="text-muted">Análisis en tiempo real de la API Rest Countries</p>
        
        <div className="stats-grid">
          <div className="stat-box">
            <h3>{stats.count}</h3>
            <p>Países Analizados</p>
          </div>
          <div className="stat-box">
            <h3>{(stats.totalPop / 1000000).toFixed(1)}M</h3>
            <p>Habitantes Totales</p>
          </div>
          <div className="stat-box highlight">
            <h3>{stats.maxPopCountry}</h3>
            <p>Mayor Población</p>
          </div>
        </div>

        <div className="tech-stack">
          <h3>Arquitectura del Proyecto</h3>
          <div className="tags">
            <span className="tag react">React </span>
            <span className="tag ts">TypeScript</span>
            <span className="tag vite">Vite</span>
            <span className="tag router">React Router </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informativa;