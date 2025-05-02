<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Minecraft Server Dashboard</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1>Minecraft Server Holati</h1>
    <p><strong>Status:</strong> <span id="status">Yuklanmoqda...</span></p>
    <p><strong>O‘yinchilar:</strong> <span id="players">-</span></p>
    <button onclick="checkServer()">Yangilash</button>
  </div>

  <script src="script.js"></script>
</body>
</html>
body {
  font-family: Arial, sans-serif;
  background-color: #2c3e50;
  color: #ecf0f1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  background-color: #34495e;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px #000;
  text-align: center;
}

button {
  padding: 10px 20px;
  background-color: #27ae60;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  }
function checkServer() {
  // Mana bu qismni haqiqiy API bilan alishtiramiz
  fetch("https://api.mcsrvstat.us/2/play.example.com")
    .then(res => res.json())
    .then(data => {
      document.getElementById("status").textContent = data.online ? "Online" : "Offline";
      document.getElementById("players").textContent = `${data.players.online} / ${data.players.max}`;
    })
    .catch(() => {
      document.getElementById("status").textContent = "Xato!";
      document.getElementById("players").textContent = "-";
    });
}

checkServer(); // Sahifa yuklanishda chaqiriladi
