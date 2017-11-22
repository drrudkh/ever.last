export function milestone() {
    return {
        restrict: 'E',
        replace: true,
        template: require('../templates/milestone.directive.html'),
        scope: {
        	data: '='
        },
        link: function($scope, element) {

        }
    }
}