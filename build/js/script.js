var photoItem = document.querySelector('.main__photo');

var successHandler = function (data) {
  console.log(data);


  for (var i = 0; i < data.length; i++) {
    var photoItemLink = document.createElement('a');
    photoItemLink.href = '#openModal';
    photoItem.appendChild(photoItemLink);

    var photoItemImg = document.createElement('img');
    photoItemImg.src = data[i].url;
    photoItemImg.id = data[i].id;
    photoItemLink.appendChild(photoItemImg);
  }

  console.log(photoItemImg);
  // dataPhoto = data;
  // doData(data);

  window.modalOpen()

document.addEventListener('click', function (evt) {
  console.log(evt.target);
})
};

var errorHandler = function () {
    // console.log(data)
};
    
console.log(34);
window.load(successHandler, errorHandler);



var doData = function () {
    console.log(data);
};

// doData();