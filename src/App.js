import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Create from './components/Create';
import Edit from './components/Edit';
import Index from './components/index';

function App() {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={'/'} className="navbar-brand">React CRUD</Link>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to={'/'} class="nav-item nav-link active">Home <span className="sr-only">(current)</span></Link>
            <Link to={'/create'} className="nav-item nav-link" >Create</Link>
            <Link to={'/index'}className="nav-item nav-link" >List</Link>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path = '/create' component={Create} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/index' component={Index} />
      </Switch>
    </div>
  );
}

export default App;
