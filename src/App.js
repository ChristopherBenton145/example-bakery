import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Store from './components/Store';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/store' element={<Store></Store>} />
        <Route path='/contact' element={<Contact></Contact>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
