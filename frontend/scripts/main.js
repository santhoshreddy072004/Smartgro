// Replace with your backend server's URL
const backendUrl = "http://localhost:3000";

const updateSensorData = async () => {
  try {
    const response = await fetch(`${backendUrl}/read`);
    const data = await response.json();

    // Update DOM elements
    document.getElementById("temperature").textContent = data.temperature;
    document.getElementById("humidity").textContent = data.humidity;
  } catch (error) {
    console.error("Error fetching sensor data:", error);
  }
};

const activateWaterPump = async () => {
  try {
    const response = await fetch(`${backendUrl}/control`, { method: "POST" });
    const result = await response.json();
    alert(result.message);
  } catch (error) {
    console.error("Error activating water pump:", error);
  }
};

document.getElementById("waterButton").addEventListener("click", activateWaterPump);

// Refresh sensor data every 5 seconds
setInterval(updateSensorData, 5000);
updateSensorData();
