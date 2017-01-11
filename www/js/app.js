// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ChecklistApp', ['ionic', 'ChecklistApp.controllers', 'backand', 'ChecklistApp.services'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}).config(function(BackandProvider, $stateProvider, $urlRouterProvider, $httpProvider){


  BackandProvider.setAnonymousToken('53bcb5fa-51bb-45b3-976c-1dd2d037b754');
  //BackandProvider.setSignUpToken('Your SignUp Token');
  BackandProvider.setAppName('billockchecklist');

  $stateProvider
  // setup an abstract state for the tabs directive
    .state('checklists', {
      url: '/checklists',
      templateUrl: 'templates/checklists.html',
      controller: 'ChecklistsCtrl as vm'
    })
    .state('checklist', {
      url: '/checklists/:checklistId',
      templateUrl: 'templates/single_checklist.html',
      controller: 'SingleChecklistCtrl as vm'
    })
    /*.state('tab.dashboard', {
      url: '/dashboard',
      views: {
        'tab-dashboard': {
          templateUrl: 'templates/tab-dashboard.html',
          controller: 'DashboardCtrl as vm'
        }
      }
    })
    .state('tab.login', {
      url: '/login',
      views: {
        'tab-login': {
          templateUrl: 'templates/tab-login.html',
          controller: 'LoginCtrl as login'
        }
      }
    });*/

  $urlRouterProvider.otherwise('/checklists');


  $httpProvider.interceptors.push('httpInterceptor');

})
.run(function($rootScope, $state) {
  $state.go('checklists');
})