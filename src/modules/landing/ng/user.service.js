export class UserService {
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
        this.rootUrl = 'http://ws.audioscrobbler.com/2.0/';
        this.apiKey = '2efac9b279d6c47a5746d483f291bcba';
    }

    buildUrl(method, user) {
        return `${this.rootUrl}?method=${method}&user=${user}&api_key=${this.apiKey}&format=json`;
    }

    buildPromiseObj(user) {
        var promises = Object.assign({}, ...['Info', 'TopArtists', 'WeeklyChartList'].map(value => ({
            [`user${value}`]: this.$http.get(this.buildUrl(`user.get${value}`, user))
        })));

        promises.userWeeklyChartList = promises.userWeeklyChartList.then(resp => {
            return this.$q.all(resp.data.weeklychartlist.chart.slice(-4).map(value => {
                return this.$http
                    .get(this.buildUrl('user.getWeeklyTrackChart', user) + `&from=${value.from}&to=${value.to}`)
                    .then(resp => resp.data.weeklytrackchart.track.length)
            }))
        })

        return promises;
    }

    getData(user) {
        return this.$q.all(this.buildPromiseObj(user))
            .then(resp =>
                resp
            ).catch(err => {
                throw new Error(err.status);
            });
    }
}

UserService.$inject = ['$http', '$q'];