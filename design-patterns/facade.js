/* Title: Facade
			 Description: provides a simplified interface to a large body of code
			 */

/**
 * Facade pattern can utilize other patterns to generate a
 * simple interface to some convoluted process
 * 
 * {couldn't think of a prime example of a convolution ;)}
 * 
 * NOTE: use math.js for mathematical calculation
 */

 let getValueEarnedFacade = (function(){

    const obj = {};
    obj.setInterestRate = function(someVal){
        obj.intrRate = someVal
    };
    obj.setPrincipalAmount = function(someVal){
        obj.principal = someVal
    }
    obj.calculateInterest = function(years){
        return this.principal*((1 + (this.intrRate/100))^years)
    };

    return (principal,intrRate,years)=>{
        obj.setInterestRate(intrRate);
        obj.setPrincipalAmount(principal);
        return obj.calculateInterest(years);
    }



 }());

 console.log(getValueEarnedFacade(100,10,5));