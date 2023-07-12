var breedInputEl = document.querySelector(".search-breed");
var breedForm = document.querySelector("#breed-input");
var dogBtn = document.querySelector("#dog-btn");
var searchHistory = JSON.parse(localStorage.getItem("search")) || [];
var name = 'golden retriever';


// get user answer from breed input
function getBreedInput(event) {
    event.preventDefault();
    var searchTerm = breedInputEl.value;
    getInfoByDogBreed(searchTerm);
    localStorage.setItem("search", JSON.stringify(searchHistory));
    console.log(searchTerm)
}

function getBreedInputCat(event) {
    event.preventDefault();
    var searchTerm = breedInputEl.value;
    getInfoByCatBreed(searchTerm);
    localStorage.setItem("search", JSON.stringify(searchHistory));
    console.log(searchTerm)
}
// get user input from dropdown
    // if dog
        // display dog breed data
        function getInfoByDogBreed(breedName) {
            fetch('https://api.api-ninjas.com/v1/dogs?name=' + breedName, {
                method: 'GET',
                headers: { 'X-Api-Key': 'ClM+4cVtO1YtwmOO8xz1jw==0CKehjLoj6PIJUqT'},
                contentType: 'application/json',
                success: function(result) {
                    console.log(result);
                }
            })
                .then(function(response) {
                    return response.json();
                })
                .then(function(breedData) {
                    console.log(breedData);
                })
        }

    // if cat
        // display cat breed data
        function getInfoByCatBreed(breedNameCat) {
            fetch('https://api.api-ninjas.com/v1/cats?name=' + breedNameCat, {
                method: 'GET',
                headers: { 'X-Api-Key': 'ClM+4cVtO1YtwmOO8xz1jw==0CKehjLoj6PIJUqT'},
                contentType: 'application/json',
                success: function(result) {
                    console.log(result);
                }
            })
                .then(function(response) {
                    return response.json();
                })
                .then(function(breedDataCat) {
                    console.log(breedDataCat);
                })
        }



// if selected option is dog, run dog breed api
if (document.querySelector("#pet-select").value == 'dog') {
    breedForm.addEventListener("submit", getBreedInput);
}

// if selected option is cat, run cat breed api
if (document.querySelector("#pet-select").value == 'cat') {
    breedForm.addEventListener("submit", getBreedInputCat);
}


















//     var apiKey = "h7s4Gq1eIM4zJOxaVd3OOV5kHKIcXVbqFCHdy5iNSlg5V9GMoq";
// var secret = "FLdWlxWwNby81UM3FUDmkDgiU7RfB1LiwF2fpvsZ";

// fetch("https://api.petfinder.com/v2/animals?type=dog&location=94109&distance=20", {
//     headers: {
//       Authorization: "Bearer h7s4Gq1eIM4zJOxaVd3OOV5kHKIcXVbqFCHdy5iNSlg5V9GMoq",
//       "Content-Type": "application/json"
//     }
//   })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

