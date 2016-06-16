(function() {
  'use strict';

  angular.module('buckets.module').service('bucketsDataService', function($http) {

    this.postNewBucket = function(x) {
      return  $http({
                method: 'POST',
                dataType: 'jsonp',
                headers: {
                  'x-access-token': access_token,
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                url: 'https://codetestapi-ozcontent.herokuapp.com/v1/buckets.json',
                transformRequest: function(obj) {
                  var str = [];
                  for(var p in obj)
                  str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                  return str.join("&");
              },
                data: {'object[name]': x}
              })
    }

    this.patchBucket = function(bucketId, bucketRename) {
      return  $http({
                method: 'PATCH',
                dataType: 'jsonp',
                headers: {
                  'x-access-token': access_token,
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                url: 'https://codetestapi-ozcontent.herokuapp.com/v1/buckets/'+ bucketId +'.json',
                transformRequest: function(obj) {
                  var str = [];
                  for(var p in obj)
                  str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                  return str.join("&");
              },
                data: {
                  'object[name]': bucketRename
                }
              })
    }

    this.deleteArticleFromBucket = function(articleId, bucketId) {
      return  $http({
                method: 'DELETE',
                headers: {
                  'x-access-token': access_token,
                },
                url: 'https://codetestapi-ozcontent.herokuapp.com/v1/buckets/'+ bucketId + '/articles/' + articleId + '.json'
              })
    }

    this.getBuckets = function() {
      $http.defaults.headers.common['x-access-token'] = access_token;
      return  $http({
                method: 'GET',
                url: 'https://codetestapi-ozcontent.herokuapp.com/v1/buckets.json',
              })
    }
  });

}());
