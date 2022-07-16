import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar';
import {ROUTES} from './routes/routes';
import Home from './pages/Home/index.jsx';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <section className='body-container'>
        <Routes>
          <Route path="/" exact element={<Home />} />
          
          <Route path='/cart' exact element={<Cart />} />
            
        </Routes>

        {/* <Routes>
          {ROUTES.map((route)=>(
            <Route key={route.path} path={route.path} exact={route.exact} element={route.component} />
          ))}
        </Routes> */}
      </section>
    </BrowserRouter>
  );
}

export default App;
