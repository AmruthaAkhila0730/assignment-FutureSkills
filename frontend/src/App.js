import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Suggestions from './components/Suggestions';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
const [searchTerm, setSearchTerm] = useState('');

const handleSearch = (term) => {
  setSearchTerm(term);
}

  return (
    <div>
      <Navbar />
      <Hero onSearch={handleSearch}/>
      <Suggestions searchTerm={searchTerm}/>
      <Footer />
    </div>
  );
};

export default App;
