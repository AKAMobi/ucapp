angular.module('RouteConfig', [])

.config(function($stateProvider, $urlRouterProvider) {
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  //用户登录
  .state('login', {
    url: '/login/:refer_state',
    controller: 'LoginCtrl',
    templateUrl: 'templates/tab-login.html',
  })

  .state('tab.event', {
    url: '/event',
    data: {hide_tab: false},
    views: {
      'tab-event': {
        templateUrl: 'templates/tab-event.html',
        controller: 'EventCtrl'
      }
    }
  })

  .state('tab.event-detail', {
    data: {hide_tab: true},
    url: '/event/:eventId',
    views: {
      'tab-event': {
        templateUrl: 'templates/event-detail.html',
        controller: 'EventDetailCtrl'
      }
    }
  })

  .state('tab.message', {
    data: {
      need_login: true,
      hide_tab:  false
    },
    url: '/message',
    views: {
      'tab-message': {
        templateUrl: 'templates/tab-message.html',
        controller: 'MessageCtrl'
      }
    }
  })

  .state('tab.message-detail', {
    data: {need_login: true, hide_tab: true},
    url: '/message/:messageId',
    views: {
      'tab-message': {
        templateUrl: 'templates/message-detail.html',
        controller: 'MessageDetailCtrl',
      }
    }
  })

  .state('tab.contact', {
    url: '/contact',
    data: {
      need_login: true,
      hide_tab:   true
    },
    views: {
      'tab-discovery': {
        templateUrl: 'templates/tab-contact.html',
        controller: 'ContactCtrl'
      }
    }
  })

  .state('tab.contact-detail', {
    url: '/contact/:contact',
    data: {
      need_login: true,
      hide_tab:   true
    },
    views: {
      'tab-discovery': {
        templateUrl: 'templates/contact-detail.html',
        controller: 'ContactDetailCtrl'
      }
    }
  })

  .state('tab.discovery', {
    url: '/discovery',
    data: {
      hide_tab: false
    },
    views: {
      'tab-discovery': {
        templateUrl: 'templates/tab-discovery.html',
        controller: 'DiscoveryCtrl'
      }
    }
  })

  .state('tab.friendcircle', {
    data: {
      hide_tab: true
    },
    url: '/friendcircle',
    views: {
      'tab-discovery': {
        templateUrl: 'templates/tab-friendcircle.html',
        controller: 'FriendcircleCtrl',
      }
    }
  })

  .state('tab.publishtxt', {
    data: {
      hide_tab: true
    },
    url: '/publishtxt',
    views: {
      'tab-discovery': {
        templateUrl: 'templates/publishtxt.html',
        controller: 'PublishtxtCtrl',
      }
    }
  })

  // 聊天室 tab
  .state('chatroom', {
    url: '/chatroom',
    templateUrl: 'templates/tab-chatroom.html',
    controller: 'ChatroomCtrl'
  })

  .state('tab.account', {
    data: {need_login: true},
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('tab.personalHomepage', {
    data: {need_login: true, hide_tab: true},
    url: '/personalHomepage',
    views: {
      'tab-discovery': {
        templateUrl: 'templates/personal_homepage.html',
        controller: 'PersonalHomepageCtrl'
      }
    }
  })

  .state('tab.personalContactHomepage', {
    data: {need_login: true, hide_tab: true},
    url: '/personalContactHomepage/:contact',
    views: {
      'tab-discovery': {
        templateUrl: 'templates/personal_homepage.html',
        controller: 'PersonalContactHomepageCtrl'
      }
    }
  })

  .state('tab.personalHomepage-detail', {
    data: {need_login: true, hide_tab: true},
    url: '/personalHomepage/:infoId',
    views: {
      'tab-discovery': {
        templateUrl: 'templates/personal_homepage_detail.html',
        controller: 'PersonalHomepageDetailCtrl'
      }
    }
  })

  // 设置
  .state('setting', {
    data: {need_login: true},
    url: '/setting',
    templateUrl: 'templates/setting.html',
    controller: 'SettingCtrl'
  });

  /*
   * if none of the above states are matched, use this as the fallback
   * http://stackoverflow.com/questions/25065699/why-does-angularjs-with-ui-router-keep-firing-the-statechangestart-event
   */
  $urlRouterProvider.otherwise(function($injector, $location) {
    var $state = $injector.get('$state');
    $state.go('tab.event');
  });
});
