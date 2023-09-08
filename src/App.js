import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import { Fragment } from 'react';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Fragment>
      <Container fluid={true}>
        <nav className='navbar navbar-expend navbar-dark bg-dark'>
          <div className='navbar-nav'>
            <li className='nav-item'>
              <Link to={'/'} className='nav-link' >Home</Link>
            </li>
            <li className='nav-item'>
              <Link to={'/create'} className='nav-link' >Create</Link>
            </li>
          </div>
        </nav>
        <div className='container'>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/create" element={<Create />}></Route>
          </Routes>
        </div>
      </Container>
    </Fragment>
  );
}

export default App;
