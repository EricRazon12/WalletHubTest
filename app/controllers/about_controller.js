define(['app'], function (app) {
    app.controller('about_controller', function ($scope, value_provider) {
        $scope.title = 'About';
        $scope.GetValue = value_provider.GetValue();
    });
})