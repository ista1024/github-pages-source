window.chartColors = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(231,233,237)",
};

const randomScalingFactor = function () {
  return (Math.random() > 0.5 ? 1.0 : 1.0) * Math.round(Math.random() * 100);
};

const line1 = [
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
];

const line2 = [
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const config = {
  type: "line",
  data: {
    labels: MONTHS,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: window.chartColors.red,
        borderColor: window.chartColors.red,
        data: line1,
        fill: false,
      },
      {
        label: "My Second dataset",
        fill: false,
        backgroundColor: window.chartColors.blue,
        borderColor: window.chartColors.blue,
        data: line2,
      },
    ],
  },
  /*     options: {
    responsive: true,
    title:{
      display:true,
      text:'Chart.js Line Chart'
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
   hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Month'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
        },
      }]
    }
  } */
};

const ctx = document.getElementById("canvas");
const myLine = new Chart(ctx, config);
