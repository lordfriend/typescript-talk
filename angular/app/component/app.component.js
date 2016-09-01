/// <reference path="../services/message.service.d.ts"/>
angular.module('adminApp')
    .component('app', {
    controller: function (MessageService) {
        var $ctrl = this;
        $ctrl.parentMsgType = 1;
        $ctrl.msgTypeList = [];
        $ctrl.condition = 1;
        $ctrl.needHandle = false;
        $ctrl.msgList = [];
        $ctrl.getMessage = function () {
            return MessageService.list({
                msgType: $ctrl.msgType,
                needHandle: $ctrl.needHandle,
                condition: $ctrl.needHandle ? $ctrl.condition : undefined,
                page: 1,
                count: 20
            })
                .then(function (result) {
                $ctrl.msgList = result.data;
            });
        };
        $ctrl.$onInit = function () {
            MessageService.getMsgType()
                .then(function (typeList) {
                var i;
                for (i = 0; i < typeList.length; i++) {
                    var type = typeList[i];
                    if (type.parentMsgType === $ctrl.parentMsgType) {
                        $ctrl.needHandle = type.needHandle;
                        $ctrl.msgTypeList = type.childMsgTypes;
                        break;
                    }
                }
                $ctrl.msgType = $ctrl.msgTypeList[0].msgType;
                return $ctrl.getMessage();
            });
        };
    },
    templateUrl: 'app/component/app.html'
});
