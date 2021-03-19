import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home/Home'
import Charts from './pages/Charts/Charts'
import NavBar from './components/NavBar/NavBar'
import {rooms} from './data/data.json'


function App() {
  return (
    <Router>
      <div>
       

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home rooms ={rooms} />
          </Route>
          <Route path="/charts">
            <Charts rooms ={rooms} />
          </Route>
        </Switch>
          
        <NavBar />
       
      </div>
    </Router>
  );
}

export default App;
