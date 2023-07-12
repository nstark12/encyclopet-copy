var apiKey = "h7s4Gq1eIM4zJOxaVd3OOV5kHKIcXVbqFCHdy5iNSlg5V9GMoq";
// var secret = "FLdWlxWwNby81UM3FUDmkDgiU7RfB1LiwF2fpvsZ";

fetch("https://api.petfinder.com/v2/animals?type=dog&location=94109&distance=20", {
    headers: {
      Authorization: "Bearer h7s4Gq1eIM4zJOxaVd3OOV5kHKIcXVbqFCHdy5iNSlg5V9GMoq",
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));