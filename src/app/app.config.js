(function () {
    'use strict';
    angular.module('app')
        .config(configureRoutes)
        .config(toastrConfig)
        .config(configure)
        .config(translations);

    /* @ngInject */
    function configureRoutes($urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');
        $urlRouterProvider.otherwise('/404');
    }

    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }

    /* @ngInject */
    function configure($logProvider, routerHelperProvider, exceptionHandlerProvider) {
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }

        assert(env.name);
        const appTitle = env.name;
        exceptionHandlerProvider.configure(`[${appTitle}]`);
        routerHelperProvider.configure({docTitle: `${appTitle}: `});
    }

    /* @ngInject */
    function translations($translateProvider) {
        $translateProvider.useSanitizeValueStrategy(null);
        $translateProvider.registerAvailableLanguageKeys(['en', 'fr']);
        $translateProvider.useStaticFilesLoader({ //need additional bower lib
            prefix: "src/resources/i18n/",
            suffix: ".json"
        });

        $translateProvider.preferredLanguage('en');
      }

})();
