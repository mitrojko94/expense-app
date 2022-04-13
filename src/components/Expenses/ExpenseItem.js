//Komponenta u Reactu je samo JS f-ja. Komponenta se pravi kombinacijom HTML, JS i CSS-a
//Ime f-je skoro uvek da bude kao ime fajla. To je jako pozeljno
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
//import { useState } from "react"; //Ova f-ja useState nam omogucava da definisemo vrednosti kao state gde ce se promena ovih vrednosti odraziti na komponentu f-ju kad je pozvana opet

function ExpenseItem(props) {
  //Uvek dobijam jedan parametar u React komponenti. Taj jedan parametar ce biti objekat koji sadrzi sve atribute kao properties. Moze se nazvati kao hoce, ali obicno je props da se kaze da je to objekat koji sadrzi sve vrednosti koje dobijamo za atribute
  //U props objektu dobijamo key-value parove, sto radi React automatski. key ce biti imena atributa definisana u App.js(misli se na title, amount, date), a value ce biti njihove vrednosti
  //key kom pristupam ovde, moram biti ime u fajlu App.js, bas isto ime, u suprotnom nece raditi
  //U JS, za datume, mesec krece od 0, tako da je 0 januar
  //   const expenseDate = new Date(2022, 3, 9);
  //   const expenseTitle = "Car Insurance";
  //   const expenseAmount = 294.67;

  //   const month = props.date.toLocaleString("en-US", { month: "long" });
  //   const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  //   const year = props.date.getFullYear();

  //Imperativni nacin u JS - ne koristi se ovako u Reactu
  //document.getElementById("root").addEventListener()

  //useState

  //Funkciju useState koristim unutar f-je ExpenseItem, unutar komponente. useState je jedan od React hooks koji su veoma bitni. Svi se lako prepoznaju, jer pocinju sa recju use i svi oni moraju biti pozvani unutar componente f-je, u ovom slucaju ExpenseItem
  //Ne smeju biti pozvani van komponente f-je, kao ni u nekoj ugnjezdenoj f-ji
  //Vraca nam f-ju koju cemo pozvati kad hocemo da dodelimo novu vrednost varijabli. Prosledim nove vrednosti kad pozivam f-ju, ne pomocu =, tipa title="Janko". Ovako rade state varijable
  //useState vraca niz, gde je prva vrednost sama varijabla, drugi element je ta update f-ja. Za to koristimo razbijanje niza, kao u liniji koda 30, na to se misli. Imena su proizvoljna, ali je praksa da prvi element bude nesto sto opisuje vrednost(u ovom slucaju je to value), a onda f-ja set_ponovljeno ime prvog elementa, samo sa velikim prvim slovom
  //useState uvek vraca niz sa tacno dva elementa i uvek je prvi element trenutna vrednost, drugi element f-ja za azuriranje
  // const [title, setTitle] = useState(props.title); //title se odnosi na props.title(vrednost sacuvana u props.title), setTitle je f-ja koju mogu pozvati kasnije da postavim novi title
  // console.log("ExpenseItem evaluated by React!");

  //Detaljnije objasnjenje useState
  //Posto u fajlu Expenses.js imam 4 puta ExpenseItem, onda ce mi 4 puta biti kreirani novi state. To znaci da ako promenim naslov u prvom ExpenseItemu ostali se ne menjaju, jer imaju svoj state
  //Ako dodam u liniji koda 32 console.log("neki test"), ovaj tekst ce biti ispisan u konzoli uvek kada se komponenta f-je izvrsi, a ako kliknem na promeni tekst, samo jednom ce se desiti ispis tog teksta, jer se samo jednom pokrenula komponenta f-je
  //State je odvojen po svakoj komponenti instance!
  //Kad koristim useState govorim React da treba da upravlja sa nekom varijablom, nikad je mi ne vidimo
  //Pozivamo f-ju, a nikad ne dodeljujemo novu vrednosti title, tipa title="Don Kihot" i onda upotreba const je prosto u redu. Da dodeljujem neku vrednost pomocu =, onda bi bila greska
  //Dobijam novu vrednost zato sto kad god se pokrene komponenta f-je ponovo ,pokrene se i linija koda 31
  //Kad pozovem setTitle i dodelim novu vrednost, dolazi do toga da se komponenta f-je pozove ponovo i onda novi title je preuzet od React. Bukvalno, odemo u React i kazemo "daj mi taj poslednji naziv koji sam ti rekao da rukujes za mene". On daje taj state u nizu, koji useState uvek vraca
  //React prati kad pozivamo useState prvi put. Ako pozovem prvi put uzece argument kao vrednost(misli se na props.state) i ako se komponenta f-je ponovo izvrsi, tipa da promenimo State, React nece ponovo inicijalizovati State. Detektovanje da se State inicijalizovao u proslosti i uzeceu poslednji State(koji je baziran na nekom State update) i dace nam taj State
  //Ova vrednost props.title(inicijalna vrednost) uzima se u obzir samo kada se komponenta f-ja izvrsi prvi put, za datu instancu komponente

  //Registrujem State pomocu useState, uvek dobijem dve vrednosti nazad(samu vrednost i f-ju za azuriranje)
  //Pozivam f-ju za azuriranje kad god State treba da se menja, koristim prvi element kad god hocu da koristim State vrednost(tipa da prikazem nesto u JSX kodu), u JSX kodu ga koristim
  //React ponovo izvrsava, pokrece komponentu f-je i ponovo se srece sa JSX kodom kad god se State promeni i na ekranu prikazuje promene
  //React daje reaktivnost nasoj aplikaciji, jer bez njega, nasa aplikacija bi bila staticna

  //Definisem f-ju za klik pre naredbe return. Uvek da se ime varijable koja sadrzi f-ju zavrsi sa recju Handler, to je praksa
  // const clickHandler = () => {
  //   //Pozivanje ve f-je ne dodeljuje se samo nova vrednost nekoj varijabli, vec pocinje sa specijalnom varijablom. Kad pozovem f-ju, ta specijalna varijabla nece samo primiti novu vrednost, ali komponenta f-ja u kojoj je pozvana ova f-ja za azuriranje, bice ponovo izvrsena
  //   //Kad pozovem ovu f-ju to govori Reactu da hocu da dodelim novu vrednost ovom state i da komponenta u kojoj je state registrovan pomocu useState treba ponovo da se izvrsi(pokrene)
  //   //React onda ponovo izvrsava ovu komponentu f-je i susrece se sa JSX kodom i sve promene koje detektuje u odnosu na prethodni put prikazuje na ekranu
  //   setTitle("Updated!");
  //   console.log(title); //Izbacuje mi u konzoli vrednosti koje su pre bile, jer ova f-ja ne menja odmah vrednosti, vec zakazuje azuriranje state
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>Title: {props.title}</h2>
          <div className="expense-item__price">Amount: ${props.amount}</div>
        </div>
        {/*Ovo dodaje eventListener na dugme, da reaguje na klik. Prosledim mu value koja je uvek kod koji ce biti izvrsen kad se klikne dugme. Uvek je ta vrednost neka f-ja, to treba da mu prosledimo*/}
        {/*Nikad ne stavljam zagrade f-ji, jer ako ih stavim JS izvrsice ovu f-ju kad se ova linija koda parsira, a to se parsira kad se JSX kod vrati. To je previse rano, zato ide bez zagrada*/}
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
}

