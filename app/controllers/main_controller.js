define(['app'], function (app) {

    app.controller('main_controller', function ($scope, value_provider, data, $timeout) {
        $scope.title = 'Main';
        $scope.setValue = function () {
            value_provider.SetValue($scope.txtValue);
        }

        $scope.data = data;

        $scope.txt1Update = function () {
            $timeout(function () {
                $scope.txtResult = parseFloat(($scope.txt1 ? $scope.txt1 : 0)) + parseFloat(($scope.txt2 ? $scope.txt2 : 0)) + parseFloat(($scope.txt3 ? $scope.txt3 : 0));
                $scope.oldVal = angular.copy($scope.txtResult);
            });
        }

        //$scope.$watch('txt1', function (newVal, oldVal) {

        //})
        $scope.txt2Update = function () {
            $timeout(function () {
                $scope.txtResult = parseFloat(($scope.txt1 ? $scope.txt1 : 0)) + parseFloat(($scope.txt2 ? $scope.txt2 : 0)) + parseFloat(($scope.txt3 ? $scope.txt3 : 0));
                $scope.oldVal = angular.copy($scope.txtResult);
            });
        };
        $scope.txt3Update = function () {
            $timeout(function () {
                $scope.txtResult = parseFloat(($scope.txt1 ? $scope.txt1 : 0)) + parseFloat(($scope.txt2 ? $scope.txt2 : 0)) + parseFloat(($scope.txt3 ? $scope.txt3 : 0));
                $scope.oldVal = angular.copy($scope.txtResult);
            });
        }

        //var inputChangedPromiseOldVal;
        //$scope.txtResultUpdateGetOldValue = function () {
        //    if (inputChangedPromiseOldVal) {
        //        $timeout.cancel(inputChangedPromiseOldVal);
        //    }
        //    inputChangedPromise = $timeout(function () {
        //        $scope.oldVal = $scope.txtResult;
        //    });
        //}

        var inputChangedPromise;
        $scope.txtResultUpdate = function () {
            
            if (inputChangedPromise) {
                $timeout.cancel(inputChangedPromise);
            }
            inputChangedPromise = $timeout(function () {
                var oldVal = $scope.oldVal;
                console.log(oldVal);
                var newVal = 0;
               // $timeout(function () {
                    newVal = $scope.txtResult;
              //  });
               // $timeout(function () {
                    if (newVal < oldVal) {
                        var subt = oldVal - newVal;
                        var resPerc = (subt / oldVal) * 100;
                        $scope.txt1 = $scope.txt1 - ((resPerc * parseFloat(($scope.txt1 ? $scope.txt1 : 0))) / 100);
                        $scope.txt2 = $scope.txt2 - ((resPerc * parseFloat(($scope.txt2 ? $scope.txt2 : 0))) / 100);
                        $scope.txt3 = $scope.txt3 - ((resPerc * parseFloat(($scope.txt3 ? $scope.txt3 : 0))) / 100);
                    } else if (newVal > oldVal) {
                        var _added = newVal - oldVal;
                        var resPerc = (_added / oldVal) * 100;
                        $scope.txt1 = $scope.txt1 + ((resPerc * parseFloat(($scope.txt1 ? $scope.txt1 : 0))) / 100);
                        $scope.txt2 = $scope.txt2 + ((resPerc * parseFloat(($scope.txt2 ? $scope.txt2 : 0))) / 100);
                        $scope.txt3 = $scope.txt3 + ((resPerc * parseFloat(($scope.txt3 ? $scope.txt3 : 0))) / 100);
                    }
                    $scope.oldVal = angular.copy($scope.txtResult);
              //  }, 1000);
            }, 1000);


        }
        //$scope.$watch('txtResult', function (newVal, oldVal) {

        //    $scope.newVal = newVal;
        //    $scope.$apply();
        //})
    });

})