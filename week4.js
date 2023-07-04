let ages = [3,9, 23, 64,2,8, 28,93];
console.log("this array is: "+ ages.length +" "+"elements long");
console.log(ages[ages.length-1]-ages[ages.length-8]);//here i called the array ages one less than the total length then i did the same thing for the second part but subtracted the 8th element.
ages.push(100);
console.log("this array is: "+ ages.length +" "+"elements long");
console.log(ages[ages.length-1]-ages[ages.length-9]);// i pushed 100 to the array and from there console logged to change the subtraction answer to be 97.



const names = ['Sam','Tommy','Tim','Sally','Buck','Bob'];
const namesLength =[5,3,4];
let sum = 0;
for (let i = 0; i < namesLength.length; i++ ) {
    sum += namesLength[i];
  }
console.log(sum);

const combined =[].concat(names,namesLength);
console.log(combined);

	let total = 0;
	for(let i = 0; i < names.length; i++) {
	    total = total + names[i].length;
	    console.log(names[i].length)
	}
	console.log(total/names.length);


//3. How do you access the last element of an array? I access the last element of an array by using arr[array.length-1] or using slice.
//4. How do you access the first element of an array? I access the "" by indexing [0] 
//5./*
 
/*
test
*/

/*7*/



/*8.*/

    function createFullName(firstName, lastName){
    return firstName + '  ' + lastName;
    }
    

/*9.*/

const fun =[25, 45,32,44,99];
newCounter.apply(this,any);
function newCounter(){
    for(i=0; i<100; i++){
        console.log(newCounter[i]);
   }
}

/*10.*/
/*11*/