//Eksportovao sam ime f-je, da bih mogao da koristim. Posto je export default, prilikom importa moze biti bilo koje ime
export default ExpenseItem;

//U React fajlovima uvek moram imati jedan root element po returnu, tipa moram imati samo return div, ne mogu imati return div, div i slicno. To nije dozvoljeno, da ima vise root elemenata po returnu
//Da bih resio taj problem, stavim sve to u jedan div, stavim u zagrade sve to i radice. Kao sto je uradjeno u primeru iznad
//Jako je bitno imati samo jedan root element, a u okviru njega, moze biti mnogo elemenata

//U Reactu kad hocu da dodam neki css fajl, importujem samo putanju do njega i dole kad stavljam u kod, ne koristim class, vec className
//To je zato sto ovo nije cist HTML, lici na njega, ali to je specijalna sintaksa JSX uvedena od strane React tima. Ali na kraju, je i dalje JS kod, zato su neki atributi isti. Nije class, jer to sluzi za oznaku klase u JS, zato je className
//Radice i sa class, ali uvek koristiti className

//Stavim iznad naredbe return neke varijable sa podacima i ubacim te varijable u naredbu return, pomocu React sintakse za to, a sintaksa je {ime_varijable}
//U {} mogu da stavim sta god, bice pokrenuto na ekranu, tipa 1 + 1 ili Math.random()

