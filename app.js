'use strict';

function Product(name, path) {
  this.name = name;
  this.path = path;
  this.tally = 0;
  this.click = 0;
};

var itemArray = [];

function getRandomIntInclusive() {
  return Math.floor(Math.random() * (itemArray.length) - 1);
}

function callProducts() {
  itemArray.push(new Product('bag', 'img/bag.jpg'));
  itemArray.push(new Product('banana', 'img/banana.jpg'));
  itemArray.push(new Product('bathroom', 'img/bathroom.jpg'));
  itemArray.push(new Product('boots', 'img/boots.jpg'));
  itemArray.push(new Product('breakfast', 'img/breakfast.jpg'));
  itemArray.push(new Product('bubblegum', 'img/bubblegum.jpg'));
  itemArray.push(new Product('chair', 'img/chair.jpg'));
  itemArray.push(new Product('cthulhu', 'img/cthulhu.jpg'));
  itemArray.push(new Product('dog-duck', 'img/dog-duck.jpg'));
  itemArray.push(new Product('dragon', 'img/dragon.jpg'));
  itemArray.push(new Product('pen', 'img/pen.jpg'));
  itemArray.push(new Product('pet-sweep', 'img/pet-sweep.jpg'));
  itemArray.push(new Product('scissors', 'img/scissors.jpg'));
  itemArray.push(new Product('shark', 'img/shark.jpg'));
  itemArray.push(new Product('sweep', 'img/sweep.png'));
  itemArray.push(new Product('tauntaun', 'img/tauntaun.jpg'));
  itemArray.push(new Product('unicorn', 'img/unicorn.jpg'));
  itemArray.push(new Product('usb', 'img/usb.jpg'));
  itemArray.push(new Product('water-can', 'img/water-can.jpg'));
  itemArray.push(new Product('wine-glass', 'img/wine-glass.jpg'));
};
callProducts();
console.log(itemArray);
