import angular from 'angular';
import 'angular-ui-router';


//CONTROLLERS 
import{AddController} from './controllers/add.controller';
import{ListController} from './controllers/list.controller';

//CONFIG
import { config } from './config';


angular
  .module('app',['ui.router'])
  .config(config)
  .controller('AddController',AddController)
  .controller('ListController',ListController)
;
