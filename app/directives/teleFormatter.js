require(['angularAMD'], function (angularAMD) {
    angularAMD.directive('teleFormatter', function () {
        return {
            require: 'ngModel',
            link: function (scope, element, attrs) {
                element.bind('keyup', function (event) {
                    var key = event.keyCode;
                    if (key != 43 && key > 31 && (key < 48 || key > 57)) {
                        scope.question5 = scope.question5.replace(/\D/g, '')
                        scope.$apply();
                    }
                    else if (scope.question5.length < 13) {
                        var value = scope.question5.toString().trim().replace(/^\+/, '');

                        if (value.match(/[^0-9]/)) {
                            return scope.question5;
                        }

                        var country, city, number;

                        switch (value.length) {
                            case 10: // +1PPP####### -> C (PPP) ###-####
                                country = 1;
                                city = value.slice(0, 3);
                                number = value.slice(3);
                                break;

                            case 11: // +CPPP####### -> CCC (PP) ###-####
                                country = value[0];
                                city = value.slice(1, 4);
                                number = value.slice(4);
                                break;

                            case 12: // +CCCPP####### -> CCC (PP) ###-####
                                country = value.slice(0, 3);
                                city = value.slice(3, 5);
                                number = value.slice(5);
                                break;

                            default:
                                return scope.question5;
                        }

                        if (country == 1) {
                            country = "";
                        }

                        number = number.slice(0, 3) + '-' + number.slice(3);

                        scope.question5 = (country + " (" + city + ") " + number).trim();
                        scope.$apply();
                    } else {
                        scope.question5 = scope.question5.slice(0, 14);
                        scope.$apply();
                    }
                });
            }
        };
    });

});