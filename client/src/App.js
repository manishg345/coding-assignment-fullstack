import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Comment from './components/Comment';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/comment" component={Comment} />
      </Switch>
    </div>
  );
}

export default App;
