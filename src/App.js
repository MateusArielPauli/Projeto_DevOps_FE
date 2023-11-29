import './App.css';
import { BrowserRouter as Router, Link, BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

function Header() {
  return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className='navbar-brand'>Home</Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/user" className='nav-link'>Usuários</Link>
            </li>
          </ul>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent"></div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
              <Link to="/login" className='nav-link'>Login</Link>
          <ul/>
        <div/>  
        
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <>

      <BrowserRouter>
        <Header />

        <AppRoutes />
      </BrowserRouter>
    
    </>
  );
}
