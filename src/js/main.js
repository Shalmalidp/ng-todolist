import angular from 'angular';
import 'angular-ui-router';


//CONTROLLERS 
import{AddController} from './controllers/add.controller';
import{ListController} from './controllers/list.controller';

//CONFIG
import { config } from './config';

const url = 'https://secret-forest-21470.herokuapp.com/collections/43rwedfsngtdo/';

angular
  .module('app',['ui.router'])
  .config(config)
  .constant('URL',url)
  .controller('AddController',AddController)
  .controller('ListController',ListController)
;
