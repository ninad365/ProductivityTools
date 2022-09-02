import './App.css';
import Calculator from './components/Calculator';
import ExpenseTracker from './components/ExpenseTracker';
import AppSelector from './components/AppSelector';
import { NavBar } from './components/NavBar';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>

      < NavBar />
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Routes>
        <Route exact path="/" element={<AppSelector />} />
        <Route exact path="/Calculator" element={<Calculator />} />
        <Route exact path="/ExpenseTracker" element={<ExpenseTracker />} />
      </Routes>
    </div>
  );
}

export default App;
