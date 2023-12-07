function printAlphabets() {
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let index = 0;

  function displayAlphabet() {
    const alphabet = alphabets[index];
    document.getElementById("demo").innerHTML = alphabet;
    console.log(alphabet);
    index = (index + 1) % alphabets.length; // เพิ่ม index และทำการ modulo กับ 26 (จำนวนตัวอักษรในอัลฟาเบ็ต)
    setTimeout(displayAlphabet, 1000); // 1000 milliseconds = 1 วินาที
  }

  displayAlphabet();
}

printAlphabets();


const messages = [
  "Hello World",
  "Hello There",
  "Hello, What's up",
  "Greetings!",
  "Hi!",
  "Hey!"
];
let currentIndex = 0;

  function myFunction() {
    if (currentIndex < messages.length) {
      let currentMessage = messages[currentIndex];
      document.getElementById("demo2").innerHTML = currentMessage;
      currentIndex++;
    }
  }
  
    function myFunction2() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("numb").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("demo3").innerHTML = text;
  }
  function fahrenheitToCelsius() {
    let inputFahrenheit = prompt("Enter temperature in Fahrenheit:");
    let celsiusValue = (parseFloat(inputFahrenheit) - 32) * (5 / 9);
    document.getElementById(
        "show1"
    ).innerText = `Fahrenheit: ${inputFahrenheit}°F, Celsius: ${celsiusValue.toFixed(
  2
)}°C`;
}

function calculateCircleCircumference(radius) {
    return 2 * Math.PI * radius;
}

function calculateAndDisplayCircumference() {
    let inputElement = document.getElementById("input");
    let resultElement = document.getElementById("result");

    let radius = parseFloat(inputElement.value);

    if (!isNaN(radius)) {
        let circumference = calculateCircleCircumference(radius);
        resultElement.textContent = circumference.toFixed(2);
    } else {
        resultElement.textContent = "กรุณากรอกค่าที่ถูกต้อง";
    }
}       
function dayToSeconds() {
let inputDays = document.getElementById("daysInput").value;
if (!isNaN(inputDays)) {
let seconds = inputDays * 86400;
document.getElementById("show2").innerText = `จำนวนวัน: ${inputDays} วัน, ${seconds} นาที`;
} else {
alert("Please enter a valid number of days.");
}
}




const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
const yValues = [55, 49, 44, 24, 15];
const barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart1", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide Wine Production 2018"
    }
  }
});

const zValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart2", {
  type: "line",
  data: {
    labels: zValues,
    datasets: [{ 
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "red",
      fill: false
    }, { 
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "green",
      fill: false
    }, { 
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});
// ---------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    // Get elements from the DOM
    const getFactBtn = document.getElementById('getFactBtn');
    const factDisplay = document.getElementById('factDisplay');

    // Event listener for button click
    getFactBtn.addEventListener('click', function () {
        // Call the function to fetch a random fact
        fetchRandomFact();
    });

    // Function to fetch a random fact from the Chuck Norris Jokes API
    function fetchRandomFact() {
        const apiUrl = 'https://api.chucknorris.io/jokes/random';

        // Fetch data from the API
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Display the fact in the HTML
                factDisplay.textContent = data.value;
            })
            .catch(error => {
                console.error('Error fetching random fact:', error);
                factDisplay.textContent = 'Error fetching random fact. Please try again.';
            });
    }
});



function fetchRandomDog() {
  // Fetch data from the API
  fetch('https://random.dog/woof.json')
      .then(response => response.json())
      .then(data => {
          const url = data.url;

          // Update the image source with the fetched URL
          document.getElementById('dogImage').src = url;

          // Display the image
          document.getElementById('dogImage').style.display = 'block';
      })
      .catch(error => {
          console.error('Error fetching random dog:', error);
      });
}



function fetchNationality() {
  var name = document.getElementById('name').value;
  if (name.trim() === "") {
      alert("Please enter a name");
      return;
  }

  fetch(`https://api.nationalize.io?name=${name}`)
      .then(response => response.json())
      .then(data => {
          displayResult(data);
      })
      .catch(error => {
          console.error('Error fetching data:', error);
          alert('Error fetching data. Please try again.');
      });
}

function displayResult(data) {
  var resultDiv = document.getElementById('result');
  var countryData = data.country[0];

  if (countryData) {
      var countryId = countryData.country_id;
      var probability = (countryData.probability * 100).toFixed(2);
      resultDiv.innerHTML = `<div><p>Your most likely country is ${countryId} with a probability of ${probability}%.</p></div>`;
  } else {
      resultDiv.innerHTML = "<div><p>No data available for the provided name.</p></div>";
  }
}

function fetchPrices() {
  var now = new Date();
  var currentTime = now.toLocaleTimeString();

  fetch('https://api.coinbase.com/v2/exchange-rates?currency=USDT')
      .then(response => response.json())
      .then(data => {
          displayPrices(data);
          displayLastUpdateTime(currentTime);
      })
      .catch(error => {
          console.error('Error fetching data:', error);
          alert('Error fetching data. Please try again.');
      });
}
function displayPrices(data) {
  var pricesDiv = document.getElementById('prices');
  var rates = data.data.rates;

  var currencies = ['1INCH', 'AAVE', 'ABT', 'ACH', 'ACS', 'ADA', 'AED', 'BTC', 'ETH'];
  var pricesHtml = '<div><p>1 USDT can buy:</p><div>';

  currencies.forEach(currency => {
      if (rates[currency]) {
          pricesHtml += `<div>${currency}: ${rates[currency]}</div>`;
      } else {
          pricesHtml += `<div>${currency}: N/A</div>`;
      }
  });

  pricesHtml += '</div></div>';
  pricesDiv.innerHTML = pricesHtml;
}

function displayLastUpdateTime(currentTime) {
  var updateTimeDiv = document.getElementById('lastUpdateTime');
  updateTimeDiv.innerHTML = `<p>Last Update Time: ${currentTime}</p>`;
}

fetchPrices();

setInterval(fetchPrices, 3000);