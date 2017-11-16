export function slider($interval) {
    return {
        restrict: 'E',
        replace: true,
        template: require('../templates/slider.directive.html'),
        scope: {
        	data: '='
        },
        link: function($scope, element) {
            $scope.currentSlide = 1;

            $interval(function() {
            	if ($scope.currentSlide >= 2) {
            		$scope.currentSlide = 1;
            	} else {
            		$scope.currentSlide ++;
            	}
            }, 5000)
        }
    }
}