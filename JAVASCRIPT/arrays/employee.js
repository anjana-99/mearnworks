var employees=[
    [1000,"ram",10000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",30000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",50000,"mrkt",1991,2010],
    [1005,"tom",40000,"mrkt",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]
// no.of employees


console.log("No.of employees",employees.length);

// no.of developers

var dcount=0;
for(let employee of employees)
{
    if(employee[3]=="developer")
    {
        dcount++;
    }
}
console.log("no.of developers",dcount);


var dev=employees.filter(emp=>emp[3]=="developer")
console.log(dev);



// experience of each employee

for (let employee of employees)
 {
    var exp=(employee[5]-employee[4]);
    console.log("experience of ",employee[1],exp);
    
}


// highest salary


let high_salary=0;
for(let employee of employees)
{
     if(employee[2]>high_salary)
     {
         high_salary=employee[2];
     }
}

console.log("highest salary= ",high_salary);



// lowest salary

let low_salary=employees[0][2];
for(let employee of employees)
{
     if(low_salary>employee[2])
     {
         low_salary=employee[2];
     }
}

console.log("lowest salary= ",low_salary);


//highest salary of developer
var op=[]
for(let employee of employees)
{
    if(employee[3]=="developer")
    {
        op.push(employee[2]);
    }
}


var a=op[0];


for(let salary of op)
{ 
    if(salary>a)
    {
      a=salary;
    }
   

}
console.log("highest salary of developer : ",a);