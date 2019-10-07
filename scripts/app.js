'use strict';

// var imagesArray = [];
// var currentImagesDisplayed = [];
// var totalImagesSeenInitial = 0;
var leftImageTag = document.getElementById('leftImage');
var rightImageTag = document.getElementById('rightImage');
var leftIndexCurrent = null;
var middleIndexCurrent = null;
var rightIndexCurrent = null;
ProductImageConstructor.allImages = [];
var max = ProductImageConstructor.allImages.length;
function ProductImageConstructor(productName, productImageFilePath){
  this.productName = productName;
  this.productImageFilePath = productImageFilePath;
  //   this.totalVotes = 0;
  //   this.timesShown = 0;

  ProductImageConstructor.allImages.push(this);
}

function randomImagePicker(){
  debugger;
  do {
    var leftIndexRandom = Math.floor(Math.random() * max);
  }
  while(leftIndexRandom === leftIndexCurrent);
  leftIndexCurrent = leftIndexRandom;
  do {
    var middleIndexRandom =  Math.floor(Math.random() * max);
  }
  while (middleIndexRandom === middleIndexCurrent || middleIndexRandom === leftIndexCurrent)
  middleIndexCurrent = middleIndexRandom;
  do {var rightIndexRandom = Math.floor(Math.random() * max);
  }
  while (rightIndexRandom === rightIndexCurrent || rightIndexRandom === middleIndexCurrent || rightIndexRandom === leftIndexCurrent);
  rightIndexCurrent = rightIndexRandom;
}
new ProductImageConstructor('whatever', 'hello1');
new ProductImageConstructor('whatever', 'hello2');
new ProductImageConstructor('whatever', 'hello3');

console.log('left', leftIndexCurrent);
console.log('middle', middleIndexCurrent);
console.log('right', rightIndexCurrent);
console.log('endtest');
randomImagePicker();
console.log('left', leftIndexCurrent);
console.log('middle', middleIndexCurrent);
console.log('right', rightIndexCurrent);
console.log('endtest');

randomImagePicker();
console.log('left', leftIndexCurrent);
console.log('middle', middleIndexCurrent);
console.log('right', rightIndexCurrent);
console.log('endtest');

randomImagePicker();
console.log('left', leftIndexCurrent);
console.log('middle', middleIndexCurrent);
console.log('right', rightIndexCurrent);
console.log('endtest');

randomImagePicker();
console.log('left', leftIndexCurrent);
console.log('middle', middleIndexCurrent);
console.log('right', rightIndexCurrent);
console.log('endtest');
randomImagePicker();
console.log('left', leftIndexCurrent);
console.log('middle', middleIndexCurrent);
console.log('right', rightIndexCurrent);
console.log('endtest');
randomImagePicker();
console.log('left', leftIndexCurrent);
console.log('middle', middleIndexCurrent);
console.log('right', rightIndexCurrent);
console.log('endtest');

function renderNewImages(leftIndex, rightIndex){
  leftImageTag.src = ProductImageConstructor.allImages[leftIndex][1];
  rightImageTag.src = ProductImageConstructor.allImages[rightIndex][1];
}
// function imageClickEventListener(){
//   console.log('I am living');
//   if (totalImagesSeenInitial < 10){
//     var thingWeClickedOn = event.target;
//     var id = thingWeClickedOn.id;
//     if (id === leftImageTag.id){
//       leftImgOnThePage.clicks ++;
//     } else if (id === rightImageTag.id){
//       rightImgOnThePage.clicks ++;
//     }
//     renderNewImages();
//   }
//   totalImagesSeenInitial += 2;
// }


// new ImageConstructor ('bob', 'image');
// new ImageConstructor ('jane', 'image2');
// console.log(ImageConstructor.allImages);

// leftImageTag.addEventListener('click', imageClickEventListener, false);
// rightImageTag.addEventListener('click', imageClickEventListener, false);
