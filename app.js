'use strict';

function Product(name, path) {
  this.name = name;
  this.path = path;
  this.tally = 0;
  this.click = 0;
};

var itemArray = [];
var left = document.getElementById('left');
var middle = document.getElementById('middle');
var right = document.getElementById('right');
var currentNums = [];
var click = 0;
document.getElementById('button').hidden = true;

function getRandomIntInclusive() {
  return Math.floor(Math.random() * (itemArray.length));
};

function callProducts() {
  if (localStorage.data) {
    itemArray = JSON.parse(localStorage.data);
  } else {
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
    itemArray.push(new Product('usb', 'img/usb.gif'));
    itemArray.push(new Product('water-can', 'img/water-can.jpg'));
    itemArray.push(new Product('wine-glass', 'img/wine-glass.jpg'));
  }
};
callProducts();
console.log(itemArray);

function randomThreeNum() {
  var one = getRandomIntInclusive();
  var two = getRandomIntInclusive();
  var three = getRandomIntInclusive();
  while (one === currentNums[0] || one === currentNums[1] || one === currentNums[2]) {
    one = getRandomIntInclusive();
  } while (two === currentNums[0] || two === currentNums[1] || two === currentNums[2] || one === two) {
    two = getRandomIntInclusive();
  } while (three === currentNums[0] || three === currentNums[1] || three === currentNums[2] || one === three || two === three) {
    three = getRandomIntInclusive();
  }
  currentNums = [one, two, three];
  return currentNums;
};

function makeImages() {
  var threeNums = randomThreeNum();
  left.src = itemArray[threeNums[0]].path;
  left.alt = itemArray[threeNums[0]].name;
  itemArray[threeNums[0]].tally += 1;
  middle.src = itemArray[threeNums[1]].path;
  middle.alt = itemArray[threeNums[1]].name;
  itemArray[threeNums[1]].tally += 1;

  right.src = itemArray[threeNums[2]].path;
  right.alt = itemArray[threeNums[2]].name;
  itemArray[threeNums[2]].tally += 1;
};
makeImages();

function handleContainer(event){
  for(var i = 0; i < itemArray.length; i++) {
    if(event.target.alt === itemArray[i].name)
      itemArray[i].click += 1;
  }
  if (event.target.alt === 'container') {
    alert('You cannot follow instructions to click directly on a contained element. Please do so!');
  } else if (click < 25) {
    click++;
    makeImages();
  } else if (click === 25) {
    theContainer.removeEventListener('click', handleContainer);
    localStorage.data = JSON.stringify(itemArray);
    showChart();
  }
};

function showChart() {
  document.getElementById('button').hidden = false;
}

function displayTable(event) {
  var barData = {
    labels : names(),
    datasets : [
      {
        label : 'Number of Times Item Selected',
        backgroundColor: '#48A497',
        data : tableDataClicks(),
      },
      {
        label : 'Number of Times Item Viewed',
        backgroundColor: '#38D415',
        data : tableDataViews(),
      },
    ]
  };
  var barGraph = document.getElementById('barGraph').getContext('2d');
  new Chart.Bar(barGraph, {
    data: barData,
    options: {
      responsive: true,
      scales: {
        yAxes: [{
          ticks: {
            min: 0,
            stepSize: 5
          }
        }]
      }
    }
  });
}

var names = function() {
  var labels = [];
  for(var i = 0; i < itemArray.length; i++) {
    labels[i] = itemArray[i].name;
  }
  return labels;
};

var tableDataClicks = function() {
  var data = [];
  for(var i = 0; i < itemArray.length; i++) {
    data[i] = itemArray[i].click;
  }
  return data;
};

var tableDataViews = function() {
  var data = [];
  for(var i = 0; i < itemArray.length; i++) {
    data[i] = itemArray[i].tally;
  }
  return data;
};

var clickThrough = function() {
  var data = [];
  for(var i = 0; i < itemArray.length; i++) {
    data[i] = (itemArray[i].click / itemArray[i].tally) * 100;
  }
  return data;
};

var theButton = document.getElementById('button');
theButton.addEventListener('click', displayTable);

var theContainer = document.getElementById('container');
theContainer.addEventListener('click', handleContainer);
