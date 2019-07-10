/* Title: Command
			 Description: creates objects which encapsulate actions and parameters
			 */

/**
 * Command pattern 
 *  - user pass the command config object rather than call the command 
 * on the target object
 * 
 */

 /**
  * Let's encapsulate the object and exposes only the `execute` function
  */

  let execute = (function(){

    const commandObject ={};
    commandObject.killProcess = function(pid){
        console.log("kill the process with the id: " + pid);
    }
    commandObject.startProcess = function(pid){
        console.log('start process with the pid: ' + pid)
    }

    return (command)=>{
        commandObject[command.request](command.pid);
    };
  
}());

/**
 * Now i can expose the function to some other scope
 * and expose the possible commands that can be called
 * by a xml cofig or a json config
 * 
 * - whats missing is a check for  a missing command
 *  
 */
execute({request:'killProcess',pid:"1782#-bd-23"})
execute({request:'startProcess',pid:"1882#-bd-28"})