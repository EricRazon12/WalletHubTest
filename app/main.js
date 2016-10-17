require.config({
    paths: {
        'angular': '/lib/angular',
        'angular-animate': '/lib/angular-animate',
        'anim-in-out': '/lib/anim-in-out',
        'angular-ui-router': '/lib/angular-ui-router',
        'angularAMD': '/lib/angularAMD',

        'main_controller': 'controllers/main_controller',
        'about_controller': 'controllers/about_controller',
        'contact_controller': 'controllers/contact_controller',
        'passValue': 'factories/passValue',
        'focus': 'factories/focus',
        'data': 'factories/data',
        'teleFormatter': 'directives/teleFormatter',
        'currencyFormatter': 'directives/currencyFormatter',
        'txtOnFocus': 'directives/txtOnFocus'
    },

    shim: {
        "angularAMD": ["angular"],
        "angular-ui-router": ["angular"],
        "angular-animate": ["angular"],
        "anim-in-out": ["angular-animate", "angular"]
    },

    deps: ['app']
});