let chart;
const ctx = document.getElementById("tempChart").getContext("2d");

// Function to update the chart with new data
function updateChart(temp) {
  // If chart already exists, destroy it
  if (chart) {
    chart.destroy();
  }

  // Generate temperature data based on the current temperature
  let tempData = [
    temp - 2,
    temp - 1,
    temp,
    temp + 1,
    temp + 2,
  ];

  // Chart labels (can be days of the week)
  let labels = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  // Create a new chart with updated data
  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Temperature (°C)",
          data: tempData,
          borderColor: "#005577",                  // Darker blue
        backgroundColor: "rgba(0,85,119,0.4)",    // Dark fill
        pointBackgroundColor: "#002233",          // Darker point fill
        pointBorderColor: "#00ccff",              // Visible point border
          tension: 0.4,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: "#cccccc"   
          },
        },
      },
      scales: {
        x: {
              ticks: { color: "#dddddd" },
          grid: { color: "#444444" }
        },
        y: {
          ticks: { color: "#dddddd" },
          grid: { color: "#444444" }
        },
      },
    },
  });
}










