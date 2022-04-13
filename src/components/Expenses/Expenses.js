import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../NewExpense/ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //Filtriranje godina, pa da se prikaze sadrzaj
  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {/*Dodajem ovde ChartBar */}
        {/*Stavio sam expenses, jer to ocekuje expenses, to nam stoji u fajlu ExpensesChart.js, gde on trazi podatke u props.expenses, zbog toga ide expenses ovde */}

        <ExpensesChart expenses={filterExpenses} />

        {/*RENDERING LISTS OF DATA*/}
        {/*Kako se ubacuje da strane budu dinamicke, a ne hard-coded. Bitna lekcija*/}
        {/*Sad cu da nas niz koji je u objektu, to je fajl App.js, pa nasi podaci, da prebacim ovde u map() i da budu dinamicki */}
        {/*Prosledim proizvoljan parametar metodi map i pozovem posle samo komponentu ExpenseItem, koja sadrzi nase podatke i pozovem pomocu expense posle nase podatke */}
        {/*Stavio sam umesto props.items filterExpense, jer time mogu godinu da menjam */}

        {/*OUTPUTTING CONDITIONAL CONTENT
        Conditional Content je prikazivanje razlicitog sadrzaja pod razlicitim uslovima. Tipa prikazujem stranicu A, B ili C, zavisi sta meni treba
        Ako nam je taj sadrzaj prazan, ne prikazujem nista. Da bih to promenio, da prikazem poruku da nemam nista, moram da napravim neki uslov. To je u sledecoj liniji koda */}
        {/*Koristim ternarni operator da to resim, kao sto se vidi u kodu ispod */}
        {/*Mogu da stavim i pomocu and operatora(&&). Jer ako je uslov netacan, on preskace prvi element i odmah izvrsava sledeci. Misli se da preskace poruku za gresku i da izvrsava kod koji ima podatke */}
        {/*Ako je uslov tacan, on ce odmah ispisati kod ili tekst posle AND operatora(&&) */}

        {/* II NACIN */}
        {/* {filterExpenses.length === 0 && <p>No expenses found.</p>}
        {filterExpenses.length > 0 &&
          filterExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}

        {/* III NACIN */}
        <ExpensesList items={filterExpenses} />

        {/* I NACIN */}
        {/* {filterExpenses.length === 0 ? (
          <p>No expenses found.</p>
        ) : (
          filterExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}

        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;

//Alternativna sintaksa funkcija
//Pomocu arrow f-ja se to radi, primer kod ispod:
//const App = () => {}
