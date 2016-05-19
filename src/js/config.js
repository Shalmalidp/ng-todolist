function config($stateProvider,$urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root',{
      abstract:true,
      templateUrl : 'templates/layout.tpl.html'
    })
    .state('root.list',{
      url :'/',
      templateUrl :'templates/list.tpl.html',
      Controller :'ListController as vm' 
    })
    .state('root.add',{
      url :'/add',
      templateUrl :'templates/add.tpl.html',
      Controller :'AddController as vm' 

    })

  
}

config.$inject =['$stateProvider','$urlRouterProvider'];
export {config};