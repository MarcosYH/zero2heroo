import ApexCharts from 'apexcharts';
import React, { useEffect } from 'react';

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Traficcard = () => {
  useEffect(() => {
    const colors = [generateRandomColor(), generateRandomColor(), generateRandomColor()];

    const chartOptions = {
      series: [Math.random() * 100, Math.random() * 100, Math.random() * 100],
      colors: colors,
      labels: ['Parcours 1', 'Parcours 2', 'Parcours 3'],
      chart: {
        type: 'pie',
        height: 420,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };

    const chart = new ApexCharts(document.getElementById('pie-chart'), chartOptions);
    chart.render();

    // Cleanup on component unmount
    return () => {
      chart.destroy();
    };
  }, []); // Empty dependency array means this effect will run once after the initial render

  return <div id="pie-chart"></div>;
};

export default Traficcard;
