var arr=[2,15,9,10,17,100];

arr.sort((num1,num2)=>num1-num2);
// console.log(arr);
var element=10;
var low=0,upp=arr.length-1;

var flag=0;
while(low<=upp)
{
   mid=Math.floor((low+upp)/2);

   if(element<arr[mid])
   {
       upp=mid-1;
   }

   else if(element>arr[mid])
   {
       low=mid+1;
   }

   else if(element==arr[mid])
   {
       flag=1;
       break;
   }
}

console.log(flag==0?"elemnt not found":"element found");
console.log(element);