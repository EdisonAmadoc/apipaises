const Usuario = () => {
  return (
    <div className="page-container">
      <div className="profile-card pro-profile">
        <div className="profile-banner"></div>
        <div className="profile-header absolute-avatar">
          <div className="profile-avatar">EA</div>
        </div>
        
        <div className="profile-content">
          <h2>Edison Amado</h2>
          <p className="role-text">Desarrollador de Software | 5to Semestre</p>
          
          <div className="skills-section">
            <h3>Stack Tecnológico</h3>
            <div className="tags">
              <span className="tag js">JavaScript</span>
              <span className="tag react">React.js</span>
              <span className="tag db">SQL / NoSQL</span>
              <span className="tag android">Android Studio</span>
            </div>
          </div>

          <div className="profile-details">
            <div className="detail-item">
              <span>Universidad / Sede:</span>
              <strong>uniagustiniana</strong>
            </div>
            <div className="detail-item">
              <span>Evaluación:</span>
              <strong>API Individual</strong>
            </div>
            <div className="detail-item">
              <span>Estado:</span>
              <span className="status-active">En Desarrollo</span>
            </div>
          </div>
          
          <button className="btn-link full-width" onClick={() => alert('¡Listo!')}>
            Contactar Desarrollador
          </button>
        </div>
      </div>
    </div>
  );
};

export default Usuario;