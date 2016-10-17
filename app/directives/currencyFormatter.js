require(['angularAMD'], function (angularAMD) {

    angularAMD.directive('currencyFormatter', function ($timeout) {

        function formatCurrency(num) {
            num = num.toString().replace(/\$|\,/g, '');
            if (isNaN(num)) {
                num = "0";
            }

            sign = (num == (num = Math.abs(num)));
            num = Math.floor(num * 100 + 0.50000000001);
            cents = num % 100;
            num = Math.floor(num / 100).toString();

            if (cents < 10) {
                cents = "0" + cents;
            }
            for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3) ; i++) {
                num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
            }

            return (((sign) ? '' : '-') + '$' + num + (cents < 1 ? '' : '.' + cents));
        }

        return {
            restrict: 'A',
            require: 'ngModel',
            link: function postLink(scope, element, attrs) {
                element.bind('keydown', function (event) {
                    $timeout(function () {
                        var key = event.keyCode;
                        if (key != 43 && key > 31 && (key < 48 || key > 57)) {
                            scope.aNumber = scope.aNumber.replace(/[^0-9$.,]/g, ''); //.replace(/[^0-9\.]+/g, ''); //.replace(/\D/g, '') remove all non-numeric
                        }
                        
                        var arr = String(scope.aNumber).split("");
                       
                        if (arr[arr.length - 1] != '.') {
                            var raw = String(scope.aNumber).replace('$', '').replace(',', '');
                            scope.aNumber = formatCurrency(raw);
                            scope.$apply();
                        } else {
                        }
                    }, 300);
                })
            }
        };
    });

});