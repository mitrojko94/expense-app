//ADDING CONDITIONAL RETURN STATEMENTS - LEKCIJA

import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  // III NACIN
  //Moguce je JSX kod smestiti u varijablu, kao sto je uradjeno ispod. Ovo je treci nacin prikazivanja sadrzaja
  //Sve smestiti u neku varijablu i kad nema nista sa porukom i kad ima nesto, sa tim kodom. I posle u liniji koda, dole, samo pozvati ime te varijable u {}
  //III NACIN je najbolji, ali na meni je da izaberem koji hocu

  //let expensesContent = <p>No expenses found.</p>;

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;

//Stavio sam sada props.items, jer ovde nemam filterExpenses, zato mora props.items. I to sam sve stavio u neodredjenu listu, to je ovo "ul"
//Dodelio sam im imena za stilizaciju i prvo sam proverio da li je duzina jednaka 0, a ako jeste samo mi se ispise greska. To se zove guard class u JS
//Uvezao sam ExpenseItem, jer mi treba dole za podatke
//Odem u fajl ExpenseItem.js i stavim gde je naredba return odredjenu list (li) i u nju ubacim ceo kod koji tu imam. Cisto radi estetike
