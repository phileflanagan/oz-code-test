(function() {
  'use strict';

  angular.module('app').service('dataService', function($http) {
    var vm = this;
    vm.buckets = [];
    vm.getBuckets = function() {
      $http.defaults.headers.common['x-access-token'] = access_token;
      return $http({
        method: 'GET',
        url: 'https://codetestapi-ozcontent.herokuapp.com/v1/buckets.json',
      });
    };

  });

}());
