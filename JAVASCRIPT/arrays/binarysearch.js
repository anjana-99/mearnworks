var arr=[10,12,38,29,20,15]

var num=38;
var low=0,upp=arr.length-1;
var f=0;

arr.sort((n1,n2)=>n1-n2)

while (low<=upp) 
{
    mid=Math.floor((low+upp)/2);
        
    if(num<arr[mid])
    {
        upp=mid-1;
    }

    else if(num>arr[mid])
    {
        low=mid+1;
    }

    else if(num==arr[mid])
    {
       f+=1;
       break;
    }
    
}

if(f==1)
{
    console.log("element found");
}

else
{
    console.log("element not found");
}
