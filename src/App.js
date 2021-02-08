import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Contacts from "./components/Contacts/Contacts";
import CurrentContactInfo from "./components/Contacts/CurrentContactInfo";
import Main from './components/Main';
import Nav from "./components/Nav";
import Public from "./components/Public";
import PhotoGallery from "./components/PhotoGallery";
import Link from "./App.view"
import './App.css';

const App = () => (
  <div className="App">
    <Router>
      <Nav>
        <Link to='/' >
          Головна
        </Link>
        <Link to='/public'>
          Публікації
        </Link>
        <Link to='/gallery'>
          Галерея
        </Link>
        <Link to='/contacts'>
          Контакти
        </Link>
      </Nav>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/public' component={Public} />
        <Route path='/gallery' component={PhotoGallery} />
        <Route exact path='/contacts' component={Contacts} />
        <Route path='/contacts/:userName' component={CurrentContactInfo} />
      </Switch>
    </Router>
  </div>
)

export default App;