// var photoItem = document.querySelector('.main__photo');

// var successHandler = function (data) {
//   // console.log(data);


//   for (var i = 0; i < data.length; i++) {
//     var photoItemLink = document.createElement('a');
//     photoItem.appendChild(photoItemLink);

//     var photoItemImg = document.createElement('img');
//     photoItemImg.classList.add('main__photo-img');
//     photoItemImg.src = data[i].url;
//     photoItemImg.id = data[i].id;   
//     photoItemLink.appendChild(photoItemImg);
//   }

//   console.log(photoItemImg);

//     document.addEventListener('click', function (evt) {
//   console.log(evt.target);
//   // clickSuccess();
//   var clickSuccess = function (data) {

//     document.querySelector('.modal__body-img').src = data.url;

//     var date = new Date(data.comments[0]['date']);
//     dateFormat = [
//       ('0' + date.getDate()).slice(-2),
//       ('0' + (date.getMonth() + 1)).slice(-2),
//       date.getFullYear()
//     ];

//     var textDate = document.createElement('p');
//     textDate.innerHTML = dateFormat.join('.');
//     document.querySelector('.modal__body-comments').appendChild(textDate);

//     var textComment = document.createElement('p');
//     textComment.innerHTML = data.comments[0]['text'];
//     document.querySelector('.modal__body-comments').appendChild(textComment);
//   }

//   var clickError = function (data) {
//     console.log("error");
//   }

//   if (evt.target.classList.contains('main__photo-img')) {
    
//     console.log(evt.target.id);
//     document.querySelector('.modal').style.display = 'block';
//     var URL_LOAD = 'https://boiling-refuge-66454.herokuapp.com/images/' + evt.target.id;
//     window.load(clickSuccess, clickError, URL_LOAD);
//   }
// });

// document.addEventListener('click', function (evt) {
//   console.log(evt.target);

//   var clickSuccess = function (data) {

//     document.querySelector('.modal__body-img').src = data.url;

//     var date = new Date(data.comments[0]['date']);
//     dateFormat = [
//       ('0' + date.getDate()).slice(-2),
//       ('0' + (date.getMonth() + 1)).slice(-2),
//       date.getFullYear()
//     ];

//     var textDate = document.createElement('p');
//     textDate.innerHTML = dateFormat.join('.');
//     document.querySelector('.modal__body-comments').appendChild(textDate);

//     var textComment = document.createElement('p');
//     textComment.innerHTML = data.comments[0]['text'];
//     document.querySelector('.modal__body-comments').appendChild(textComment);
//   }

//   var clickError = function (data) {
//     console.log("error");
//   }

//   if (evt.target.classList.contains('main__photo-img')) {
    
//     console.log(evt.target.id);
//     // document.querySelector('.modal').style.display = 'block';
//     var URL_LOAD = 'https://boiling-refuge-66454.herokuapp.com/images/' + evt.target.id;
//     window.load(clickSuccess, clickError, URL_LOAD);
//   }
// })ж



// console.log(document.querySelector('.modal__close'));
// document.querySelector('.modal__close').addEventListener('click', function (evt) {
//   console.log(6754321);
//   document.querySelector('.modal').style.display = 'none';
//   document.querySelector('.modal__body-img').src = "";
//   var element = document.querySelector('.modal__bode-comments');
//   while (element.firstChild) {
//     element.removeChild(element.firstChild);
//   }
// });

// };



// var errorHandler = function () {
//     // console.log(data)
// };
    
// console.log(34);
// window.load(successHandler, errorHandler);





var photoItem = document.querySelector('.main__photo');

var successHandler = function (data) {
  // console.log(data);


  for (var i = 0; i < data.length; i++) {
    var photoItemLink = document.createElement('a');
    photoItem.appendChild(photoItemLink);

    var photoItemImg = document.createElement('img');
    photoItemImg.classList.add('main__photo-img');
    photoItemImg.src = data[i].url;
    photoItemImg.id = data[i].id;   
    photoItemLink.appendChild(photoItemImg);
  }

  console.log(photoItemImg);



};



var errorHandler = function () {
    // console.log(data)
};


var clickSuccess = function (data) {

  document.querySelector('.modal__body-img').src = data.url;

  var date = new Date(data.comments[0]['date']);
  dateFormat = [
    ('0' + date.getDate()).slice(-2),
    ('0' + (date.getMonth() + 1)).slice(-2),
    date.getFullYear()
  ];

  var textDate = document.createElement('p');
  textDate.innerHTML = dateFormat.join('.');
  document.querySelector('.modal__body-comments').appendChild(textDate);

  var textComment = document.createElement('p');
  textComment.innerHTML = data.comments[0]['text'];
  document.querySelector('.modal__body-comments').appendChild(textComment);
};

var clickError = function () {
  console.log("error");
;}



var clickmainPhoto = function (evt) {
  console.log(evt.target);
  // clickSuccess();


  if (evt.target.classList.contains('main__photo-img')) {
    
    console.log(evt.target.id);
    document.querySelector('.modal').style.display = 'block';
    var URL_LOAD = 'https://boiling-refuge-66454.herokuapp.com/images/' + evt.target.id;
    window.load(clickSuccess, clickError, URL_LOAD);
  }
};
document.addEventListener('click', clickmainPhoto);
// document.removeEventListener('click', clickmainPhoto);

console.log(document.querySelector('.modal__close'));
document.querySelector('.modal__close').addEventListener('click', function (evt) {
  console.log(6754321);
  document.querySelector('.modal').style.display = 'none';
  document.querySelector('.modal__body-img').src = "";
  var element = document.querySelector('.modal__bode-comments');
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
});
    
console.log(34);
window.load(successHandler, errorHandler);


