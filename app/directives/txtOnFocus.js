require(['angularAMD'], function (angularAMD) {

    angularAMD.directive('txtOnFocus', function (focus, $timeout, $filter) {
        return {
            restrict: 'A',
            //require: 'ngModel',
            link: function postLink(scope, element, attrs) {
                element.bind('keydown', function () {
                    $timeout(function () {
                        element.val($filter('limitTo')(element.val(), 5));
                        if (element.val().length === 5) {
                            if (attrs.nextTxt) {
                                focus(attrs.nextTxt);
                            }
                        } else if (!element.val().length) {
                            if (attrs.prevTxt) {
                                focus(attrs.prevTxt);
                            }
                        }
                    });
                });
            }
        };

    });

});