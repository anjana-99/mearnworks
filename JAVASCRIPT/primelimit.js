var low=4,upp=25;

for(let i=low;i<upp;i++)
{
    let f=0;
    for(let j=2;j<i;j++)
    {
        if (i%j==0) 
        {
            f++;
            break;
        }
    }
    if (f==0) 
    {
        console.log(i);
    }
}