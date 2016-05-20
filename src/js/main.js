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
  .constant('SERVER', {
    URL     :'https://api.backand.com/1/objects/',
    HEADERS : {
          AnonymousToken : '025808d5-daab-4c10-887e-31a9e8f752ad'
    }
  })
  .controller('AddController',AddController)
  .controller('ListController',ListController)
;
