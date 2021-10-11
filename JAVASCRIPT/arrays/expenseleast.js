
var expense=[12000,13000,14000,1500,11000,25000];

let i=expense[0];
for(let amt of expense)
{
    if(i>amt)
    {
       i=amt;
    }
   
}
console.log("least amount= "+i);