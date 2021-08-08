'use strict'


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let shops = [];

function Shop(location, minCustomers, maxCustomers, avgCookies) {
    this.location = location;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookies = avgCookies;
    this.totalCookiesPerDay = 0;
    this.cookiesperHour = [];
    this.customerperHour = [];
    shops.push(this);

}

Shop.prototype.calcCustomersPerHour = function () {

    for (let i = 0; i < hours.length; i++) {
        this.customerperHour.push(random(this.minCustomers, this.maxCustomers));
    }
}

Shop.prototype.calcCookiesperHour = function () {

    for (let i = 0; i < hours.length; i++) {


        this.cookiesperHour.push(Math.floor(this.customerperHour[i] * this.avgCookies));

        this.totalCookiesPerDay += this.cookiesperHour[i];
    }
}




let Seattle = new Shop('Seattle', 23, 65, 6.3);


let Tokyo = new Shop('Tokyo', 3, 24, 1.2);



let Dubai = new Shop('Dubai', 11, 38, 3.7);



let Paris = new Shop('Paris', 20, 38, 2.3);



let Lima = new Shop('Lima', 2, 16, 4.6);




let parent = document.getElementById('parent');

let table = document.createElement('table')
parent.appendChild(table);

function mkheader() {

    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);

    let FirstTh = document.createElement('th');
    headerRow.appendChild(FirstTh);

    FirstTh.textContent = 'Name';


    for (let i = 0; i < hours.length; i++) {

        let hoursTh = document.createElement('th')

        headerRow.appendChild(hoursTh);
        hoursTh.textContent = hours[i];
    }
    let lastTh = document.createElement('th');
    headerRow.appendChild(lastTh);

    lastTh.textContent = 'Daily location total';
}


Shop.prototype.render = function () {
    // create row (tr)
    let dataRow = document.createElement('tr')
    // append to table
    table.appendChild(dataRow)

    // create 
    let NameTd = document.createElement('td')
    // append to dataRow
    dataRow.appendChild(NameTd);
    // add text to the td
    NameTd.textContent = this.location;

    for (let i = 0; i < hours.length; i++) {
        let cookiesTd = document.createElement('td')
        dataRow.appendChild(cookiesTd);
        cookiesTd.textContent = this.cookiesperHour[i];
    }
    let TotalTd = document.createElement('td')
    dataRow.appendChild(TotalTd);
    TotalTd.textContent = this.totalCookiesPerDay;


}

function mkFooter() {

    let footerRow = document.createElement('tr');
    table.appendChild(footerRow);


    let firstTh = document.createElement('th')
    footerRow.appendChild(firstTh);
    firstTh.textContent = 'Total';


    let totalofTostals = 0;

    for (let i = 0; i < hours.length; i++) {

        let totalForEachHour = 0;

        for (let i = 0; i < shops.length; i++) {

            totalForEachHour += shops[i].cookiesperHour[i];
            totalofTostals += shops[i].cookiesperHour[i];

        }
        // console.log(totalForEachHour);
        let footerTh = document.createElement('th');
        footerRow.appendChild(footerTh);
        footerTh.textContent = totalForEachHour;
    }
    let lastTh = document.createElement('th');
    footerRow.appendChild(lastTh);
    lastTh.textContent = totalofTostals;
}



let form = document.getElementById('form');

form.addEventListener('submit', submitter)

function submitter(event) {

    event.preventDefault();


    let city = (event.target.locations.value);

    let min = Number(event.target.minCustomers.value);

    let max = Number(event.target.maxCustomers.value);

    let avg = parseFloat(event.target.avgCookies.value);

    let addedshop = new Shop(city, min, max, avg);



    table.textContent = '';

    addedshop.calcCustomersPerHour();
    addedshop.calcCookiesperHour();

    mkheader();

    for (let i = 0; i < shops.length; i++) {

        shops[i].render();

    }

    mkFooter();


}

mkheader();

for (let i = 0; i < shops.length; i++) {

    shops[i].calcCustomersPerHour();
    shops[i].calcCookiesperHour();
    shops[i].render();

}

mkFooter();
