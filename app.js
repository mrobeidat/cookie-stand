'use strict'


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let shops = [];

function Shop(location, minCustomers, maxCustomers, avgCookies) {
    this.location = location;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookies = avgCookies;
    this.cookiesEachHour = [];
    this.customerprHour = [];

    shops.push(this);

}



Shop.prototype.gitCus = function () {

    for (let i = 0; i < hours.length; i++) {
       return this.customerprHour[i].push = (random(this.minCustomers, this.maxCustomers) + ' Customers');
    }

}

Shop.prototype.cookiesEachHour = function () {

    for (let i = 0; i < hours.length; i++) {
        return Math.floor[i].push= (this.customerprHour[i] * this.avgCookies);

    }
  }


let Seattle = new Shop('Seattle', 23, 65, 6.3)

Seattle.gitCus();
console.log(shops);

let Tokyo = new Shop('Tokyo', 3, 24, 1.2)

Tokyo.gitCus();
console.log(shops);


let Dubai = new Shop('Dubai', 11, 38, 3.7)

Dubai.gitCus();
console.log(shops);


let Paris = new Shop('Paris', 20, 38, 2.3)

Paris.gitCus();
console.log(shops);


let Lima = new Shop('Lima', 2, 16, 4.6)

Lima.gitCus();
console.log(shops);


Shop.prototype.render = function () {

    let parent = document.getElementById('salmon cookies');


    let nameElement = document.createElement('h2')
    console.log(nameElement);

    parent.appendChild(nameElement)

    nameElement.textContent = this.location;



    let unorederedList = document.createElement('ul');

    parent.appendChild(unorederedList);
    console.log(unorederedList);


    for (let i = 0; i < hours.length; i++) {

        let crLi = document.createElement('li');

        unorederedList.appendChild(crLi);

        crLi.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
    }



    let table = document.createElement('table')

    parent.appendChild(table);

    let headingrow = document.createElement('tr');
    table.appendChild(headingrow);

    let cookieHours = ['location, minCustomers, maxCustomers, avgCookies'];

    for (let i = 0; i < cookieHours.length; i++) {

        let thEl = document.createElement('th');
        headingrow.appendChild(thEl)
        thEl.textContent = cookieHours[i];
    }
}


for (let i = 0; i < shops.length; i++) {
    shops[i].gitCus();
    shops[i].render();

}

console.log(shops);







// function random(min , max){

//     return Math.floor(Math.random() * (max - min + 1))+min;
//     }
//     console.log(random(23,65));



// let parent=document.getElementById('salmon cookies');
// console.log(parent);

// let list=document.createElement('list');
// console.log(list);

//  parent.appendChild (list);

//  let h2element= document.createElement ('h2');
//  h2element.textContent=this.avgCookie

//  let ulElement = document.createElement('ul')






//  let Tokyo ={

//     min : 3,
//     max :24,
//     avgCookie: 1.2,


//     getavg = function(){

//         this.avgCookie=random(3,24)+'per hour'
//         console.log(this.avgCookie);
//     }

//     }

//     Tokyo.getavg();




//     function random(min , max){

//         return Math.floor(Math.random() * (max - min + 1))+min;
//         }
//         console.log(random(3,24));



//     let parent=document.getElementById('salmon cookies');
//     console.log(parent);

//     let list=document.createElement('list');
//     console.log(list);

//      parent.appendChild (list);

//      let h2element= document.createElement ('h2');
//      h2element.textContent=this.avgCookie

//      let ulElement = document.createElement('ul')















//     let Dubai ={

//         min : 11,
//         max :38,
//         avgCookie: 3.7,


//         getavg = function(){

//             this.avgCookie=random(11,38)+'per hour'
//             console.log(this.avgCookie);
//         }

//         }

//         Dubai.getavg();


//         function random(min , max){

//             return Math.floor(Math.random() * (max - min + 1))+min;
//             }
//             console.log(random(11,38));



//         let parent=document.getElementById('salmon cookies');
//         console.log(parent);

//         let list=document.createElement('list');
//         console.log(list);

//          parent.appendChild (list);

//          let h2element= document.createElement ('h2');
//          h2element.textContent=this.avgCookie

//          let ulElement = document.createElement('ul')















//         let paris ={

//             min : 20,
//             max :38,
//             avgCookie: 2.3,


//             getavg = function(){

//                 this.avgCookie=random(20,38)+'per hour'
//                 console.log(this.avgCookie);
//             }

//             }

//             paris.getavg();


//             function random(min , max){

//                 return Math.floor(Math.random() * (max - min + 1))+min;
//                 }
//                 console.log(random(20,38));



//             let parent=document.getElementById('salmon cookies');
//             console.log(parent);

//             let list=document.createElement('list');
//             console.log(list);

//              parent.appendChild (list);

//              let h2element= document.createElement ('h2');
//              h2element.textContent=this.avgCookie

//              let ulElement = document.createElement('ul')

//             HTMLDataListElement.appendChild(ulElement);












//         let lima ={

//             min : 2,
//             max :16,
//             avgCookie: 4.6,


//             getavg = function(){

//                 this.avgCookie=random(2,16)+'per hour'
//                 console.log(this.avgCookie);
//             }

//             }

//             lima.getavg();



//             function random(min , max){

//                 return Math.floor(Math.random() * (max - min + 1))+min;
//                 }
//                 console.log(random(2,16));



//             let parent=document.getElementById('salmon cookies');
//             console.log(parent);

//             let list=document.createElement('list');
//             console.log(list);

//              parent.appendChild (list);

//              let h2element= document.createElement ('h2');
//              h2element.textContent=this.avgCookie

//              let ulElement = document.createElement('ul')

