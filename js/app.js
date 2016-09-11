var mailApp = angular.module("mailApp",[]);

var emails = [
    {
        id: '1',
        subject: 'Github',
        from: 'Robert',
        body : ' hfeifhif hgoiefw gewoigenwofg',
        date: '09/11/2016'
    },
    {
        id: '2',
        subject: 'Google',
        from: 'Lisa',
        body : ' bvbxkv iuhwruw fhohriofwifjo',
        date: '08/10/2016'
    },
    {
        id: '3',
        subject: 'Facebook',
        from: 'John',
        body : ' qiwpqiq oiroirporwr ',
        date: '07/11/2016'
    },
    {
        id: '4',
        subject: 'Twitter',
        from: 'Sarah',
        body : ' jhkhjk rthrth dgwt',
        date: '06/11/2016'
    }
]
mailApp.controller("mailController",[function(){
    this.emails = emails;

}]);