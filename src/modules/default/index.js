import { DefaultCtrl } from './ng/default.controller.js';
import { defaultDir } from './ng/default.directive.js';
import './main.scss';

export default angular
    .module('defaultModule', [])
    .controller('DefaultCtrl', DefaultCtrl)
    .directive('defaultDir', defaultDir)
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: 'modules/default/templates/default.controller.html',
            controller: 'DefaultCtrl',
            controllerAs: 'vm'
        })
        $urlRouterProvider.otherwise('/')
})