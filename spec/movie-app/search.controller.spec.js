/**
 * Created by asriv10 on 2/27/17.
 */

describe('search controller', function() {

    var $scope;
    var $location;

    beforeEach(function() {

        $scope = {};

        $location = {

            url: ''
        };

        $scope.search = function() {

            if($scope.query) {
                $location.url = '/results?q=star%20wars';
            }
        };
    });

    it('should redirect to query results page for non empty query', function() {

        $scope.query = 'start wars';
        $scope.search();
        expect($location.url).toBe('/results?q=star%20wars');

    });

    it('should not redirect to query results for empty query', function() {

        $scope.query = '';
        $scope.search();

        expect($location.url).toBe('');

    })



});