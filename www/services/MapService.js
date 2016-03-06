(function () {
   'use strict';

   var app = angular.module('starter.services');

   app.factory('MapService', [function () {

       function MapService() {
           var self = this;

           var BASE_URL =  "/api/Escolas/";

           self.GetPlaces = function () {

               var deferred = $q.defer();
               var promise = deferred.promise;

               promise = $http.get(BASE_URL + "GetAll");
               promise.success(function (response) {
                   deferred.resolve;
                   return promise;
               });
               promise.error(function (response, status) {
                   deferred.reject(response);
                   return promise;
               });
               return promise;          
           }
       };

       return new MapService();
   }]);
}());