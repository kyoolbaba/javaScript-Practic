// Arrow Functions
const square=x=>{return x*x*x};
const multiply=(x,y)=>{return x*y };
const isEven=num=> {return num%2===0}
// Array for each
const names=['ram','rom','milan','rahul'];
// For each mwthod used to iterate through out the array
// names.forEach(function (n){
//     return n.toUpperCase()
//     })

//  Map fucntion used also to iterate but return must 
// be given or else it wil not print
const caps=names.map(function(n){
return n.toUpperCase().split('').join('.');
})

const numbers=[20,21,22,23,24,25,26,27,28,29,30];
// returns object with values 
let returnObject=numbers.map(function(number){
    return {
        value:number,
        isEven:number%2===0
    }
})

// Find function 
let movies=['RaOne','Zero',"Robo",'bahubhali']
// defining present of matching to iterate
// text in array
let movie=movies.find(movie=> {
    return movie.includes("bo")
})

// Define element matching the word
// with specific index
let movie2=movies.find(m=>{
    return  m.indexOf("Ro")===0
})
// Alternate way without writing return method
let movie3=movies.find(m=>
     m.indexOf("Ro")===0
)

// Filter fucntion
let num=[2,6,5,8,11,23,4,68,06,98,56,78]
// Filtering numbers lesser than 15
let lesserThan15=num.filter(n=>  n<15);
// Filtering numbers greater than 15
let greaterthan15=num.filter(n=>n>15);

// every fucntion
let words1=['cat','mat','bat','bot','put','cut','git']
// comparing with every element that all are of 3 letters
let allare3letters=words1.every(word=>word.length===3)
// comparing that that all words end with t
let endWithT=words1.every(word=> word[word.length-1]==='t')

// some fucntion
// check if any letter start from g
let anyWordStartFromG=words1.some(word=>word[0]==='g')
let anyWordStartFromZ=words1.some(word=>word[0]==='z')

// sort fucntion
const prices=[78,98,15,32,74,03,12,63,33,42,123];
// sorts the array
// problem with sort function is it sorts the data WRT String
let sortingpricesWRTString=prices.sort();

// sorting WRT values
// Sorting WRT descending order
prices.sort((a,b)=>b-a);
// Sorting WRT ascending order
prices.sort((a,b)=>a-b);

// Copy the sorted Array 
let copytheSortedArray=prices.slice().sort((a,b)=>a-b);

// reduce fucntion
const no1=[1,5,6,8,7,11,22,56,46,31]
let reduceExample=no1.reduce((accumulatedValue, currenValue) => {
    return accumulatedValue+currenValue
})
// Find Maximun number  using reduce function
let findMax=no1.reduce((max,no)=>{
    if(max<no) return no;
    return max;
})
// Alternate way

let findMax2=no1.reduce((max,no)=>{
    return Math.max(max,no);
})

// Finding minimum value

let findMin=no1.reduce((min,no)=>{
    return Math.min(min,no);
})

// Reduce using for tallying
// Using reduce for counting 1 and 0 
const votes=[1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,2,3,2,2,3];
const tally=votes.reduce((taly,vote)=>{
    taly[vote]=(taly[vote]||0)+1;
    return taly; },{});

// Default Params
// Default parameters must be at the end
function multiplication(x,y=1){
return y*x;
}
// spread
[...'abcdefghi']

// Creating Objects
const userdata={
    firstname: 'milan',
    lastname: 'gowda',
    location:'bangalore',
    100:"true"
}


// syntax to access properties of
// userdata.firstname prints the firtname
// userdata.lastname prints the lastname
// userdata.100
// VM287:1 Uncaught SyntaxError: Unexpected number
// userdata[100]
// "true"
// You cant use numbers while accessing properties
// like line no 128
//  the 100 in the line 121 is converted into string 

// Adding and updating properties in Objects

userdata.lastname='kumar'// updating property of object
userdata["middlename"]='gowda'//adding property of an object

// Objects in Arrays

