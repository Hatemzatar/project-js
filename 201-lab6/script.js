"use strict";

var operationHours = [
  "6 AM:",
  "7 AM:",
  "8 AM:",
  "9 AM:",
  "10 AM:",
  "11 AM:",
  "12 PM:",
  "1 PM:",
  "2 PM:",
  "3 PM:",
  "4 PM:",
  "5 PM:",
  "6 PM:",
  "7 PM:",
  "Total:",
];


function CookiesClass(passedName, minHourlyCus, maxHourlyCus, avgHourlyCus) {
  this.name = passedName;
  this.minCus = minHourlyCus;
  this.maxCus = maxHourlyCus;
  this.avgCus = avgHourlyCus;
  this.operationHours = [];
}

var Seattle = new CookiesClass("Seattle", 23, 65, 6.3);

var Tokyo = new CookiesClass("Tokyo", 3, 24, 1.2);

var Dubai = new CookiesClass("Dubai", 11, 38, 3.7);

var Paris = new CookiesClass("Paris", 20, 38, 2.3);

var Lima = new CookiesClass("Lima", 2, 16, 4.6);

var cities= [Seattle, Tokyo, Dubai, Paris, Lima];


CookiesClass.prototype.generateRandomNumber = function () {
  return Math.floor(Math.random() * (this.maxCus - this.minCus) + this.minCus);
};

CookiesClass.prototype.cookiesAmount = function () {
  for (let index = 0; index < operationHours.length; index++) {
    var randomNum = this.generateRandomNumber();

    var amountOfCookies = Math.trunc(this.avgCus * randomNum);

    this.operationHours[15] = (this.operationHours[15] || 0) + amountOfCookies;

    var results = amountOfCookies;

    return results;
  }
};

var parentElement = document.getElementById("cookiesShop");

var test = document.createElement("article");
parentElement.appendChild(test);

var table = document.createElement("table");
test.appendChild(table);

var row = document.createElement("tr");
table.appendChild(row);

var column = document.createElement("th");
column.textContent = "Location";
row.appendChild(column);

for (let index = 0; index < operationHours.length; index++) {
  var column = document.createElement("th");
  column.textContent = operationHours[index];
  row.appendChild(column);
}

CookiesClass.prototype.renderCookies = function () {
  var row2 = document.createElement("tr");
  table.appendChild(row2);

  var column2 = document.createElement("td");
  column2.textContent = this.name;
  row2.appendChild(column2);

  for (let index = 0; index < 14; index++) {
    var column2 = document.createElement("td");
    column2.textContent = this.cookiesAmount();
    this.operationHours[index] = column2.textContent;
    row2.appendChild(column2);
  }

  var column2 = document.createElement("td");
  column2.textContent = this.operationHours[15];
  row2.appendChild(column2);



};

Seattle.renderCookies();

Tokyo.renderCookies();

Dubai.renderCookies();

Paris.renderCookies();

Lima.renderCookies();


var shopForm = document.getElementById("shopForm");

shopForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var name = event.target.name.value;
  var minCus = event.target.minCus.value;
  var maxCus = event.target.maxCus.value;
  var avgCus = event.target.avgCus.value;

  var newCity = new CookiesClass(name, minCus, maxCus, avgCus, "");
  console.log(newCity);
  newCity.renderCookies();
  cities.push(newCity)
  document.getElementById("total").remove();
  renderTotal();
});


function renderTotal() {
  var row3 = document.createElement("tr");
  row3.id = "total";
  table.appendChild(row3);

  var column3 = document.createElement("td");
  column3.textContent = "Total";
  row3.appendChild(column3);

  for (let index = 0; index < 14; index++) {
    var totalrows =0
 

      for(let i = 0; i < cities.length; i++) {
totalrows=totalrows+ +cities[i].operationHours[index]

      }


    var column3 = document.createElement("td");
    column3.textContent = totalrows;
    row3.appendChild(column3);
  }

  var totalColumn = 0
  for (let i = 0; i < cities.length; i++) {
    totalColumn=totalColumn+ +cities[i].operationHours[15]
    
          }

  var column3 = document.createElement("td");
  column3.textContent = totalColumn;
  row3.appendChild(column3);
}
renderTotal()
