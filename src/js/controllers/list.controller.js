function ListController($http, URL){

  let vm = this;
  vm.toggleComplete = toggleComplete;
  init();


  function init(){
    $http.get(URL).then((res)=>{
      console.log(res);
      vm.taskList = res.data;
    })
  }

  function toggleComplete(task){
   if(task.complete){
    task.complete = false;
   } else{
    task.complete = true;
   }
   updateTaskOnServer(task);
  }

  function updateTaskOnServer(task){
    $http.put(URL +task._id, task).then((res)=>{
      console.log('task updated', task.complete)
    })
  }

}

ListController.$inject =['$http','URL'];

export {ListController};