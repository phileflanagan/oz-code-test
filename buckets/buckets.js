(function() {
  'use strict';

  angular.module('buckets.module').controller('Buckets', Buckets);

  function Buckets($http, bucketsDataService, $scope){
    var vm = this;

    //initial values
    vm.buckets = [];
    vm.bucketName = '';
    vm.bucketRename = '';
    vm.isAdding = false;

    //Get Buckets
    vm.getBuckets = function() {
      bucketsDataService.getBuckets().then(function successCallback(response) {
        //set buckets from server equal to vm.buckets
        vm.buckets= response.data.data
        console.log(vm.buckets);
      }, function errorCallback(response) {
        console.warn(response);
      });
    }
    vm.getBuckets();


    //POST new bucket
    vm.addBucket = function() {
      if (vm.bucketName !== '') {
        bucketsDataService.postNewBucket(vm.bucketName).then(function successCallback(response) {
            vm.buckets.push(response.data.data)
          }, function errorCallback(response) {
            vm.isLoading = false;
            console.warn(response);
          });

        //clear form data
        vm.isAdding = false;
        vm.bucketName = '';
      } else {
        alert('Bucket cannot have a blank name');
      }

    }
    vm.cancelAdd = function() {
      //clear form data
      vm.isAdding = false;
      vm.bucketName = '';
    }

    //Rename bucket with PATCH
    vm.renameBucket = function(self) {
      bucketsDataService.patchBucket(self.b.id, self.bucketRename).then(function successCallback(response) {
          self.b.name = response.data.data.name;
        }, function errorCallback(response) {
          vm.isLoading = false;
          console.warn(response);
        });

        //clear form data
        self.bucketRename = '';
        self.isRenaming = false;
    }

    vm.cancelRename = function(self) {
      self.bucketRename = '';
      self.isRenaming = false;
    }

    vm.removeArticle = function(a, b, self) {
      bucketsDataService.deleteArticleFromBucket(a.id, b.id);
      a.title='';
    }

  }

}());
