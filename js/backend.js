'use strict';

(function () {

  var STATUS_CODE_OK = 200;
  var TIMEOUT_IN_MS = 10000;

  var error = function (status) {

    var mistake;

    switch (status) {

      case 301:
        mistake = 'перемещено навсегда';
        break;

      case 302:
        mistake = 'перемещено временно';
        break;

      case 307:
        mistake = 'временное перенаправление';
        break;

      case 400:
        mistake = 'Неверный запрос';
        break;

      case 401:
        mistake = 'Пользователь не авторизован';
        break;

      case 404:
        mistake = 'Ничего не найдено';
        break;

      case 410:
        mistake = 'удалён';
        break;

      case 500:
        mistake = 'внутренняя ошибка сервера';
        break;

      case 503:
        mistake = 'сервис недоступен';
        break;

      case 521:
        mistake = 'веб-сервер не работает';
        break;

      default:
        mistake = 'Cтатус ответа: ' + status;

    }

    return mistake;
  };


  var getError = function (message) {
    var node = document.createElement('div');

    node.style.minWidth = '300px';
    node.style.height = '30px';
    node.style.lineHeight = '30px';
    node.style.background = 'red';
    node.style.position = 'fixed';
    node.style.zIndex = '100';
    node.style.padding = '0 10px';
    node.style.color = 'fff';
    node.style.fontSize = '16px';
    node.textContent = 'Данные о похожих волшебниках : ' + message;

    document.body.insertAdjacentElement('afterbegin', node);
  };

  var setRequest = function (url, method, onLoad, onError, data) {

    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {

      if (xhr.status === STATUS_CODE_OK) {
        onLoad(xhr.response);
      } else {
        onError(error(xhr.status));
      }

    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT_IN_MS;


    xhr.open(method, url);
    xhr.send(data);

  }

  var load = function (url, method, onLoad, onError) {
    setRequest(url, method, onLoad, onError);
  };


  var save = function (url, method, onLoad, onError, data) {
    setRequest(url, method, onLoad, onError, data)
  };


  window.backend = {
    load: load,
    save: save,
    getError: getError,
  };

})();
