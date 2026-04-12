import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        Inicio
      </NavLink>
      <NavLink to="/favorito" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        Favoritos
      </NavLink>
      <NavLink to="/original" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        Original
      </NavLink>
      <NavLink to="/informativa" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        Info
      </NavLink>
      <NavLink to="/usuario" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        Usuario
      </NavLink>
    </nav>
  );
};

export default Navbar;