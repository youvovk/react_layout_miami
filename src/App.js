import React from 'react';
import './App.scss';
import Header from './components/header';
import Best from './components/best';
import Gallery from './components/gallery';
import Consultation from './components/consultation';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <Best />
        <Gallery />
        <Consultation />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
