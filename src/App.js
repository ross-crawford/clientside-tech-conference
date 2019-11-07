import React from 'react';
import "bootswatch/dist/lux/bootstrap.min.css";

import Navbar from './components/navbar'
import MainContent from './components/maincontent'
import Footer from './components/footer'


function App() {
  return (
    <div>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
