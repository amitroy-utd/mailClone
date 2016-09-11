var mailApp = angular.module("mailApp",['ngRoute']);

mailApp.factory('mailFactory', function mailFactory($q, $http, $location){
    var exports = {};

    exports.mails = [];
    

   /* (function fetchMails() {
        $http.get('../email.json')
        .success(function (data) {
            console.log('Success : ' + JSON.stringify(data));
            exports.mails = data;            
        })
        .error(function (data) {
            console.log('Failed'); 
        });
    })();*/

    

    exports.goToMail = function(index){
       return this.mails[index];
    };

    exports.deleteMail = function(index){
        console.log("index :" + index);
        this.mails.splice(index,1);
    };

    exports.fetchMails = function(){        
        return $http({'method' : 'GET', 'url' : '../email.json'})
            .error(function(data){
                    console.log('Error Occurred: '+ data);
            });
    };
        
   

    

    return exports;
});

mailApp.config(function($routeProvider){
    $routeProvider
        .when('/inbox', {
            controller : 'inboxController',            
            templateUrl : '../views/inbox.html'
        })
        .when('/inbox/email/:mailId', {
            controller : 'emailController',            
            templateUrl : '../views/email.html'
        })
        .otherwise({
         redirectTo: '/inbox'
      });
});

mailApp.controller("inboxController",['mailFactory', '$timeout', function($mailFactory, $timeout){
    var self = this;    
    $mailFactory.fetchMails().success(function(data){
        // Just for Demonstration. Ideally fresh data will be taken each time
        if(!$mailFactory.mails.length)
        {
            self.emails = data;
            $mailFactory.mails = data;
        }
        else
        {
            self.emails = $mailFactory.mails;
        }
    });
    
    
    
      
    
    this.deleteMail = function(index){
        $mailFactory.deleteMail(index);
    };
    
}]);

mailApp.controller("emailController",['mailFactory','$routeParams', function($mailFactory, $routeParams){    
    this.mail = $mailFactory.goToMail($routeParams.mailId);    

}]);