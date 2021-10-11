var n1=15,n2=30,f=0;

for(var i=1,j=1;(i<=n1)&&(j<=n2);j++,i++)
{
  
    if((n1%i==0)&&(n2%j==0))
    {
        var p=i;
        f=1;
    }
    
}
if(f==1)
console.log(p);

else

console.log("no gcd");