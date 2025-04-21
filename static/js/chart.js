let myChart;

function loadChart() {
    const chartType = document.getElementById('chartType').value;

    fetch(`/api/data?type=${chartType}`)
      .then(res => res.json())
      .then(data => {
          const ctx = document.getElementById('myChart').getContext('2d');

          if (myChart) {
              myChart.destroy();
          }

          myChart = new Chart(ctx, {
              type: chartType,
              data: {
                  labels: data.labels,
                  datasets: data.datasets
              },
              options: {
                  responsive: true,
                  plugins: {
                      tooltip: {
                          backgroundColor: '#333',
                          titleColor: '#fff',
                          bodyColor: '#eee'
                      },
                      legend: {
                          position: 'bottom'
                      }
                  },
                  scales: chartType !== 'pie' ? {
                      y: {
                          beginAtZero: true
                      }
                  } : {}
              }
          });
      });
}

window.onload = loadChart;
