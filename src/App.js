import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/hero';
import Headcards from './components/headcards';
import Food from './components/Food';
import Category from './components/Category';

function App() {
  return (
    <div >
     <Navbar />
     <Hero />
     <Headcards />
     <Food />
     <Category />
    </div>
  );
};

export default App;
