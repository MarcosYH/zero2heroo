import ApexCharts from 'apexcharts';
import React, { useEffect, useState } from 'react';

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const generateRandomData = (length) => {
  return Array.from({ length }, () => Math.floor(Math.random() * 10) + 1);
};

const StatsCard = () => {
  const [view, setView] = useState('week');

  useEffect(() => {
    const colors = generateRandomColor();
    let categories, titleText, data;

    if (view === 'week') {
      categories = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
      titleText = 'Nombre de cours suivis (par semaine)';
      data = generateRandomData(7);
    } else if (view === 'month') {
      // Ajoutez des données pour chaque jour du mois
      categories = Array.from({ length: 30 }, (_, i) => `Jour ${i + 1}`);
      titleText = 'Nombre de cours suivis (par mois)';
      data = generateRandomData(30);
    } else if (view === 'year') {
      // Ajoutez des données pour chaque mois de l'année
      categories = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
      titleText = 'Nombre de cours suivis (par année)';
      data = generateRandomData(12);
    }

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
        categories: categories,
      },
      yaxis: {
        title: {
          text: titleText,
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

    return () => {
      chart.destroy();
    };
  }, [view]);

  return (
    <div>
      <div id="column-chart"></div>
      <div className=' text-center'>
        <button className=' p-2 bg-gray-400 rounded-md text-white mr-4' onClick={() => setView('week')}>Semaine</button>
        <button className=' p-2 bg-gray-400 rounded-md text-white mr-4' onClick={() => setView('month')}>Mois</button>
        <button className=' p-2 bg-gray-400 rounded-md text-white mr-4' onClick={() => setView('year')}>Année</button>
      </div>
    </div>
  );
};

export default StatsCard;
