import {Routes, Route} from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Register from './pages/Register';

function App() {
  return (
    <>
      <Header />
      <Footer />
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />
        <Route path='/register' element={<Register />} />
        <Route path='/contact' element={<h1>Contact Page</h1>} />
      </Routes>
    </>
  );
}

export default App;