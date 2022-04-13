import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  //Ovo je formula kako se izracunava koliko ce biti vrednost tog CharBar-a
  //Stavio sam maxValue, jer mi se to odnosi na maksimalnu vrednost za mesece
  if (props.maxValue > 0) {
    barFillHeight = Math.fround((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
