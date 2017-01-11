angular.module('ChecklistApp.services', [])

.service('httpInterceptor', function($rootScope, $q) {
  var service = this;

  service.responseError = function(response) {
    if (response.status === 401) {
      $rootScope.$broadcast('unauthorized');
    }
    return $q.reject(response);
  };
})

.service('ChecklistsModel', function ($http, Backand) {
  var service = this,
      baseUrl = '/1/objects/',
      objectName = 'checklists/';

  function getUrl() {
    return Backand.getApiUrl() + baseUrl + objectName;
  }

  function getUrlForId(id) {
    return getUrl() + id;
  }

  service.all = function () {
    return $http.get(getUrl());
  };

  service.fetch = function (id) {
    return $http.get(getUrlForId(id));
  };

  service.fetchDeep = function (id) {
    return $http.get(getUrlForId(id)+"?deep=true");
  };

  service.create = function (object) {
    return $http.post(getUrl(), object);
  };

  service.update = function (id, object) {
    return $http.put(getUrlForId(id), object);
  };

  service.delete = function (id) {
    return $http.delete(getUrlForId(id));
  };

  service.getEntries = function(id) {
    return $http.get(getUrl() + '/' + id + '/entries'); 
  };
})

/*.service('EntriesModel', function ($http, Backand) {
  var service = this,
      baseUrl = '/1/objects/',
      objectName = 'entries/';

  function getUrl() {
    return Backand.getApiUrl() + baseUrl + objectName;
  }

  function getUrlForId(id) {
    return getUrl() + id;
  }

  service.all = function () {
    return $http.get(getUrl());
  };

  service.fetch = function (id) {
    return $http.get(getUrlForId(id));
  };

  service.create = function (object) {
    return $http.post(getUrl(), object);
  };

  service.update = function (id, object) {
    return $http.put(getUrlForId(id), object);
  };

  service.delete = function (id) {
    return $http.delete(getUrlForId(id));
  };
})*/