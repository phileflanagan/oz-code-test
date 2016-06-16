(function() {
  'use strict';

  angular.module('app.routes', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/articles");

    $stateProvider
      .state('articles', {
        url: '/articles',
        templateUrl: 'articles/articles.html',
        controller: 'Articles',
        controllerAs: 'article'
      })
      .state('articles.item', {
        url: '/:item',
        templateUrl: 'articles/articles.html',
        controller: 'Articles',
        controllerAs: 'article'
      })
      .state('buckets', {
        url: '/buckets',
        templateUrl: 'buckets/buckets.html',
        controller: 'Buckets',
        controllerAs: 'bucket'
      })
      .state('buckets.item', {
        url: '/:item',
        templateUrl: 'buckets/buckets.html',
        controller: 'Buckets',
        controllerAs: 'bucket'
      });
  });

}());
