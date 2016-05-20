function AddController($http, SERVER, $state){
  let vm = this;
  vm.addTask = addTask;

  function addTask(taskObj){
    //console.log(taskObj);
    taskObj.complete = false;
    //use $http to make post req to server
    $http.post(SERVER.URL +'tasks',taskObj,{ headers : SERVER.HEADERS}).then((res)=>{
      $state.go('root.list');
    })
  };
}

AddController.$inject =['$http','SERVER','$state'];

export { AddController };

