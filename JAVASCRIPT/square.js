var n=2,low=8,upp=27;

for(let i=1;i<=upp;i++)
{
    let res=i**n;
     if (res>upp) 
     {
       break;
     }

    if ((res>=low) & (res<=upp)) 
    {
        console.log(i);
    }
}