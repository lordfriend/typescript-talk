angular.module('adminApp')
    .service('MessageService', function($http, $q) {
        var self = this;
        self.msgType = null;
        self.list = function(reqParams) {
            return $http.get('/trip-notify/msg/condition/page', { params: reqParams })
                .then(function(response) {
                    return response.data;
                });
        }
        self.getMsgType = function() {
            return $q(function(resolve) {
                if (self.msgType) {
                    resolve(self.msgType);
                } else {
                    $http.get('/trip-notify/msg/type')
                        .then(function(response) {
                            self.msgType = response.data.data;
                            resolve(self.msgType);
                        });
                }
            });
        };
    });