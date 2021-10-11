var expense=[15000,12000,17000,25000,30000,16000];
count=0;
for(let amt of expense)
{
    if(amt>15000)
    {
       count++;
    }
}
console.log("amount greater than 15000 :"+count);