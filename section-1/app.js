// let firstName="Tran Trung";
// let lastName="Nghia";
// let fullName=firstName.concat(lastName);
// console.log(fullName);
// firstName+="something else"
// console.log(firstName);
// //1.Slice(cắt)
// console.log(firstName.slice(0,4));
// //2.Split - Join(tách + nối)
// console.log(lastName.split(" ").join(""));    
// let a="Tran";
// let b="Trung";
// let res=`${a} ${b} Nghia`
// console.log(res);
// //3.conditional statement
// let time=5;
// let say;
// if(time<10){
//     say="Good Morning";
//     console.log(say);
// }else if(time < 20){
//     say="Good Day";
//     console.log(say);
// }else{
//     console.log("Good Evening")
// }
// //4.switch statement
// // let day = "monday";
// // switch(day){
// //     case "monday":
// //         console.log("Today is Monday");
// //         break;
// //     case "tuesday":
// //         console.log("Today is Tuesday");
// //         break;
// //     default:
// //         console.log("Don't know what day is today !");
// // }
// let day;
// switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       console.log(day);
//       break;
//     case 1:
//       day = "Monday";
//       console.log(day);
//       break;
//     case 2:
//        day = "Tuesday";
//        console.log(day);
//       break;
//     case 3:
//       day = "Wednesday";
//       console.log(day);
//       break;
//     case 4:
//       day = "Thursday";
//       console.log(day);
//       break;
//     case 5:
//       day = "Friday";
//       console.log(day);
//       break;
//     case 6:
//       day = "Saturday";
//       console.log(day);
//       break;
//   }
// //5. for loop 
// for(let i=1;i<=10;i++){
//     console.log("Hello World",i);
// }
// //6. while - do while
// let i=1;
// // while(i<=5){
// //     console.log("Hello TTN",i);
// //     i++;
// // }
// do{
//     console.log("Hello PVA",i);
//     i++;
// }while(i<3)
// //7. AND-OR-NOT
// let text="TranTrungNghia";
// if(text.length>=8&&text.includes("Nghia")){
//     console.log("Valid Name");
// }else{
//     console.log("Invalid Name");
// }
// //8. Array
// const myListArr=["one",["two","three"],1,true,false];

// console.log(myListArr);
// //VD
// const fruit=[
//     "Banana",
//     "Apple",
//     "Lemon",
//     "Orange",
//     "mango"
// ];
// console.log(fruit);
// console.log(fruit.length);
// //push-thêm cuối
// fruit.push("grapefruit")
// //unshifr-thêm đầu
// fruit.unshift("paine");
// //shifr-xóa đầu
// fruit.shift();
// //pop-xóa cuối
// fruit.pop();
// console.log(fruit);
// console.log(fruit.length);

// //concat
// const arr1=[1,2,3];
// const arr2=[4,5,6];
// console.log(arr1.concat(arr2));

// const pl=["js","python","golang","ruby","c++"];
// console.log(pl);
// //dao array
// console.log(pl.reverse());
// //splice-tach
// console.log(pl.slice(0,2));

// //9.Object
// const person={
//     firstName:"TranTrung",
//     lastName:"Nghia",
//     age:22,
//     sex:"Fale",
//     location:["Duc Tho","Ha Tinh"],
// };
// person.birthday="26/03/2001";
// delete person.age;
// console.log(person);
// // console.log(person.age)
// // console.log(person['firstName']);

// //ViDu
// const car={
//   type:"Honda",
//   model:"500",
//   color:"White"
// };
// console.log(typeof(car));
// console.log(car.type="Toyota");
// car.price="600";
// console.log(car)

// //10.Function
// const myFunction={
//   name:"TTN",
//   age:22,
//   greats:function(){
//     return `Hello, my name is ${myFunction.name}, I am ${myFunction.age} years old`;
//   }
// };
// console.log(myFunction.greats());

// //11.JSON
// const people={
//     name:"TTN",
//     age:22,
//     email:"nghiachoet263@gmail.com",
//     address:{
//         city:"HaTinh",
//         id:38
//     }
// };
// const jsonString=JSON.stringify(people);
// const parsedObject=JSON.parse(jsonString);
// console.log(parsedObject);

// //12.Date
// const date = new Date();
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// // const year = date.getFullYear();
// // const month = date.getMonth();
// // const days = date.getDay();
// // const hours = date.getHours();
// // const minutes = date.getMinutes();
// // const milliseconds = date.getSeconds();

