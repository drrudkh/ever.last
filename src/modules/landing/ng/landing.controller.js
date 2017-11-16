export class LandingCtrl {
    constructor($scope, $location, UserService) {
        this.$scope = $scope;
        this.service = UserService;
        this.$location = $location;
        this.error = null;
    }

    validateUser() {
        this.error = null;
        this.service.getData(this.$scope.username)
            .then(resp => {
                if (resp.userInfo.data.user) {
                    localStorage.setItem('userData', JSON.stringify(resp));
                    this.$location.path('/profile');
                } else {
                    this.error = resp.userInfo.data.message;
                }
            })
    }


}

LandingCtrl.$inject = ['$scope', '$location', 'UserService'];