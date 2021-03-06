import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import CountryDetail from './components/CountryDetail/CountryDetail';

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
        <Route path ="/flag"></Route>
        <Route path ="/countryDetail/:countryDetailID">
          <CountryDetail></CountryDetail>
        </Route>
        <Route exact path ="/"></Route>
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
