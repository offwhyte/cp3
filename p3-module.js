/*
MenuGem
CIT 281 Assignment 3
*/

/*
validDenomination(coin):
Returns true if the coin function parameter is a valid coin value of either 1, 5, 10, 25, 50, or 100
Must use the array indexOf() method
This function can be coded to be a single line of code, although not required. If you do attempt to code into a single line of code, you are recommended to first find a solution that you understand completely, then comment out your solution when you reduce your code to a single line of code.
*/
function validDenomination(coin) {
    let myReturnVal = false;
    const validDenoms = [1, 5, 10, 25, 50, 100];
    let index = validDenoms.indexOf(coin.denom);
	console.log("validDenomination called with coin.denom " + coin.denom);
    if(index>=0){
        myReturnVal = true;
    }
    return myReturnVal;
}

/*
valueFromCoinObject(obj):
Returns the calculated value of a single coin object from the obj function parameter
Must use object deconstruction to create constant variables denom and count from the obj 
function parameter, using default object values of 0 for denom and count
*/
function valueFromCoinObject(obj) {

    let {denom = 0 , count = 0} = obj;
//	console.log("valueFromCoinObject called with denom + "+denom+" count "+count);
	return denom * count;
}
/*
valueFromArray(arr):
Iterates through an array of coin objects and returns the final calculated value of 
all coin objects
Must use Array.reduce() method, and an arrow function with the Array.reduce() method
Must call valueFromCoinObject()
Extra credit: Handle scenario where the arr function parameter, rather than an array of coin objects, contains another array of coin objects
*/
function valueFromArray(arr) {

    // console.log("valueFromArray called with myVal "+ arr);
	
	// solution w arrow function

    const arrowEmUp = (accumulator, coinObj) => {
        let cVal = valueFromCoinObject(coinObj);
        // console.log("addEmUp called with cVal "+ cVal);
		return accumulator + cVal;      
    }	
	
	let finalVal = arr.reduce(arrowEmUp, 0);		
	/*
	solution w regular function 
	let finalVal = arr.reduce(addEmUp, 0);
	
    // console.log("finalVal is " + finalVal);
    function addEmUp(accumulator, coinObj) {
        let cVal = valueFromCoinObject(coinObj);
        // console.log("addEmUp called with cVal "+ cVal);
		return accumulator + cVal;      
    }
	
	*/

    return finalVal;
}


/*
coinCount(...coinage): 
This function is the only exported function from the code module
Calls and returns the result of valueFromArray()function, which will be the value of all coin objects with the coinage array function parameter
*/
function coinCount (...coinage) {
	const myArray = [];
	console.log("counCount called with coinage " + coinage);
	for (let i = 0; i < coinage.length; i++) {
	  //console.log("denom " + coinage[i].denom);
	  if(validDenomination(coinage[i])){
	    myArray.push(coinage[i]);		  
	  }

	}	
    console.log(valueFromArray(myArray));
	

}



/*
Test the code module using the following console.log() statements:
console.log("{}", coinCount({denom: 5, count: 3}));
console.log("{}s", coinCount({denom: 5, count: 3},{denom: 10, count: 2}));
const coins = [{denom: 25, count: 2},{denom: 1, count: 7}];
console.log("...[{}]", coinCount(...coins));
console.log("[{}]", coinCount(coins));  // Extra credit
*/
coinCount({denom: 5, count: 4}, {denom: 25, count: 1}, {denom: 10, count: 5});
console.log("Used arrow function");
export default coinCount;
//export const age = 40;