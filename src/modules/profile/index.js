import { ProfileCtrl } from './ng/profile.controller.js';
import { slider } from './ng/slider.directive.js';
import { UserService } from '../landing/ng/user.service.js';

export default angular
    .module('profileModule', [])
    .controller('ProfileCtrl', ProfileCtrl)
    .directive('slider', slider)
    .service('UserService', UserService)