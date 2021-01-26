import './App.css';
import Main from './components/Main';
import Public from "./components/Public";
import PhotoGallery from "./components/PhotoGallery";
import Contacts from "./components/Contacts/Contacts";
import CurrentContactInfo from "./components/Contacts/CurrentContactInfo";
import Nav from "./components/Nav";
import Link from "./App.view"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
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
          <Route path='/' component={Main} exact/>
          <Route path='/public' component={Public} />
          <Route path='/gallery' component={PhotoGallery} />
          <Route path='/contacts' component={Contacts} exact />
          <Route path='/contacts/:userName' component={CurrentContactInfo} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
