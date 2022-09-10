import Header from './components/header/header'; 
import About from './components/about/about';
import Hero from './components/hero/hero';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


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
        <Switch>
          <Route/>
        </Switch>
       </Router>
     
       
      </header>
    </div>
  );
}

export default App;
