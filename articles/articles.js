(function() {
  'use strict';

  angular.module('articles.module').controller('Articles', Article);

  function Article($http, dataService) {
    var vm = this

    //initial values
    vm.isLoading = false; //handle loading message
    vm.hasResults = true; //handle no results found message
    vm.search = '';
    vm.articles = [];
    vm.buckets = [];
    dataService.getBuckets().then(function successCallback(response) {
      vm.buckets = response.data.data;
    }, function errorCallback(response) {
      console.warn(response);
    });

    //GET result of their search
    vm.loadRequest = function() {
      vm.isLoading = true;
      $http.defaults.headers.common['x-access-token'] = access_token;
      $http({
        method: 'GET',
        url: 'https://codetestapi-ozcontent.herokuapp.com/v1/articles.json',
        params: {
          query: vm.search
        }
      }).then(function successCallback(response) {
          vm.isLoading = false;
          vm.hasResults = true;

          //set articles data from server
          vm.articles = response.data.data;

          //if array is empty, results not found
          if (vm.articles.length === 0) {
            vm.hasResults = false;
          }
        }, function errorCallback(response) {
          vm.isLoading = false;
          console.warn(response);
        });
      //reset search field
      vm.search = '';
    } //end of loadRequest()

    // Still to implement, add article to selected bucket
    vm.handlePin = function(a, b) {
      $http({
                method: 'POST',
                dataType: 'jsonp',
                headers: {
                  'x-access-token': access_token,
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                url: 'https://codetestapi-ozcontent.herokuapp.com/v1/buckets/' + b + '/articles.json',
                transformRequest: function(obj) {
                  var str = [];
                  for(var p in obj)
                  str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                  return str.join("&");
              },
                data: {'object[article_id]': a.id }
              })
    };
  };

}());
