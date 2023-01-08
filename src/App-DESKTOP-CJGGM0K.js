import Header from './components/header/header'; 
import About from './components/about/about';
import Hero from './components/hero/hero';
import Project from './components/projects/project';
import Contact from './components/contact/contact';
import Footer from './components/footer/footers';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App" id='home' >
      <header className="App-header">
       <Router>
       <Header />
       <Hero />
       <About />
       <Project/>
       <Contact />
       <Footer/>
       </Router>
     
       
      </header>
    </div>
  );
}

export default App;
