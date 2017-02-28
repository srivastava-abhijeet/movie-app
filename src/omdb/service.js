/**
 * Created by asriv10 on 2/25/17.
 */

angular.module('omdb', []).
    factory('omdbApi', function($http, $q) {

        var service = {};
        var baseUrl = 'http://www.omdbapi.com/?v=1&';

        function httpPromise(url) {

            var deferred = $q.defer();
            $http.get(url)
                .success(function(data) {
                    deferred.resolve(data);
                })
                .error(function() {
                   deferred.reject();
                });
            return deferred.promise;
        }

        service.search = function(query) {

            var url = baseUrl + 's=' + encodeURIComponent(query);
            return httpPromise(url);

        };

        service.find = function(id) {

            var url = baseUrl + 'i=' + encodeURIComponent(id);
            return httpPromise(url);
        };

        return service;
    });