import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); //Prvi mesec je 0, Januar je 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;

//Ovo props.expenses se misli na sve nase podatke u fajlu App.js. Stavio sam props da bih mogao da im pristupim
//Ovo dole je proizvoljna varijabla za dobijanje meseca i posle na taj mesec dodam sumu koja je postojala tj. ako je postojala
//Dole je return <Chart dataPoints={chartDataPoints} />, namerno je dataPoints, jer se to nalazi u fajlu Chart.js, jer props tamo upucuje na dataPoints, zato ide props.dataPoints
//dataPoints={chartDataPoints} jer su tu nasi azurirani podaci
