var arr=[2,3,4,5,6,7];

//total
var total=arr.reduce((n1,n2)=>n1+n2)
console.log(total);

//maximum element
var max=arr.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(max);

//minimun
var min=arr.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(min);