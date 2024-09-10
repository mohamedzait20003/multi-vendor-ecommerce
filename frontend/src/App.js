// Librairies
import React from 'react';
import { Outlet } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main className='min-h-[calc(100vh - 150px)]'>
        <Outlet />
      </main>      
      <Footer />
    </>
  );
}

export default App;
