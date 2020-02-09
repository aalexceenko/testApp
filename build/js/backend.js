'use strict';

(function () {

  var TIMEOUT = 10000;

  var HttpStatusCodes = {
    SUCCESS: 200,
    SUCCESS_UPLOAD: 204,
    BAD_REQUEST: 400,
    USER_UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    SERVER_ERROR: 500
  };

  window.load = function (onLoad, onError, URL_LOAD='https://boiling-refuge-66454.herokuapp.com/images') {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.timeout = TIMEOUT;
    xhr.open('GET', URL_LOAD);

    xhr.addEventListener('load', function () {
      switch (xhr.status) {
        case HttpStatusCodes.SUCCESS:
          onLoad(xhr.response);
          break;
        case HttpStatusCodes.BAD_REQUEST:
          onError('Неверный запрос');
          break;
        case HttpStatusCodes.USER_UNAUTHORIZED:
          onError('Пользователь не авторизован');
          break;
        case HttpStatusCodes.NOT_FOUND:
          onError('Страница не найдена');
          break;
        case HttpStatusCodes.SERVER_ERROR:
          onError('Внутренняя ошибка сервера');
          break;
        default:
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.send();
  };

})();

