/* Title: Chain of responsibility
			 Description: delegates commands to a chain of processing objects
*/

/**
 * Delegates the same command to chain of processing objects
 * - translates to processing objects should have the same interface
 */

 function commonInterface(delgate){
     /**
      * Just a blank constructor - interface would be on the prototype
      */
     this.TheDelegateObject = delgate || null;
 }
 commonInterface.prototype.handler = function(someCondition){
        if(someCondition && this.TheDelegateObject ){
            console.log("The is a delegate -- hence chain");
            this.TheDelegateObject.handler(someCondition);
        }else{
            console.log("since no delegate -- no pain");
        }
}

 let origin = new commonInterface();
 let soldier = new commonInterface(origin);
 let platoonLeader = new commonInterface(soldier);
 let captain = new commonInterface(platoonLeader);
 /**
  * You can monkey patch the below call too
  */
 captain.handler(true);

 /**
  * The monkey patch
  */
 let _handler = captain.handler; // <- though this is a direct borrow from the prototype

 captain.handler = function(){
     // do your jazz here and then pass the baton to the original implementation
     console.log("my swag and jazz");
     _handler.call(this,true)
 }
 
 captain.handler();