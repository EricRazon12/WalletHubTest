define(['app'], function (app) {

    app.controller('contact_controller', function ($scope, value_provider) {
        $scope.title = 'Contact';
        $scope.GetValue = value_provider.GetValue();
    });

})