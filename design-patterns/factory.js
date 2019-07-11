
/**
 * Factory pattern - 
 * Simply means 
 * - create different `types` of objects using the same function / method 
 * - just specify the `type` BUT NOT the `constructor`
 * - MOTO - give me the type I will give yoiu the object
 */

 /**
  * THIS IS NOT FACTOORY! PATTERN
  */
 function faulty_factory(constructor_){
     return new constructor_();
 }

 /**
  * FACTORY PATTERN
  */

  function get_factory(){
      let obj = {};
      obj["type_1"] = function t1 (){};
      //obj["type_1"]["name"] = 'type_1';

      obj["type_2"] = function t2 (){};
      //obj["type_2"]["name"] = 'type_2';

      obj["type_3"] = function t3 (){};
      //obj["type_3"]["name"] = 'type_3';
      /**
       * using facade pattern to create factory pattern ***
       */
      return (type) => {
            return new obj[type]();
      };
  
    }

    let factory = get_factory();
    console.log(factory("type_1").constructor.name)
    console.log(factory("type_2").constructor.name)