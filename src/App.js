import Header from './components/header/header'; 
import About from './components/about/about';
import Hero from './components/hero/hero';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App" id='home' >
      <header className="App-header">
       <Router>
       <Header />
       <Hero />
       <About />
       <Projects/>
       <Contact />
       <Footer/>
       </Router>
     
       
      </header>
    </div>
  );
}

export default App;
