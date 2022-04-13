import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

//USING STATEFUl LISTS
//Uvezem useState iz React biblioteke i stavim u neku varijablu ceo niz koji sadrzi expenses
//U f-ji App koristim useState i prosledim kao parametar varijablu koja sadrzi podatke(sadrzi expenses)
//Opet razbijem na niz ovaj useState, stavim neke proizvoljne varijable
const DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  //Regularan kod u JS. Zove se jos i imperative approach, jer ja dajem tacne instrukcije, korak po korak sta ce JS i pretrazivac uraditi
  // const para = document.createElement("p");
  // para.textContent = "This is also visible!";
  // document.getElementById("root").append(para);
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) => {
    // console.log("In App.js");
    // console.log(expense);
    //setExpenses([expense, ...expenses]); //Stavio sam prvi parametar novi expense(to je onaj koji korisnik unese) i posle sam stavio ...expenses, da se razbiju ostali expenses koji postoje
    //Koristi se ovo ispod, 2 linije koda, jer je bazirano na prethodnom stanju Statea
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />{" "}
      {/*Ovo expenses se sada odnosi na trenutni element, tj. prvi element u useState */}
    </div>
  );
};

export default App;

//JSX kod je zapravo HTML kod unutar JS
//JSX je zapravo JS XML
//Kad udjem u source u konzoli, vidim folder static/js koji sadrzi neke JS fajlove. Ti JS fajlovi sadrze kodove celog paketa React
//U tim fajlovima negde mora biti ime nase f-je(u ovom slucaju App), ali izgleda drugacije nego nasa ovde. To je kod koji se pokrece u pretrazivacu odnosno to jetransformisani kod nase f-je App
//Sa Reactom, koji ima declarative approach, mi samo definisemo zeljeni kraj, da zelimo div, h2 tag, paragraf i slicno i React ce sam da nam to pokaze na ekranu

//Ubacim u kodu, u f-ji App gde hocu nas kod iz uvezenog fajla, sacuvam i pokrenem server. Kad upisujem tu ime te f-je, koja je importovana, uvek mora biti veliko slovo

//Ako hocu da imam razlicite podatke, definisem ih u nizu, zatim dole gde sam stavio ime f-je koju uvozim stavim njihove podatke, kao sto je ovde uradjeno
//Moglo je ovde da se pise i hard-cod podaci, jer props podrzava i to, ali nije pozeljno

//UNDERSTANDING "KEYS"
//U Reactu kad se dodaje novi element na kraj liste ili azuriraju svi podaci i zamenjuje njihov sadrzaj dolazi do treperenja tog elementa(njegovog diva)
//To nije dobro, a desava se jer React gleda te nizove slicno i samo vidi kad se niz promenio, da je duzi nego pre. Onda prikaze poslednji div i doda ga na kraj i ide kroz sve podatke i azurira sadrzaj svakog od njih
//Rezultat na kraju je dobar, ali zbog performansi je los, jer su svi podaci poseceni i azurirani i to moze da dovede do gresaka
//Ovo se desava, jer React nema drugi nacin. Proverava duzinu niza i gleda koji je broj podataka koji su vec postojali. Svi podaci su slicni, tako da ne moze znati gde ce novi podatak biti dodat
//Zbog toga dobijamo gresku u konzoli, ali ima nacin da kazemo Reactu gde cemo dodati novi podatak
//Idemo u ExpenseItem tj. mesto gde smo stavili nase podatke da se prikazuju, gde je metoda map() i dodam specijalan prop tom sadrzaju
//To je prop "key". Ovo je prop koji mozemo dodati na bilo koju komponentu, nebitno da li je to komponenta od mene ili je napravljena u HTML elementu
//Ako dodam "key", onda pomazem Reactu da identifikuje individualne podatke. Za to moram da podesim jedinstvene vrednosti po podatku, tipa key={expense.id}, jer u nasem nizu, svaki podatak imam svoj id
//A ako nemam jedinsteven id, onda koristim drugi parametar metode map(), a to je trenutni index, ali se to ne preporucuje, jer moze da stvori greske, jer index je uvek isti, a nije direktno zakacen za sadrzaj svakog podatka
//Moze kao jedinstvena vrednost da se koristi i neki broj ili string
//Kad sam dodao key:{expense.id} i kad dodam novi podatak vise mi ne treperi prvi podatak u toj listi, vec samo zatreperi div koji je nov, koji je dosao sa tim podatkom i on se smesta na pocetak liste
//Uvek stavljati key, kad radimo mapiranje listi
