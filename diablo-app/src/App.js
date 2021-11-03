import './style/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './pages/Main.js';
import Characters from './pages/Characters';
import Panel from './pages/Panel';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route exact path="/characters" component={Characters} />
      <Route exact path="/hero-editor" component={Panel} />
    </Router>
  );
};

export default App;