//U liniji koda 13, stavio sam expenseDate.toISOString(), jer dobijam Date kao objekat, nemam nista na ekranu, a moram da koristim metodu toISOString(), da bih konvertovao u string i da bih imao ispis na ekranu

//props = properties
//Podaci ne bi smelo da se smestaju ovde, vec da se uvezu spolja. Sacuvati podatke u fajl App.js i odatle ih uvesti ovde, pomocu props
//props se koristi stalno i jako je u upotrebi, jer omogucava prenos podataka iz jedne komponente u drugu

//Prvi parametar je jezik na koji cu da postavim(tipa "en-US"), drugi parametar je objekat koji podesavam kako ce da bude formatiran(tipa month: "long"). Ovde se sve odnosi na metodu toLocalString(), linija koda 17
//Ovo je najbolje raditi iznad naredbe return, tako sto to sve staviti u neku varijablu, uraditi sta hoces i posle dole pozvati tu varijablu. Tako sam ja uradio u primeru iznad

//Nije bitno kada cemo praviti novu komponentu, ali je pozeljno da tima ako imamo neki element ovde(tipa date), a on ima jos neke pomocne konstante, imace dodatni stil, to treba staviti u novu komponentu

//Ako imam komponente koje nemaju sadrzaj izmedju otvorenog i zatvorenog taga, moguce je napisati samo, tipa <ExpenseDate />. Ovako koristiti, pozeljno je

//U liniji koda 21 stavio sam date={props.date}, jer sam prosledio podatke iz komponente ExpenseDate.js u komponentu ExpenseItem.js. To je uloga propsa. Naravno, ime koje stoji u ExpenseDate mora biti ime koje se prosledjuje u ExpenseItem

//Posto sam uvezao Card i stavio za glavni div umesto div card, onda cu dobiti predefinisani stil za Card automatski
//Kad ucitam nece se pojaviti nista, jer ne mogu da se koriste van boksa komponente kao wrappers

//Kako React parsira JS kod, kako ga prikazuje na ekranu?
//Komponenta je f-ja. Jedino specijalno u vezi nje je to sto vraca JSX kod. Posto je to f-ja, neko mora da je pozove. Mi je nismo ni jednom pozvali, vec koristili kao HTML elemente u JSX kodu
//Koristeci nase komponente u JSX kodu, cinimo React svesnim nasih komponenti f-ja. Tipa, svesni smo nase ExpenseItem f-je i fajlu Expenses.js
//Kad god React ocenjuje ovaj JSX kod, on ce pozvati ove komponente f-ja. Te komponente f-ja vraca JSX kod, koje se takodje ocenjuju, sve dok ne bude vise JSX koda za ocenjivanje
//React poziva bilo koju f-ju komponente koju moze sresti u JSX kodu, onda poziva bilo koju f-ju koju te f-je mogu vratiti(bilo koji element koji te f-je mogu koristiti u svom JSX kodu) sve dok ne bude vise f-ja

//Primer u fajlu Expenses.js
//React ocenjuje ove ExpenseItem, poziva ExpenseItem komponentu f-je, izvrsava sav kod u njoj, susretne se sa JSX kodom, poziva Card f-ju i ovu ExpenseDate komponentu f-je
//Zatim ide kroz ceo JSX kod u tim komponentama(misli se na ExpenseDate i Card) sve dok nema vise komponenti koda za pozivanje
//Onda ponovo ocenjuje ceo resultat i prevodi ga u DOM instrukcije i nesto nam se prikazuje na ekranu(kao sto ja imam ovde). Tako React radi
//Sve pocinje u fajlu index.js gde upucujemo na app komponentu. To je prva komponenta f-je koja ce biti pozvana i to se desava kad je React app ucitana na ekranu, sto se desava kad je neko posetio stranicu
//Tako React ide kroz komponente, izvrsava sve komponente f-je i crta(prikazuje) nesto na ekranu. Jedini problem je sto React nikad ne ponavlja to
//React ide kroz sve to kad je aplikacija doneta, ali posle toga je gotovo, nema azuriranja
//Da bi to mogli da uradimo sa Reactom, tj. da promenimo neko stanje, tipa neko je kliknuo na dugme, pa da se promeni neki text ili boja, za to nam je potreban specijalan koncept "state"
