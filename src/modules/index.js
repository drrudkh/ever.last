import 'landing';
import 'profile';
import 'tc-angular-chartjs'

export default angular
    .module('modules', [
        'landingModule', 'profileModule', 'tc.chartjs'
    ])

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('landing', {
                url: '/',
                templateUrl: 'modules/landing/templates/landing.controller.html',
                controller: 'LandingCtrl',
                controllerAs: 'vm'
            })
            .state('profile', {
                url: '/profile',
                templateUrl: 'modules/profile/templates/profile.controller.html',
                controller: 'ProfileCtrl',
                controllerAs: 'vm'
            })

        $urlRouterProvider.otherwise('/')
    })