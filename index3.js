// WAP to print the sum of odd numbers in the fibonacii series

let fibonacci = 5;
let a =0 ,b=1;
for(let i = 1; i<=fibonacci; i++){
    console.log(a);
    c=a+b;
    a=b;
    b=c;
}

// let fibonacci1 = 10;
let a1 =0 ,b1=1,i=1
while(i<=fibonacci1){
    console.log(i, a1)
    c1=a1+b1;
    a1=b1;
    b1=c1;
    i++
}

// Q1 WAP to print array of Boolean values based on duplicates, without using includes method.
let arr = [122,450,202,78];
res=[];
for(let i of arr){
  x= String(i).split("");
  emp=[];
  for(let j of x){
    if(!emp.includes(j)){
      emp.push(j)
    }
  }
  res.push(x.length == emp.length)
}
console.log(out);


// Q2  WAP to print the duplicate numbers in the given arrays of numbers
let arr1 = [101, 34, 156, 717];
res="";
for(let i of arr1){
  x = String(i).split("");
  emp=[];
  for(let j of x){
    if(!emp.includes(j)){
      emp.push(j)
    }else{
      res= res+j
    }
  }
}
console.log(res)

// WAP to print the duplicates numbers in the given arrays of each elements comparing with each element.
let arr2 = [89, 98, 187, 204];
let duplicates = [];


for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
            duplicates.push(arr[i]);
        }
    }
}

if (duplicates.length > 0) {
    console.log(duplicates);
} else {
    console.log("No duplicates found");
}