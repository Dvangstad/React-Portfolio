import logo from './logo.svg';
import './App.css';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Test from './components/Test';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      {/* <Link to='/'>Navbar</Link>
      <Link to='/test'>Test</Link> */}
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/">
          </Route>
          <Route exact path="/resume">
            <Resume/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
