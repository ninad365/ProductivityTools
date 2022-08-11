import { Income } from './ExpenseTracker/Income';
import { Header } from './ExpenseTracker/Header';
import { AddIncome } from './ExpenseTracker/AddIncome';
import { AddExpense } from './ExpenseTracker/AddExpense';

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