const customer=[

{
    firtname:'milan',
    lastname:'kumar',
    location:'Bangalore'
},
{
    firtname:'Rakesh',
    lastname:'kumar',
    location:'Pune'
}
,
{
    firtname:'Ram',
    lastname:'kumar',
    location:'Mumbai'
}
]

// Details of the array will be printed 
// firtname: "milan"
// lastname: "kumar"
// location: "Bangalore"
// __proto__: Object
// 1:
// firtname: "Rakesh"
// lastname: "kumar"
// location: "Pune"
// __proto__: Object
// 2:
// firtname: "Ram"
// lastname: "kumar"
// location: "Mumbai"
// __proto__: Object

// Accessing properties from array
// customer[0].firtname
// "milan"
// customer[2].firtname
// "Ram"
// customer[2].location
// "Mumbai"


// Array in Objects
const stud={
    firstname:'milan',
    lastname:'kumar',
    subjects:['Social','Science'],
    exams:{
        midterm:70,
        finalexam:80
    }
}

// Accessing the objects in another Objects

// stud.exams.finalexam
// 80
// stud.exams.midterm
// 70

// Short Hand Properties
// Adding methods to Objects 

const no3=[2,6,9,77,22,14,35,12,65,4,26,65]

const getStats=(arr)=>{
const max=Math.max(...arr)
const min=Math.min(...arr)
const sum=arr.reduce((sum,r)=> sum+r)
const avg=sum/arr.length
return {
    max: max,
    min: min,
    sum: sum,
    avg:avg
}
}
// Below One is an example for ShortHand Properties
const getStats1=(arr)=>{
    const max=Math.max(...arr)
    const min=Math.min(...arr)
    const sum=arr.reduce((sum,r)=> sum+r)
    const avg=sum/arr.length
    return {
       max,
       min,
       sum,
       avg
    }
    }

// Computed properties
// Helps us to add property with a Dynamic Key

const admin="MIlan"
const role="Director"
const admin2="Rakesh"
const role2="MD"

const adminstrator={}

adminstrator[role]=admin
// Got from output
// adminstrator
// {Director: "MIlan"}

// New way
// Dynamic properties set inside the Object (Computed Properties)
const adminstrator1={
    [role]:admin,
    [role2]:admin2
}

// Write a function to add the properties into the objects

function addProp(object,property,value){
    const objectCopy={...object};
    objectCopy[property] = value;
    return objectCopy;
}

// Alternate
const addProperties =(object,property,value)=>({  ...object,[property]: value})

// Adding Functions as properties in Object
 const calculator={
     add:function(x,y){
    return x+y;
     },
     subtract: function(x,y){
    return x-y
     },
     mul:function(x,y){
        return x*y
     }
 }

//  Again Implementing SHortHand while creating functions in method
const calculator1={
    add(x,y){
        return x+y;
    },
    mul: function(x,y){
        return x*y;
    }
}

// Implementing Arrows functions in Objects
const calculator2={
    add:(x,y)=>(x+y),
    mul:(x,y)=>(x*y)
}

// THIS keyword
// If you print THIS its  parent in Windows
// Windows is the global scope in the browser
function printTHIS(){
    console.log("HEY!!")
    console.log(this)
}

// Difference between var and let is var gets stored in the window or global scope and
// let does not get addd
// var  can be accessed before declaration 
// where as in let you will get error

// USING THIS IN METHODS
// While using THIS keyword in windows we get the properties of that object
// And not the window object which is called GLOBAL OBJECT
// THIS keyword is used to access the inner properties of the object 
const userdata1={
    firstname: 'milan',
    lastname: 'kumar',
    nickname:'mil',
    fullName(){
        console.log(this.firstname," ",this.lastname," ",this.nickname,"Printing the details")
    }
}

// Printing phrases in interval of 3 seconds

const annoyomatic={
phrases:['hey','hello','whatsapp','hw are you','and finally','who are you'],
pickPhrases(){
    const{
        phrases
    }=this;
   return  this.phrases[Math.floor(Math.random()*phrases.length-1)]
},

start(){
    this;
setInterval(()=>{ 
    console.log(this.pickPhrases())},3000)
}
}

