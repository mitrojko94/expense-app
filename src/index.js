import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App"; //App je komponenta

const root = ReactDOM.createRoot(document.getElementById("root")); //Govori gde aplikacija napravljena pomocu Reacta treba biit smestena na web stranici. Govori gde ce biti smesten nas sadrzaj
root.render(<App />); //Ovo ne radi u normalnoj JS, ali je ovde transformisano i radi. Ovo je sintaksa JSX. Govori sta treba biti ucitano u tom divu, koji smo selektovali u liniji koda iznad. Bukvalno ovaj App je sada popunio prazan div u folderu public, fajlu index.html

//Ovo je prva stranica koja se ucita kad se pokrene server. To nije bas taj kod, nego je ovo transformisana verzija koda
//Importujemo ReactDOM objekat iz third-party biblioteke, koja se nalazi u package.json, u dependencies. Importujemo ga ovde
//U folderu public imam jedan bitan fajl, to je index.html. I taj fajl je jedini html fajl u React aplikacijama. On ima u body tagu jedan div, koji ima id="root" i on je prazan. To je div gde cemo ubacivati sadrzaj koji napravimo sa Reactom
//Znaci, korisnicki interfejs kad se napravi bice smesten u div koji ima id="root" u folderu public, fajlu index.html
//Ako importujemo iz third-party library ili iz nekog drugog JS fajla, ne moram da imam ekstenziju na kraju, dok za sve druge fajlove moram

//Ovde ne importujemo ostale fajlove sa nasim komponentama, jer to radimo samo sa nasim root komponentom(misli se ovde na App.js)
