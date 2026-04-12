import { useEffect, useState } from 'react';
import { type Country } from '../../types/Country';
import { Link } from 'react-router-dom';

const Favorito = () => {
  const [favorites, setFavorites] = useState<Country[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('favoritos');
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  const clearFavorites = () => {
    localStorage.removeItem('favoritos');
    setFavorites([]);
  };

  return (
    <div className="page-container">
      <h2 style={{ marginBottom: '20px', color: 'var(--primary)' }}>Mis Favoritos</h2>
      
      {favorites.length > 0 && (
        <button onClick={clearFavorites} className="btn-back">Limpiar Lista</button>
      )}
      
      <div className="grid">
        {favorites.length === 0 ? (
          <p style={{ color: 'var(--text-muted)' }}>No tienes países guardados aún.</p>
        ) : null}

        {favorites.map(country => (
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

export default Favorito;