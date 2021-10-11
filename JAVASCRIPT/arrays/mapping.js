var arr=[2,4,6];

var sum=0;
for(let num of arr)
{
   sum+=num;
}

let a=[];
for(let num of arr)
{

   let result=sum-num;
   a.push(result);
}

console.log(a);