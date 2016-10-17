
define(["angularAMD"
    , "angular"
    , "angular-ui-router"
    , 'angular-animate'
    , 'anim-in-out'
    , 'passValue'
    , 'teleFormatter'
    , 'currencyFormatter'
    , 'focus'
    , 'txtOnFocus'
    , 'data'
    ], function (angularAMD) {
    var app = angular.module('app', ['ui.router', 'ngAnimate', 'anim-in-out']);




    var controllerNameByParams = function ($stateParams) {
        if ($stateParams.paramTwo && $stateParams.paramThree) {
            return 'contact_controller';
        }
        else if ($stateParams.paramTwo) {
            return 'about_controller';
        }
        else {
            return 'main_controller';
        }
    }

    app.config([
        '$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
            .state('home', angularAMD.route({
                url:
                    '/{paramTwo}/{paramThree:(?:/[^/]+)?}',
                templateUrl: function ($stateParams) {
                    if ($stateParams.paramTwo && $stateParams.paramThree) {
                        return '/partial_pages/contact.html';
                    }
                    else if ($stateParams.paramTwo) {
                        return '/partial_pages/about.html';
                    }
                    else {
                        return '/partial_pages/home.html';
                    }
                },
                resolve: {
                    loadController: ['$q', '$stateParams',
                        function ($q, $stateParams) {
                            // get the controller name === here as a path to Controller_Name.js
                            // which is set in main.js path {}
                            var controllerName = controllerNameByParams($stateParams);

                            var deferred = $q.defer();
                            require([controllerName], function () { deferred.resolve(); });
                            return deferred.promise;
                        }]
                },
                controllerProvider: function ($stateParams) {
                    // get the controller name === here as a dynamic controller Name
                    var controllerName = controllerNameByParams($stateParams);
                    return controllerName;
                }
            }))
        }]);
    return angularAMD.bootstrap(app);
});