var arr=[1,2,3,4];

for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[i]+arr[j]==6)
        {
            console.log(`pairs of 6 are ${arr[i]} ${arr[j]}`);
            
        }

        else if(arr[i]+arr[j]==5)
        {
            console.log(arr[i],arr[j]);
           
        }

        else if(arr[i]+arr[j]==7)
        {
            console.log(arr[i],arr[j]);
            
        }
    }
}