// // console.log(`Year : ${year}`);
// // console.log(`Month : ${month}`);
// // console.log(`Day : ${days}`);
// // console.log(`Hours : ${hours}`);
// // console.log(`Minutes : ${minutes}`);
// // console.log(`Milliseconds : ${milliseconds}`);

// //13.setInterval , setTimeout
// // setInterval(()=>{
// //   console.log("This function willl be executed every two seconds")
// // },2000)
// // stop interval after 10s
// const intervalID= setInterval(function(){
//   console.log("This function will be executed 10 seconds");
// },1000)

// setTimeout(function(){
//   clearInterval(intervalID);
//   console.log("Interval stopped");
// },10000)
// greet = (username) =>{
//   return `My name is ${username}`;
// };
// // greet = username => `My name is ${username}`;
// console.log(greet("Nghia"));

// function user(name,age,work){
//   return{
//     name: name,
//     age: age,
//     work: work,
//     intro(){ //intro: function(){} & intro:()=>{}
//       console.log(`My name is ${name} & I'm ${age} years old and I'm a ${work}`)
//     },
//   };
// };
// const rs=user("TTN",22,"WebDev");
// console.log(rs.intro());
// console.log(rs);

// // es6 js
// function countTo5(count = false){
//   if(count===true){
//     for(let i=1;i<=5;i++){
//       console.log(`Count : ${i}`);
//     }
//   }
// };
// countTo5(true);
// TONG HOP function,array,object ( spread operator)
// function giveMe5(a,b,c,d){
//   console.log("a",a);
//   console.log("b",b);
//   console.log("c",c);
//   console.log("d",d);
// };
// const color=["Red","Blue","Green","Orange"];
// giveMe5(...color);
// // rest operator
// function Greets(firstName,lastName,...hobbies){
//   console.log("FirstName :" ,firstName);
//   console.log("LastName :" ,lastName);
//   console.log("Hobbies :" ,hobbies);
// }
// Greets("Trung","Nghia","Programmer","Football","Volleyball");

// // destructring - hủy cấu trúc
// function dis(){
//   return [1,2,3];
// }
// let a,b;
// [a=5, ,b=2]=dis();
// console.log(a);
// console.log(b);
// // console.log(dis());
//  const options = {
//   title:"My menu",
//   items:["item1","item2"]
//  }
//  function showMenu({title,width:w=100,height:h=200,items:[item1,item2]}){
//   console.log(`${title} ${w} ${h}`);
//   console.log(item1);
//   console.log(item2);
//  }
//  showMenu(options);

// const data={
//   user:{
//     id:123,
//     name:"TTN",
//     age:22,
//     email:"nghiachoet263@gmail.com",
//     address:{
//       city:"Ha Tinh",
//       country:"Lien Minh",
//     },
//     hobbies:["Reading","Football","Cooking"],
//     scores:{
//       math:8,
//       history:10,
//       science:9,
//     },
//   },
//   products:[
//     {id:1,name:"Laptop",price:100},
//     {id:2,name:"Phone",price:200},
//     {id:3,name:"Tablet",price:300},
//   ],
//   settings:{
//     darkMode:true,
//     notification:{
//       email:true,
//       sms:false,
//       push:true,
//     },
//     language:"English",
//   },
// };

// const {
//   user:{
//     name,age,address:{city,country},
//     hobbies,
//     scores:{math,history,science},
//     email,
//   },
//   products:[product1,product2,product3],
//   settings:{
//     darkMode,
//     notification:{
//       email:emailNotification,
//       sms:smslNotification,
//       push:pushNotification,
//     },
//     language,
//   },
// } = data;
// console.log(`Name: ${name}`);
// console.log(`Age: ${age}`);
// console.log(`Address: ${city},${country}`);
// console.log(`Hobbies: ${hobbies.join(", ")}`);
// console.log(`Math Scores: ${math}`);
// console.log(`History Scores: ${history}`);
// console.log(`Science Scores: ${science}`);
// console.log(`Product 1: ${product1.name}-${product1.price}`);
// console.log(`Product 2: ${product2.name}-${product2.price}`);
// console.log(`Product 3: ${product3.name}-${product3.price}`);
// console.log(`Dark Mode: ${darkMode}`);
// console.log(`Email : ${emailNotification}`);
// console.log(`Sms: ${smslNotification}`);
// console.log(`Push: ${pushNotification}`);
// console.log(`Language: ${language}`)

