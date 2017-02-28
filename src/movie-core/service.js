/**
 * Created by asriv10 on 2/27/17.
 */

angular.module('movieCore', ['ngResource'])
    .factory('PopularMovies', function($resource) {

        return $resource('popular/:movieId', { movieId: '@id' }, {

            update: {
                method: 'PUT'
            }
        });

    });