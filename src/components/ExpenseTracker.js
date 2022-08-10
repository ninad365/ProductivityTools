import { Income } from './Income';
import { Header } from './Header';
import { AddIncome } from './AddIncome';
import { AddExpense } from './AddExpense';

function ExpenseTracker() {
  return (
      <div className="App">
        < Header />
        < Income/>
        < AddIncome />
        < AddExpense />
      </div>
  );
}

export default ExpenseTracker;
