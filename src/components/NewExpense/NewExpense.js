//Namenjeno za formu koju korisnik unese
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  //Prikazivanje dugmeta, za dodavanje novih podataka, ali da ima i cancel dugme u formi
  //U formi sam stavio da je dugme za cancel type="button" da ne bi slalo nikakvu formu, zato nije tipa submit, vec cancel
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false); //Stavio sam odmah ovde da je false, da bi na pocetku, po ucitavanju stranice bilo false
  };

  //Handler za rukovanje tim dugmetom(Add New Expense). Koristim da kad kliknem dugme, da se pojavi forma za upisivanje
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  //Ako je false onda mi se prikaze samo dugme, to je ovo !isEditing, a ako je true, onda mi se prikaze forma, to je ovo isEditing

  return (
    //Stavio sam ovde dugme za dodavanje forme koje kad se klikne treba da prikaze formu. Ako je isEditing = True(napisano samo isEditing u kodu) prikazuje se forma
    //A ako je !isEditing prikazuje se samo dugme
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;

//Ime je proizvoljno(linija koda 16), ali uvek pocinje sa on, jer ovo govori da vrednost za ovaj props treba da bude f-ja koja onda moze biti pozvana unutar ExpenseForm komponente
//U liniji koda 6 stavim bilo koje ime varijable, kojoj dodelim f-ju sa parametrom(taj parametar su nasi podaci, podaci koje korisnik unese pomocu forme)
//Tu proizvoljnu varijablu pozovem u liniji koda 16

//Kad hocu da povezem dete i roditelja, prosledim ovde kao parametar props i pozovem props.ime_f-je u fajlu roditelja i prosledim kao parametar nase podatke(to je ovo expenseData)

//Ako hocu da prenesem neke podatke iz jedne u drugu komponentu, a one nisu povezane, niti su roditelj-dete i obrnuto, za to koristim najblizu komponentu roditelja koja je u direktnoj ili indirektnoj vezi sa obe komponente
//U ovom slucaju to je App komponenta, jer ima pristup i NewExpense i Expenses komponenti, jer prikazuje obe komponente u vracenom JSX kodu
//Mi sada mozemo da sacuvamo nas State u toj najblizoj roditeljskoj komponenti koja ima pristup obema komponentama pomocu "lifting" dizanja naseg state gore tj. slanju naseg state iz NewExpense u App komponentu

//Mi te podatke smo prosledili u komponentu App(roditelja) i onda odatle te podatke saljemo pomocu props u drugu komponentu(klasicna veza roditelj-dete)

//Lifting State Up znaci slanje podatka iz komponente deteta u komponentu roditelja da se koristi tu ili da se prosledi odatle nekoj drugoj komponenti deteta
//Lifting up radim onoliko koliko je potrebno tj. dok ne dodjem do komponente koja ima pristup obema komponentama koje generisu podatke, kao i komponentama koje traze te podatke, trebaju im
