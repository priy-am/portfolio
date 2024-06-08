import React from 'react';
import First from './components/First';
import About from './components/About';
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {

  return (
    <>
      <div className="sticky top-0 -z-10 h-full w-full bg-white"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#ad6df480] opacity-50 blur-[80px] "></div></div>
      <div className="dark:bg-primary-dark ">
        <First />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>

    </>
  );
}

export default App


