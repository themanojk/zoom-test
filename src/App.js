import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Meeting1 from './components/meeting1';
import Meeting2 from './components/meeting2';
import Meeting3 from './components/meeting3';
import Meeting4 from './components/meeting4';
import { ZoomMtg } from '@zoomus/websdk';

ZoomMtg.setZoomJSLib('https://dmogdx0jrul3u.cloudfront.net/1.8.3/lib', '/av');

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/">Meeting 1</Link>
            </li>
            <li>
              <Link to="/meeting-2">Meeting 2</Link>
            </li>
            <li>
              <Link to="/meeting-3">Meeting 3</Link>
            </li>
            <li>
              <Link to="/meeting-4">Meetng 4</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path='/' component={Meeting1}></Route>
            <Route exact path='/meeting-2' component={Meeting2}></Route>
            <Route exact path='/meeting-3' component={Meeting3}></Route>
            <Route exact path='/meeting-4' component={Meeting4}></Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
