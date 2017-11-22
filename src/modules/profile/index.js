import { ProfileCtrl } from './ng/profile.controller.js';
import { milestone } from './ng/milestone.directive.js';
import { UserService } from '../landing/ng/user.service.js';

export default angular
    .module('profileModule', [])
    .controller('ProfileCtrl', ProfileCtrl)
    .directive('milestone', milestone)
    .service('UserService', UserService)