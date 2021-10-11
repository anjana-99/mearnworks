function primeNum(low,upp) 
{
    for(let i=low;i<=upp;i++)
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
    
} 
console.log(primeNum(3,17));