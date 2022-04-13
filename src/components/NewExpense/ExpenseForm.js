import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  //Da bih sacuvao te podatke koje unosi korisinik, opet koristim useState. Stavio sam "", jer kad se ucita, nista se ne unosi
  //Moguce je koristiti useState vise od jednom, tj. moguce da je imam vise States po komponenti f-je. Svi ti States u okviru jedne komponente ce biti odvojeni jedan od drugog. To znaci da ako azuriram title suma nece biti azurirana i obrnuto
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState(""); //Stavio sam kao parametar useState prazan string, jer je uvek string. Iako sam ja stavio da je type="number", on uvek vraca string

  //Upotreba samo jednog Steta za vise inputa, umesto tri Stetea
  //Razlika je sto kad hocu da azuriram State, moram da azuriram sva tri, umesto samo jednog
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  //Klasican JS kod
  //document.getElementById("").addEventListener("click", (event) => {})

  //Funkcija za forme, za title. Uvek gledati da se zavrsava ime f-je sa Handler, to je neka praksa
  const titleChangeHandler = (event) => {
    //console.log(event);
    setEnteredTitle(event.target.value); //Trenutna uneta vrednost kao parametar i ovako je sacuvavam

    //Koriscenje jednog Stetea, linija koda 28
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,

    //Upotreba alternative za State. Prosledim arrow f-ju ovoj f-ji. Ova f-ja koja je prosledjena(arrow), odmah ce biti izvrsena od strane Reacta i kao parametar prima prethodni State za State za koji pozivam f-ju azuriranja
    //Pod ovim prevState misli se na nas objekat koji sam napravio, linija koda 14, 15, 16
    //Uvek raditi ovako kao sto je dole(linija koda 38-40), a ne kako je radjeno pre(linija koda 28-30), jer React zakazuje azuriranja Statea, ne radi to odmah
    //Ako zakaze dosta azuriranja Statea u isto vreme, mogu dobiti nekoretne i netacne podatke, ako koristim pristup iznad(linija koda 28-30). Ako se koristi pristup dole ispod(linija koda 36-38) React garantuje da ce State koji on daje u f-ji uvek biti poslednji
    //Kad god mi azuriranje Statea zavisi od prethodnog Statea uvek da koristim sintaksu koja je ispod, linija koda 38 - 40

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
    // // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  //Funkcija za formu
  //Desi se da kad pritisnem dugme da se stranica sama ucitava ponovo, jer pretrazivac automatski salje zahtev kad je forma aktivirana(pritisnuto dugme) ka serveru
  //Za to koristimo preventDefault da se ne posalje zahtev i posto zahtev nije poslat, stranica se nece ponovo ucitati
  //Imena title, amount, date su proizvoljna, zavisi od mene, dok vrednosti ovde(enteredTitle, enteredAmount, enteredDate) upucuje na varijable sa Stateom
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

//Posto sam u liniji koda 17 stavio type="date" imaju mogucnost da biram datum
//U liniji koda 9 stavio onChange da reagujem na svaku promenu, kad korisnik unese nesto. Prednost tog eventa je sto moze da se koristi za sve vrste inputa

//Moguce je naravno koristiti tri Statea i radice, a takodje, ima i resenje, da se koristi samo jedan State umesto tri
//Kako se to radi, pogledaj u liniji koda 10, pa sve do linije koda 49. To je alternativa upotrebi vise Stetea u jednoj komponenti f-je
//Obicno se vise koristi upotreba vise Stetea po jednoj komponenti f-je

//Kad god azuriram Steta i zavisim od prethodnog Stetea(tipa kao imam brojac koji povecavam za 1) ne treba da radim i da koristim useState kao sto je to uradjeno od linije koda 28 do linije koda 30

//Ako imam dugme koje je type="submit", jos je to za formu, forma ce sama da aktivira dogadjaj koji mozemo da slusamo i to je submit event(onSubmit). Kad god se forma popuni, pritisne dugme submit, aktivira se neka f-ja

//Two-ways binding jer ne slusamo samo da li imamo promena u input polju, vec vracamo State nazad u input, tako da kad promenim State promenimo i input
//Prednost je da kad je forma poslata(pritisnuto dugme) mozemo da pozovemo tipa setEnteredTitle("") i postavimo vrednost na prazan string, sto je i bilo na pocetku
//Radeci ovo mi override onog sto je korisnik uneo nakon sto je forma poslata i onda imamo prazan input

//Slanje podatka izmedju roditelja i deteta je moguce pomocu props
//Mozemo napraviti svoje props, kojima cemo isto proslediti f-ju i koja ce omoguciti da prosledimo f-ju od komponente roditelja ka komponenti deteta i onda pozvati tu f-ju unutar komponente deteta
//Kad pozovemo tu f-ju mozemo joj proslediti podatke kao parametar i tako se komunicira izmedju roditelja i deteta
