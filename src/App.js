import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './pages/restaurant/components/navBar';
import {ROUTES} from './pages/restaurant/routes/routes';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <section className='body-container'>
        <Routes>
          {ROUTES.map((route)=>(
            <Route key={route.path} path={route.path} exact={route.exact} element={route.component} />
          ))}
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
