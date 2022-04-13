import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); //Pretvara objekat u brojeve. Tako da kad sam stavio dataPoint.value, to znaci da sam pretvorio dataPoint objekat u broj
  const totalMaximum = Math.max(...dataPointValues); //Stavio sam spread operator da bih imao svih 12 vrednosti izvucenih izvucenih iz niza, da bi na svakom Chart-u bio pokazan maks

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

//Ovde sam stavio da imam polja za value, label koja su dataPoint.value, key koji moze biti dataPoint.label ili dataPoint.id, to je jedinstvena vrednost koja mora biti
//maxValue je null, jer to predstavlja najvecu vrednost svih meseci, stavio sam null, jer nemam vrednost
//Kad je dobijem, onda stavim da je maxValue jednak nekoj varijabli koja sadrzi taj nas maksimum