// let password = 4;
// function passwordChecker(ps) {
//   // if(ps===8){
//   //   return `Stronger password`;
//   // }else{
//   //   return `Password should be 8 characters`;
//   // }
//   return ps===8 ? `Stronger password` : `Password should be 8 characters`;
// }
// const res = passwordChecker(password);
// console.log(res)

// //callback function
//  const numbers = [1,2,3,4,5];
//  let sum=0;
//  function adder(number){
//   sum+=number;
//  }
//  numbers.forEach(adder);
//  console.log(sum)

//  //map
// let nums=[1,2,3,4,5];

// function myFunc(num){
//   return num * 10;
// }
// let newNum=nums.map(myFunc);
// console.log(newNum);

// //filter - Lọc
// const songs = [
//   {name:"Sóng gió", duration:3.42},
//   {name:"Biển tình", duration:4.02},
//   {name:"Duyên phận", duration:2.34},
//   {name:"Tìm em", duration:5.02},
// ];
// console.log(songs.filter((song)=> song.duration > 4))

// // EX
// const ages = [32, 16, 20, 11, 25];
// function checkAge(age){
//   return age >= 18;
// }
// const result = ages.filter(checkAge);
// console.log(result)

// // find 
// const demo = ["A","B","A","C","D"];
// const kq = demo.find((res) => res==='A');
// console.log(kq)

//reduce
// const number=[1,2,3,4,5,6];
// const sum=number.reduce((p,c)=>{
//   console.log(`Pre : ${p}`)
//   console.log(`Current : ${c}`)
//   return p + c
//   // 0 + 1 = 1
//   // 1 + 2 = 3
//   // 3 + 3 = 6
//   // 6 + 4 = 10
//   // 10 + 5 = 15
//   // 15 + 6 =21
// },0)
// console.log(sum)

// const person = [
//   {
//     name : "TTN",
//     age : 22,
//   },
//   {
//     name : "PVA",
//     age : 21,
//   },
//   {
//     name : "HVH",
//     age : 25,
//   },
// ];

// const oldersAge = person.reduce((p,c)=>(c.age > p ? c.age : p),0)
// console.log(oldersAge);
// // map
// const map = new Map();
// const keyOne = "TTN";
// const keyTwo = {};
// const keyThree = function (){};

// map.set(keyOne,"Value of key one");
// map.set(keyTwo,"Value of key two");
// map.set(keyThree,"Value of key three");

// console.log(map);
// console.log(map.keys());
// console.log(map.values());

// //set() - xóa ptu trung
// const initialValue = [1, 2, 2, 2, 2, 3, 4];
// const mySet =  new Set(initialValue);
// console.log(mySet);
// console.log(mySet.has(1));

// //promise
// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// let myPromise = new Promise(function(myResolve, myReject) {
//   let x = 0;

// // some code (try to change x to 5)

//   if (x == 0) {
//     myResolve("OK");
//   } else {
//     myReject("Error");
//   }
// });

// myPromise.then(
//   function(value) {myDisplayer(value);},
//   function(error) {myDisplayer(error);}
// );

// //get set attribute
// const a = document.querySelector("a");
// const input = document.querySelector("input");
// console.log(a.href);
// console.log(input.value);
// //getAttribute(attName)
// console.log(input.getAttribute("placeholder"));
// //SetAttribute(attName,Value)
// input.setAttribute("placeholder","Phone");

// //createElement,appendChild,insertBefore,remove,...
// const ul = document.querySelector("ul");
// const newLi = document.createElement("li");
// newLi.innerHTML="Hello World";
// ul.appendChild(newLi);
// const firstLi = document.querySelector("li");
// ul.insertBefore(newLi,firstLi);

// const p = document.querySelector("p");
// const i = document.createElement("i");
// i.innerText = "TTN";
// i.style.color = "red"
// p.insertAdjacentElement("beforeend",i);

//change color
const btns = document.querySelectorAll(".btn");
const body = document.body;
btns.forEach((btn)=>{
  btn.addEventListener("click",()=>{
    color = btn.value;
    changeColor(color);
  });
});
function changeColor(color){
  body.className="";
  switch(color){
    case "red":
      body.classList.add("red");
      break;
    case "green":
      body.classList.add("green");
      break;
    case "blue":
      body.classList.add("blue");
      break;
    case "yellow":
      body.classList.add("yellow");
      break;
    case "purple":
      body.classList.add("purple");
      break;
    default:
      break;
  }
};
// API
const myElement = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    myElement.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  myElement.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
