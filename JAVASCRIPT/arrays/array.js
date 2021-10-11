var expenses=[10000,12000,20000,25000];
console.log(expenses[1]);

console.log("...........................");

console.log(expenses.length);

console.log("...........................");

for(let i=0;i<4;i++)
{
    console.log(expenses[i]);
}

console.log("...........................");

for(let amount of expenses)
{
    console.log(amount);
}

console.log("...........................");

var total=0;
for(let amount of expenses)
{
    total+=amount;
}
console.log(total);

console.log("...........................");

for(let amount of expenses)
{
    if (amount<15000) 
    {
        console.log(amount);   
    }
}