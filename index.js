    
   // console.log('hello world');--prints
//you can also usedouble quote for string.
   //let name= 'mosh';//declaring variable  with string literals
   //let cast= 'koirala', lastName= 'koi'; --it is possible
   //console.log(name);
    const interest= 0.3// declaring constant which never change
//let age= 5;//declaring number literals
//primitive/ value types= string,number,boolean,undefined,null
//all float and int long are regarded as number only.
//reference types variables = object,array,function


document.write("<h2> wassup <h2>");//used to print on the body of web page.
let firstname= undefined;
let secondname= null;

//learning object
let person =  {//here person is object 
    name: 'mosh',
    age : 30,
    height : 5 ,
    details: function(){//this is how function is added to object
        return "details of object is here \n";
    }

};
//dot notation
delete person.height;//delete property
person.age= 40;

person.name= 'sudip';//setting the attribute of object
document.write(person.details());
person.sex= 'male';//assigning new attribute in object person
document .write("<h2> person is "+person+" </h2>");
//bracket notation
person['name']= 'mary';//setting the attribute of object
//following is an alternative way to use bracket notation.
let selection = 'name';
person[selection] ='mary';

//learning object and making a alternative way
//using object constructor
function cars (brand,model){
    this.brand=brand;
    this.model=model;
    this.details= function(){
        document.write('nice object');
    }
    this.efficiency=productivity;//assigning function to object 'efficiency'.
//here paranthesis for function is optional.
}
function productivity(){
    document.write("good productivity");
}
var c1=new cars('tesla',5);
var c2=new cars('volvo',6);
c1.model;
document.write(c1);
c2.brand;
c2.details();
c2.efficiency;



console.log(person.name);
//learning arrays//not recommended

var person = [];//empty array
person["name"]= "john";
person ["age"]=20;
//now person is not an array but an object.Now age and name are property of an array.This is an associative array.
//learning arrays
var house= new Array();
house[0]="bed";
house[1]="sofa";

//learning arrays
let selectedcolor = ['red','blue'];
selectedcolor[2]='green';
selectedcolor[3]=2;

//alternative way to create array
var arrrrays= new Array("apple", "orange");
arrrrays.push("banana");
document.write(arrrrays);
//alternative way to create array
var arrrrays= new Array(3);//defining a length of an array
arrrrays[0]=5;
arrrrays[1]="string";
arrrrays[2]=true;
arrrrays.length;
var con=arrrrays.concat(selectedcolor);//concatination of array
con.length;

//console.log(selectedcolor[0]);
console.log(selectedcolor);
//unlike java here ur array can have string or number and no need to define.
let leng= selectedcolor.length;
console.log(leng);

//learning function

function greet(name, lastname){
console.log('hello '+ name +' '+ lastname);
}

function square(number){
    return number * number;
}
greet('sudip','koirala');
greet(5,6);
greet('sudip', 6);
console.log(square(2));

//string object

var str1= new String();
document.write(typeof(str1));//tells the type of the content.

//math object
Math.PI;//shows a pie value.it is property of math
//math has no constructor so no need to create object.
Math.random();//function of math
document.write(Math.sqrt(4));//for square