import 'bootstrap/dist/css/bootstrap.min.css';
import MovieRequest from './Compoments/MovieRequest';
import FloatPage from './Compoments/FloatPage';
import About from './Compoments/About';
import NavBar from './Compoments/NavBar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageBG from './Compoments/PageBG';

function App() {
  return (
      <Router>
        <PageBG/>
        <Switch>
          <Route path="/" exact>
            <NavBar/>
            <FloatPage/>
          </Route>
          <Route path="/movieReq" exact>
            <NavBar/>
            <MovieRequest/>
          </Route>
          <Route path="/about" exact>
            <NavBar/>
            <About/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
