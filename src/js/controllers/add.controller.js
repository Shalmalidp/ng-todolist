function AddController($http, URL, $state){
  let vm = this;
  vm.addTask = addTask;

  function addTask(taskObj){
    //console.log(taskObj);
    taskObj.complete = false;
    //use $http to make post req to server
    $http.post(URL,taskObj).then((res)=>{
      // console.log(res);
      $state.go('root.list');
    })
  };
}

AddController.$inject =['$http','URL','$state'];

export { AddController };