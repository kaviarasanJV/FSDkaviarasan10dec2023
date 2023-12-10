console.log("kaviarasan JV");
//primitive datatype
var number = 10;
var name = "kaviarasan";
var percentage = 69.5;
var flag = true;

console.log(number, typeof number);
console.log(name, typeof name);
console.log(percentage, typeof percentage);
console.log(flag, typeof flag);

///NON-PRIMITIVE DATA TYPE
///array - collection of data types
const arr = [10, "eswaran", 99.5, true];
console.log(arr, typeof arr);
////////////////////////////////
///copy by value
var num1 = 10;
var num2 = num1;
console.log("num1", num1);
console.log("num2", num2);
num2 = 30;
console.log("num1", num1);
console.log("num2", num2);
////////////////////////////////
//copy by REFERENCE

let studentArr = ["kavi", "eswar", "hari", "gokul"]; //array
let studentArrCopy = studentArr;
console.log("studentArr", studentArr);
console.log("studentArrCopy", studentArrCopy);
studentArrCopy = ["arasan"];
//studentArrCopy[0] = "arasan";
console.log("studentArr", studentArr);
console.log("studentArrCopy", studentArrCopy);

///DEEP COPY

//////nested objects
const nestedObj = [
  {
    class: "FSD",
    student: [
      {
        name: "kavi",
        stack: ["html", "css", { js: ["react", "nodejs"] }],
      },
      {
        name: "eswar",
        stack: ["html", "css", { js: ["react", "vue"] }],
      },
    ],
  },
];

nestedObj[0].student.map((stud) => {
  console.log(stud.name);
  console.log("stack:", stud.stack[2].js[0], stud.stack[2].js[1]);
});
console.log(window);
console.log(document);
