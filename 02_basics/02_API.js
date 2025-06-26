//Hii here learn about API (JSON)
fetch("https://catfact.ninja/fact")
  .then(response => response.json())
  .then(data => console.log("Random Cat Fact:", data.fact))
  .catch(error => console.log("Error:", error));
