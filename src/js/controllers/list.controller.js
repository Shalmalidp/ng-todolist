function ListController($http, SERVER){

  let vm = this;
  vm.toggleComplete = toggleComplete;
  init();


  function init(){
    $http.get(SERVER.URL +'tasks',{headers : SERVER.HEADERS}).then((res)=>{
      console.log(res);
      vm.taskList = res.data.data;
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
    $http.put(SERVER.URL+'tasks/'+ task.id, task,{headers : SERVER.HEADERS }).then((res)=>{
      console.log('task updated', task.complete)
    })
  }

}

ListController.$inject =['$http','SERVER'];

export {ListController};