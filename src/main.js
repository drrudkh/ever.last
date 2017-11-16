import 'angular';
import 'angular-ui-router';
import 'angular-animate';
// Libs wrapper

// Module wrapper
import 'modules';
import 'scss/main.scss';



angular
    .module('app-bootstrap', [
        'ui.router',
        'ngAnimate',
        'modules'
    ]);

angular.element(document).ready(function() {
    angular.bootstrap(document, ['app-bootstrap']);
});