/* Title: Builder
			 Description: constructs complex objects by separating construction and representation
*/

// is this a simple builder pattern?

/** The builder - */
function SomeBuilder(useTheConstructedObject){
    let x  = {
        // a complex representation
        description: "complex Object constructed"
    };
    useTheConstructedObject(x)
}

/** the representor - */
function useTheConstructedObject(x){
  console.log(x.description);
  // here a represntation of the object can be built
  /**
   * for example creating an xml from the passed in object or 
   * a html element.
   */
  let representation = `<div>${x.description}</div>`;
  console.log(representation);
}

SomeBuilder(useTheConstructedObject);