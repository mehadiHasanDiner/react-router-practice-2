import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
    <div>
      <Header></Header>
      <div className ="container">
    <Router>
      <Switch>
        <Route path ="/home">
          <Home></Home>
        </Route>
        <Route path ="/country"></Route>
        <Route path ="/flag">
        </Route>
        <Route>
        </Route>
        <Route exact path ="/">
          <Home></Home>
        </Route>
        <Route path ="*">
          <NoMatch></NoMatch>
        </Route>
        </Switch>      
    </Router>
    </div>
    </div>
  );
}

export default App;
