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

const generateRandomData = (length, totalCourses) => {
  return Array.from({ length }, () => Math.floor(Math.random() * totalCourses) + 1);
};

const StatsCard = ({ totalCourses }) => {
  useEffect(() => {
    const colors = generateRandomColor();
    const categories = Array.from({ length: totalCourses }, (_, i) => `Cours ${i + 1}`);
    const titleText = 'Nombre de cours suivis';

    const data = generateRandomData(totalCourses, totalCourses);

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
  }, [totalCourses]);

  return (
    <div>
      <div id="column-chart"></div>
    </div>
  );
};
 
export default StatsCard;
