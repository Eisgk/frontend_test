import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './pages/Form';
import Header from './components/Header';
import Pokemon from './pages/Pokemon';
import Function1 from './pages/Function1';
import { Routes, Route, Outlet, NavLink  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Form />} />
          <Route path="pokemon" element={<Pokemon />} />
          <Route path="function1" element={<Function1 />} />
          
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <Header />
      <nav>
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
        <div>
          <NavLink to="/pokemon">Pokemon</NavLink>
        </div>
        <div>
          <NavLink to="/function1">Function1</NavLink>
        </div>
        <div>
          <NavLink to="/function2">Function2</NavLink>
        </div>
        <div>
          <NavLink to="/function3">Function3</NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
