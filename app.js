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


Shop.prototype.gitCus = function () {

    for (let i = 0; i < hours.length; i++) {
        this.customerperHour.push(random(this.minCustomers, this.maxCustomers));
    }
    console.log(this.customerperHour)
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
console.log(parent);

let table = document.createElement('table')
parent.appendChild(table);

function mkheader() {

    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);

    let Fth = document.createElement('th');
    headerRow.appendChild(Fth);

    Fth.textContent = 'Name';


    for (let i = 0; i < hours.length; i++) {
        let hoursTH = document.createElement('th')

        headerRow.appendChild(hoursTH);
        hoursTH.textContent = hours[i];
    }
    let Lth = document.createElement('th');
    headerRow.appendChild(Lth);

    Lth.textContent = 'Daily location total';
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

        // console.log(hours[i]);

        let totalForEachHour = 0;
        //console.log(totalForEachHour);
        for (let j = 0; j < shops.length; j++) {
            // console.log(shops[j].cookiesperHour[i]);
            totalForEachHour += shops[j].cookiesperHour[i];
            totalofTostals += shops[j].cookiesperHour[i];

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


console.log(shops);


let form = document.getElementById('form');

form.addEventListener('submit', submitter)

function submitter(event) {

    event.preventDefault();

    // console.log(event);

    let city = (event.target.locations.value);
    // console.log(city);

    let min = Number(event.target.minCustomers.value);
    // console.log(max);
    let max = Number(event.target.maxCustomers.value);

    let avg = parseFloat(event.target.avgCookies.value);
    // console.log(avg);

    let addedshop = new Shop(city, min, max, avg);



    table.textContent = '';
    // console.log(shops);
    addedshop.gitCus();
    addedshop.calcCookiesperHour();
    // addedshop.render();

    // console.log(addedshop);
    mkheader();

    for (let i = 0; i < shops.length; i++) {

        // shops[i].cookiesperHour = [];
        // shops[i].customerperHour = [];
        // shops[i].totalCookiesPerDay = 0;

        // shops[i].gitCus();
        // shops[i].calcCookiesperHour();
        shops[i].render();


    }

    mkFooter();


}

mkheader();

for (let i = 0; i < shops.length; i++) {

    shops[i].gitCus();
    shops[i].calcCookiesperHour();
    shops[i].render();

}

mkFooter();

  // console.log(shops);
    // addedshops.gitCus();
    // addedshops.calcCookiesperHour();
    // addedshops.render();
    // addedshops.avgCookies();.

    // addedshops.gitCus();
    // addedshops.calcCookiesperHour();