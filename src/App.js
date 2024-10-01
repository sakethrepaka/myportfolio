import './App.css';
import Header from './components/header/Header';
import Home from './Pages/Home/Home';
import About from './Pages/about/About';
import Skills from './Pages/skills/Skills';
import Qualification from './Pages/qualification/Qualification';
import Portfolio from './Pages/portfolio/Porfolio';
import Contact from './Pages/contact/Contact';
import Footer from './Pages/footer/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <main className='main'>
          <Home/>
          <About/>
          <Skills/>
          <Qualification/>
          <Portfolio/>
          <Contact/>
          <Footer/>
      </main>
    </div>
  );
}

export default App;
