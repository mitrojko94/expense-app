//U webu kad se cuje card to se odnosi na izgled kontejnera, sa senkama, ivicama i slicno
import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className; //Svaka vrednost koja je postavljena className props dodaje se na ovaj dugacak string
  return <div className={classes}>{props.children}</div>;
};

export default Card;

//children je rezervisano ime i vrednost njega ce uvek biti sadrzaj izmedju otvorenih i zatvorenih tagova custom komponenti
//Ovim sam dobio to sto sam izbrisao duplikat kodove iz CSS fajlova
//Takodje, uspeli smo da ekstraktujemo HTML kod(lidija koda 6). Uspevsi da ekstraktujemo, omogucavamo spanjenje duplikata koda

//Ovo je drugi aspekt "kompozicije". Mi sastavljamo sadrzaj ExpenseItema koristeci Car kao wrapper, koristeci neke ugradjene HTML elemente. Sve ove komponente i elementi su sastavljeni zajedno i na kraju prave ceo UI(korisnicki interfejs)
//Kad god kombinujem komponente, koristim kompoziciju
//Bitna stvar kompozicije je props.children osobina koja omogucava da se kreiraju wrapper komponente koje su specijalne vrste komponenti
