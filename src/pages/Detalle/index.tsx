import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { type Country } from '../../types/Country';

const Detalle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState<Country | null>(null);
  const [toastMsg, setToastMsg] = useState("");
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then(res => res.json())
      .then(data => setCountry(data[0]))
      .catch(err => console.error(err));
  }, [id]);

  const saveToFavorites = () => {
    if (!country) return;

    const currentFavs = JSON.parse(localStorage.getItem('favoritos') || '[]');
    const exists = currentFavs.find((c: Country) => c.cca3 === country.cca3);

    if (!exists) {
      localStorage.setItem('favoritos', JSON.stringify([...currentFavs, country]));
      setToastMsg(" ¡Guardado en favoritos con éxito!");
    } else {
      setToastMsg(" Este país ya está en tus favoritos");
    }

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setToastMsg("");
    }, 3000) as unknown as number;
  };

  if (!country) return <div className="page-container">Cargando...</div>;

  return (
    <div className="page-container">
      
      {toastMsg && (
        <div key={Date.now()} className="toast-notification">
          {toastMsg}
        </div>
      )}

      <button onClick={() => navigate(-1)} className="btn-back">Volver</button>
      
      <div className="detail-card">
        <h1>{country.name.common}</h1>
        <img src={country.flags.svg} alt="Bandera" className="detail-flag" />
        
        <div className="detail-info">
          <p><strong>Capital:</strong> <span>{country.capital?.[0] || 'No registrada'}</span></p>
          <p><strong>Población:</strong> <span>{country.population.toLocaleString()}</span></p>
          <p><strong>Idiomas:</strong> <span>{country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</span></p>
          <p><strong>Ubicación:</strong> <span><a href={country.maps?.googleMaps} target="_blank" rel="noreferrer" className="btn-link" style={{padding: '5px 10px'}}>Ver Mapa</a></span></p>
        </div>

        {country.coatOfArms?.svg && (
          <div className="coat-of-arms">
            <h3>Escudo del pais</h3>
            <img src={country.coatOfArms.svg} alt="Escudo" width="100" style={{marginTop: '20px'}} />
          </div>
        )}

        <button onClick={saveToFavorites} className="btn-fav"> Agregar a Favoritos</button>
      </div>
    </div>
  );
};

export default Detalle;