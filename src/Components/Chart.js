// src/Scripts/Dashboard.js
import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import feather from 'feather-icons';

function ChartDisp() {
  useEffect(() => {
    feather.replace({ 'aria-hidden': 'true' });

    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        datasets: [{
          data: [
            15339,
            21345,
            18483,
            24003,
            23489,
            24092,
            12034
          ],
          lineTension: 0,
          backgroundColor: 'transparent',
          borderColor: '#007bff',
          borderWidth: 4,
          pointBackgroundColor: '#007bff'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    });
  }, []);

  return (
    <div>
      <h1>Chart</h1>
      <canvas id="myChart" width="900" height="380"></canvas>
    </div>
  );
}

export default ChartDisp;
