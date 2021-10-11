// var arr=[2,3,4,5,6,7,8]
// for(i=0;i<arr.length;i++)
// {
//   if (arr[i]<5)
//      {
//         arr[i]=arr[i]-1;
//      }
//    else if(arr[i]>5)
//    {
//        arr[i]=arr[i]-1

//    }  
// }

var arr=[2,3,4,6,5,7,8];

var op=[];
for(let num of arr)
{
    if (num<5) 
    {
        op.push((num-1));
        
    }

    else if (num>5) 
    {
        op.push((num+1));
    }

    else
    {
        op.push(num);
    }
}
console.log(op);