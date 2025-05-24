// filepath: c:\Users\tarun\OneDrive\Desktop\Savely\client\src\App.js
import {Routes, Route} from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <>
      <Header />
      <Footer />
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />
        <Route path='/about' element={<h1>About Page</h1>} />
        <Route path='/contact' element={<h1>Contact Page</h1>} />
      </Routes>
    </>
  );
}

export default App;