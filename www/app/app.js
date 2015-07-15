(function() {
    'use strict';
    angular.module('app', [
        'ionic',
        'ngCordova',
        'ionic.service.core',
        'ionic.service.push',
        'ionic.service.deploy',
        'templates',
        'app.routes',
        'app.notes'
    ])
    .constant("mdl", componentHandler) // Provide material design lite as a constant
    .config(config)
    .run(appRun);

    // @ngInject
    function config($ionicAppProvider) {
        // Identify app
        $ionicAppProvider.identify({
            // The App ID (from apps.ionic.io) for the server
            app_id: 'YOUR_APP_ID',
            // The public API key all services will use for this app
            api_key: 'YOUR_PUBLIC_KEY',
            // The GCM project ID (project number) from your Google Developer Console (un-comment if used)
            // gcm_id: 'GCM_ID'
        });
    }

    // @ngInject
    function appRun($rootScope, $ionicDeploy, $ionicPlatform, $cordovaStatusbar, mdl) {
        //When device is ready
        $ionicPlatform.ready(function() {

            // Hide the accessory bar by default
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }

            // Color the iOS status bar text to white
            if (window.StatusBar) {
                $cordovaStatusbar.overlaysWebView(true);
                $cordovaStatusBar.style(1); //Light
            }

            // Default update checking
            $rootScope.updateOptions = {
                interval: 2 * 60 * 1000
            };

            // Watch Ionic Deploy service for new code
            $ionicDeploy.watch($rootScope.updateOptions).then(function() {}, function() {}, function(hasUpdate) {
                $rootScope.lastChecked = new Date();
                console.log('WATCH RESULT', hasUpdate);
            });

            $rootScope.$on('$ionicView.afterEnter', function(){
                mdl.upgradeAllRegistered();
            });
        });
    }
})();