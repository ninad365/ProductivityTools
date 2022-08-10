import './App.css';
import Calculator from './components/Calculator';
import ExpenseTracker from './components/ExpenseTracker';
import { 
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">ExpenseTracker</Link>
            </li>
            <li>
              <Link to="/Calculator">Calculator</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route exact path="/" element={<ExpenseTracker/>} />
          <Route exact path="/Calculator" element={<Calculator/>} />
        </Routes>
      </div>
  );
}

export default App;
