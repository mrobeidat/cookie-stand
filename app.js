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
        this.customerperHour.push = (random(this.minCustomers, this.maxCustomers));
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
    let dataRow = document.createElement('tr')
    table.appendChild(dataRow)

    let NameTd = document.createElement('td')
    dataRow.appendChild(NameTd);
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
    table.appendChild(footerRow)


    let firstCl = document.createElement('td')
    footerRow.appendChild(firstCl);
    firstCl.textContent = 'Total';

    for (let i = 0; i < hours.length; i++) {

        console.log(hours[i]);
        let totalForEachHour = 0;
        console.log(totalForEachHour + 50);
        for (let x = 0; x < shops.length; x++) {
           // console.log(shops[x].this.cookiesperHour[i]);
           // totalForEachHour += shops[x].this.cookiesperHour[i];
        }
        console.log(totalForEachHour);
    }
}



console.log(shops);
mkheader();

for (let i = 0; i < shops.length; i++) {

    shops[i].gitCus();
    shops[i].calcCookiesperHour();
    shops[i].render();
}


mkFooter();




