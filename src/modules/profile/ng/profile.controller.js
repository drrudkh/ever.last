export class ProfileCtrl {
    constructor($scope) {
        this.$scope = $scope;
        this.userData = JSON.parse(localStorage.getItem('userData'));
        this.chartData = {
            data: {
                labels: [
                    "3 weeks ago",
                    "2 weeks ago",
                    "last week",
                    "now"
                ],
                datasets: [{
                    label: '# of scrobbles past 4 weeks',
                    data: this.userData.userWeeklyChartList,
                    borderColor: "#BB0000",
                    borderWidth: 2,
                }]
            },
            options: {
            	legend: {
            		display: false
            	},
            }
        }
    }

}

ProfileCtrl.$inject = ['$scope'];