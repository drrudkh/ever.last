import { LandingCtrl } from './ng/landing.controller.js';
import { UserService } from './ng/user.service.js';


export default angular
    .module('landingModule', [])
    .controller('LandingCtrl', LandingCtrl)
    .service('UserService', UserService)
