// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
          templateUrl: "templates/search.html"
        }
      }
    })

    .state('app.browse', {
      url: "/browse",
      views: {
        'menuContent' :{
          templateUrl: "templates/browse.html"
        }
      }
    })

    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.single', {
      url: "/playlists/:playlistId",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlist.html",
          controller: 'PlaylistCtrl'
        }
      }
    })
      .state('app.sign_up', {
          url: "/sign_up",
          views: {
              'menuContent' :{
                  templateUrl: "templates/sign_up.html"
              }
          }
      })
      .state('app.sign_in', {
          url: "/sign_in",
          views: {
              'menuContent' :{
                  templateUrl: "templates/sign_in.html"
              }
          }
      })
      .state('app.home', {
          url: "/home",
          views: {
              'menuContent' :{
                  templateUrl: "templates/home.html"
              }
          }
      })
      .state('app.find_merchant', {
          url: "/find_merchant",
          views: {
              'menuContent' :{
                  templateUrl: "templates/find_merchant.html"
              }
          }
      })
      .state('app.payment_confirmation', {
          url: "/payment_confirmation",
          views: {
              'menuContent' :{
                  templateUrl: "templates/payment_confirmation.html"
              }
          }
      })
      .state('app.payment_options', {
          url: "/payment_options",
          views: {
              'menuContent' :{
                  templateUrl: "templates/payment_options.html"
              }
          }
      })
      .state('app.splash', {
          url: "/splash",
          views: {
              'menuContent' :{
                  templateUrl: "templates/splash.html"
              }
          }
      });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/splash');
});

