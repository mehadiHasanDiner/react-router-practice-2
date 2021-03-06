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
        </Switch>      
    </Router>
    </div>
    </div>
  );
}

export default App;
