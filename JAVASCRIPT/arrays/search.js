
//linear searching

var arr=[10,11,12,13,40,15];

var num=12,f=0;

for(let i=0;i<arr.length;i++)
{
    if(arr[i]==num)
    { 
        console.log("element found at index number ",i);
        f=1;
        break;
        
    }
}

if(f==0)
{
    console.log("element not found");
}