/* 
   Title: Iterator
   Description: implements a specialized language
*/
/**
 * though it's not an inteface in classical terms but a constructor
 * 
 * idea here is to  iterate through enumerable properties using an `interface` 
 * provided by an iterable object.
 * 
 * 
 */
/** @plain_constructor */
const Iterable = function(){};
/**
 * over-writing ( which is quite un-necessary ;) - but wanted to start afresh )
 * the prototype property  with a fresh object..
 */
/** @Capturing ref in a local variable _proto to save time on lengthy in-direction */
 let _proto = (Iterable.prototype = {});
/**
 * @borrowing the `push` / `pop` method from Array.prototype
 * we will get the length property for free  
 */
 _proto.add = Array.prototype.push;
 _proto.remove = Array.prototype.pop;
 _proto.getIterator = function(){
    
    if(!this.length){
        throw new Error("No property added yet")
    }

    /** 
     * cool and a little convoluted way of doing things ;)
     * But this object instance was never an Array type in the 
     * first place -- then why will this  work! -- devil lies in the details
     */
    let selfCopy = Array.prototype.slice.call(this);
    let next = () => {
            let golden_egg = {
                done:true,
                value:null
            };
            if( selfCopy.length > 0 ){
                golden_egg.done = false;
                golden_egg.value = selfCopy.pop();
            }
            return golden_egg;
    }

    return next;
}


/**
 * @Use_case
 */

let iterable_object = new Iterable();
iterable_object.add("kim");
iterable_object.add("kardashian");
iterable_object.add("monte'");
iterable_object.add("carlo");

let next = iterable_object.getIterator();
var next_result = null;

while(!(next_result=next()).done){
    console.log(next_result.value)
}
console.log("final structure of next_result");
console.log(next_result);
console.log("after iteration final value of iterable_object");
console.log(iterable_object);
console.log("Checking if the iterable_object is an instance of Array")
console.log(iterable_object instanceof Array);
console.log("Checking if the [<Array literal>] is an instance of Array");
console.log([] instanceof Array);
