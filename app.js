'use strict';

//function to create objects. Will be used for images later.
function Product(name, path) {
  this.name = name;
  this.path = path;
  this.tally = 0;
  this.click = 0;
};

//array for images later
var itemArray = [];

//function to get a random number. For use later.
function getRandomIntInclusive() {
  return Math.floor(Math.random() * (itemArray.length) - 1);
}

//create new onject including each image and pushing it in to an array.
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

//function to select 3 random images and re-roll if a duplicate is found.
function randomThreeNum() {
  var one = getRandomIntInclusive();
  var two = getRandomIntInclusive();
  var three = getRandomIntInclusive();
  while (one === three || one === two || two === three){
    console.log('duplicate image detected');
    if (one === two) {
      two = itemArray[getRandomIntInclusive()].path;
    };
    if (three === two || three === one) {
      three = itemArray[getRandomIntInclusive()].path;
      console.log('duplicate image prevented');
    };
  };
  return [one, two, three];
};

//Function to add the selected images in to the page.
function makeImages() {
  var threeNums = randomThreeNum();
  var left = document.getElementById('left');
  left.src = itemArray[threeNums[0]].path;
  console.log(threeNums[0]);
  var middle = document.getElementById('middle');
  middle.src = itemArray[threeNums[1]].path;
  console.log(threeNums[1]);
  var right = document.getElementById('right');
  right.src = itemArray[threeNums[2]].path;
  console.log(threeNums[2]);
};
makeImages();

//setting up an event
var theContainer = document.getElementById('container');
theContainer.addEventListener('click', handleContainer);

//setting variable to track click
var click = 0;

//Function to cycle through and track number of clicks until 25 clicks is reached.
function handleContainer(event){
  console.log(event.target.id);
  if (event.target.id === 'container') {
    alert('You cannot follow instructions to click directly on a contained element. Please do so!');
  } else if (click < 25) {
    click++;
    console.log(click);
    makeImages();
  } else if (click = 25) {
    theContainer.removeEventListener('click', handleContainer);
  }
}
