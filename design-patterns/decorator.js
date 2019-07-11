/* Title: Decorator
			 Description: dynamically adds/overrides behaviour in an existing method of an object
			 */

/**
 * Decorator 
 * - this pattern allows you to add new functionality dynamically on top of 
 * whatever is existing 
 * - should be easier to dis-engage or eject the decorator existing above
 * 
 */

 /**
  * keeping things simple -- decorator in terms of functions/methods
  * drawback s
  * - it mutates the original object
  * - sequential executions of the decorators
  */

  function decorator_v0(decorator_Fn,decoratorTargetMethod,context){
     /**
      * uses sort of monkey patching then creating a new object 
      * */
    const _handle = context[decoratorTargetMethod];
    context[decoratorTargetMethod] = function(){
        decorator_Fn.call(this);
        _handle.call(this);
    }
  }
  
  


  /**USAGE -- */
  var obj = {
      helper:()=>{
          console.log("the original::");
      }
  };
  decorator_v0(()=>{ 
                    console.log("level-1 decorator::");
                },
                "helper",
                obj);
    
obj.helper();


decorator_v0(()=>{ 
    console.log("level-2 decorator::");
    },
    "helper",
    obj);
    
obj.helper();



/**
   * v2
   * - lets not mutate the underlying object 
   * - only way to have a chain effect is by being similar to chain-of-responsibilty pattern
   * - two ways - new obj should have ref to it's past object OR
   * - OR --> let decorators and the starting object become part of a prototype hierarchy
   */
  function decorator_v2(decorator_Fn, MethodName, context ){
    let fn = function(){};
    fn.prototype = context;
    let decoratedInstance = new fn();
    decoratedInstance[MethodName] = function(){
        decorator_Fn.call(this);
        context[MethodName]();
    }
    return decoratedInstance;
}
/** USAGE - v2
 * 
 * - here my original object is still intact and not mutated
 */

var obj2 = {
    helper:()=> console.log("level 0` decoration ::")
};
obj2 = decorator_v2(
    ()=> console.log("level 1` decoration ::"),
    "helper",
    obj2
);
obj2 = decorator_v2(
    ()=> console.log("level 2` decoration ::"),
    "helper",
    obj2
);
obj2 = decorator_v2(
    ()=> console.log("level 3` decoration ::"),
    "helper",
    obj2
);

obj2.helper();



