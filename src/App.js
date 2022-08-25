import Header from './components/header/header'; 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Router>
       <Header />
        <Switch>
          <Route/>
        </Switch>
       </Router>
     
       
      </header>
    </div>
  );
}

export default App;
