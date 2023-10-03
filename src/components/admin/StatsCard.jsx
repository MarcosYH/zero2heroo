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

const generateRandomData = () => {
  return Math.floor(Math.random() * 10) + 1; // Génère un nombre aléatoire entre 1 et 10 pour représenter le nombre de cours suivis par jour
};

const StatsCard = () => {
  useEffect(() => {
    const colors = generateRandomColor();
    const data = Array.from({ length: 7 }, () => generateRandomData()); // Génère des données aléatoires pour 7 jours de la semaine

    const chartOptions = {
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: [colors],
      xaxis: {
        categories: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
      },
      yaxis: {
        title: {
          text: 'Nombre de cours suivie',
        },
      },
    };

    const chart = new ApexCharts(document.getElementById('column-chart'), {
      ...chartOptions,
      series: [
        {
          name: 'Cours suivis',
          data: data,
        },
      ],
    });
    chart.render();

    // Cleanup on component unmount
    return () => {
      chart.destroy();
    };
  }, []); // Empty dependency array means this effect will run once after the initial render

  return <div id="column-chart"></div>;
};

export default StatsCard;


 
