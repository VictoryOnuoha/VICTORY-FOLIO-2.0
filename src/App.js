import Header from './components/header/headers'; 
import About from './components/about/aboutme';
import Hero from './components/hero/hero';
import Projects from './components/projects/project';
import Contact from './components/contact/contacts';
import Footer from './components/footer/footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App" id='home' >
      <header className="App-header">
       <Router>
       <Header />

        <Switch>
          <Route path='/' exact component={Hero} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
        </Switch>

       <Footer/>

       </Router>
     
       
      </header>
    </div>
  );
}

export default App;
