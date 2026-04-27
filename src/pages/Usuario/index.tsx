const Usuario = () => {
  return (
    <div className="page-container">
      <div className="profile-card">

        <div className="profile-header">
          <div className="profile-avatar">EA</div>
          <h2>Edison Amado</h2>
        </div>

        <div className="profile-details">
          <div className="detail-item">
            <span>Universidad</span>
            <strong>Uniagustiniana</strong>
          </div>
         
          <div className="detail-item">
            <span>Estado</span>
            <span className="status-active">En Desarrollo</span>
          </div>
        </div>

        <button
          className="btn-fav"
          onClick={() => alert('¡Listo!')}
        >
          Contactar Desarrollador
        </button>

      </div>
    </div>
  );
};

export default Usuario;