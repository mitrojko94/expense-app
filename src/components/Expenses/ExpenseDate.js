import "./ExpenseDate.css";
import Expenses from "./Expenses";

function ExpenseDate(props) {
  //Treba mu parametar props, da bi ekstraktovao podatke
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;

//A CLOSER LOOK AT JSX

//Otvorim konzolu, idem u tab source i otvorim neki js fajl i tu mogu da nadjem moju f-ju, samo sto ce biti drugacija nego sto sam je ja kucao. To je zato sto pretrazivac ne podrzava JSX kod
//Na internetu dobijem kod koji je transformisan vec
//Mozemo da napisemo kod koji ce biti razumljiviji ljudima za citanje, ali opet nece biti tako razumljiv kao JSX kod

//U fajlu package.json imam dva dependencies koja imaju veze sa Reactom(React, React-dom). React-dom koristim u index.js fajlu, dok samo React ne koristim nigde
//Pre je u svakom fajlu moralo da se ucita 'import React from "react"', tj. u svakom fajlu gde se koristi JSX, jer je zapravo JSX samo sintakticki secer. To se transformise u metode koje su pozvane od strane React objekta, zato smo morali pre da importujemo React

//Kod bez upotrebe JSX sintakse!

//Prvi parametar element koji treba biti kreiran, na primer div(ako je u pitanju HTML element, samo prosledim to ime u vidu stringa)
//Drugi parametar je objekat koji konfigurise ovaj element, objekat koji postavlja sve atribute ovog elementa
//Treci parametar je sadrzaj izmedju otvorenih i zatvorenih div tagova. Ne mora da bude zadnji parametar, jer moze biti mnogo parametar koji imaju neki sadrzaju izmedju otvorenih i zatvorenih tagova, kao i primeru ispod
//Ako je element koji se kreira od neke druge komponente, samo prosledim ime te komponente, bez stringa. I ako taj element ima neke atribute, prosledim ih kao key-value par
//Ovako se kreira kod automatski, ispod haube, kad se koristi JSX kod
// return React.createElement(
//   "div",
//   {},
//   React.createElement("h2", {}, "Neki string"),
//   React.createElement(Expenses, { items: expenses })
// );

//Uvek je potrebno imati neki wrapper, tipa div, jer je moguce kreirati samo jedan element i vratiti ga, a u okviru tog elementa mozes imati jos mnogo elemenata
