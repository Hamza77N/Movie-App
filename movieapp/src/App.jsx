import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import Home from './pages/Home';



const App = () => {
  return <div className='App'>
    <Router>
      <Navbar />
      <Home/>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path='movie/:id' element={<h1>Movie details page</h1>} ></Route>
        <Route path='movie/:type' element={<h1>Movie list page</h1>} ></Route>
        <Route path='/*' element={<h1>Error page</h1>}></Route>
      </Routes>
    </Router>
  </div>;
};

export default App;
