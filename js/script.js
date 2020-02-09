var photoItem = document.querySelector('.main__photo');
var screenDesktop = 768;

var successHandler = function (data) {

  var lengthArrPhotos;
  if ((screen.width < screenDesktop) && (data.length > 3)) {
    lengthArrPhotos = 3;

  } else {
    lengthArrPhotos = data.length
  }

  for (var i = 0; i < lengthArrPhotos; i++) {
    var photoItemLink = document.createElement('a');
    photoItem.appendChild(photoItemLink);

    var photoItemImg = document.createElement('img');
    photoItemImg.classList.add('main__photo-img');
    photoItemImg.src = data[i].url;
    photoItemImg.id = data[i].id;
    photoItemLink.appendChild(photoItemImg);
  }
};


var errorHandler = function () {
  console.log("error");
};


var clickSuccess = function (data) {

  document.querySelector('.modal__body-img').src = data.url;
  if (data.comments[0] != undefined) {
    var date = new Date(data.comments[0]['date']);
    dateFormat = [
      ('0' + date.getDate()).slice(-2),
      ('0' + (date.getMonth() + 1)).slice(-2),
      date.getFullYear()
    ];

    var textDate = document.createElement('p');
    textDate.classList.add('modal__body-comments--data');
    textDate.innerHTML = dateFormat.join('.');
    document.querySelector('.modal__body-comments').appendChild(textDate);
  
    var textComment = document.createElement('p');
    textComment.classList.add('modal__body-comments--text');
    textComment.innerHTML = data.comments[0]['text'];
    document.querySelector('.modal__body-comments').appendChild(textComment);
  }
};

var clickError = function () {
  console.log("error");
;}

window.load(successHandler, errorHandler);

var clickMainPhoto = function (evt) {

  if (evt.target.classList.contains('main__photo-img')) {
    document.querySelector('.modal').style.display = 'block';
    document.querySelector('.main').style.pointerEvents = 'none';
    document.querySelector('body').style.overflow = 'hidden';

    var URL_LOAD = 'https://boiling-refuge-66454.herokuapp.com/images/' + evt.target.id;
    window.load(clickSuccess, clickError, URL_LOAD);

    var URL_UPLOAD = 'https://boiling-refuge-66454.herokuapp.com/images/' + evt.target.id + '/comments';
    document.querySelector('.modal__form').action = URL_UPLOAD;
  }
};

document.querySelector('.main__photo').addEventListener('click', clickMainPhoto);


  document.querySelector('.modal__close').addEventListener('click', function (evt) {
  document.querySelector('.main').style.pointerEvents = '';
  document.querySelector('.modal').style.display = 'none';
  document.querySelector('body').style.overflow = '';

  document.querySelector('.modal__body-img').src = "";
  var element = document.querySelector('.modal__body-comments');
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
});
