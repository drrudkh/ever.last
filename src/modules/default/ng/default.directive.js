export function defaultDir() {
    return {
        replace: true,
        restrict: 'E',
        template: require('../templates/default.directive.html'),
        scope: {
            
        },

        link: function($scope) {
            console.log($scope);
        }
    }
}