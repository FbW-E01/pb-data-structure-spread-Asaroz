// 1. Combining Arrays
// Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.
// Once again create two arrays. Save all elements of both arrays to another variable.

const euro_countries = ["France","Germany","Italy","Poland"]
const asian_countries = ["China","Japan","Russia","India"]
euro_countries.push(...asian_countries)
console.log(euro_countries)

 const countires_string = euro_countries.toString() +" "+ asian_countries.toString()
 console.log(countires_string)
 console.log("------------")
// 2. Copying Arrays
// Copy an array using the spread operator. Store the copied array in another variable.
const new_countries =  [...euro_countries]
let a = String(new_countries)
console.log(a)
console.log("------------")
// 3. Find the Largest...
// Create a function to find the largest number in an array.
const numbers = [2,5,56,32,1234,323,213124,23,578]

function largest_number(a){
    return Math.max(...a)
    } 
console.log(largest_number(numbers))
console.log("------------")
// 4. Find the Smallest
// Create a function to find the smallest number in an array.

function smallest_number(a){
    return Math.min(...a)
    } 
console.log(smallest_number(numbers))
console.log("------------")


// 5. Clone and Merge
// Given two objects:

// const person = {name: "John"}
// const job = {role: "Teacher"}
// 5.1 Clone the person object.
// 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.
// 5.3 Then change the values of the properties in the employee object.

const person = {name: "John"}
const job = {role: "Teacher"}

const new_person =JSON.parse(JSON.stringify(person))
console.log(new_person)
const employee = {...person,...job}
console.log(employee)
employee.name="Lars"
employee.role="nearly a web-dev"
console.log(employee)


console.log("------------")
// Bonus: 6. Is the average a whole number?
// Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.

// Examples

// isWhole(1, 2, 3, 4) ➞ false

// isWhole(9, 2, 2, 5) ➞ false

// Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result!


function is_whole(...a){
    let helper=0
    for(number in a){
        helper += a[number] 
    }
    if(helper/a.length % 1 ===0){return true}
    return false
}

console.log(is_whole(1, 2, 3, 4)) 

console.log(is_whole(9, 2, 2, 5)) 

console.log(is_whole(3, 1, 2, 2, 2))
console.log(is_whole(3, 1, 2, 2,))
