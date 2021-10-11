var accounts=[
    [1000,"ram","savings",50000,true],
    [1001,"ravi","current",40000,true],
    [1002,"nikil","savings",1000,false],
    [1003,"jain","current",34000,false],
    [1004,"ajesh","savings",55000,true]
]

// sort the users wrt balance
accounts.sort((a1,a2)=>a1[3]-a2[3])
console.log(accounts);

console.log("..................................................");

// print details of acno=1004
var user=accounts.find(acc=>acc[0]==1004)
console.log(user);

console.log("..................................................");


// is there any person with balance < 2000
var users=accounts.some(acc=>acc[3]<2000)
console.log(users);

console.log("..................................................");

// print name of users with in_active account
accounts.filter(item=>item[4]==false).forEach(item=>console.log(item));

console.log("..................................................");

// print details of user with max balance
var details=accounts.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(details);

console.log("..................................................");

// print details of users with acc_type as savings and balance > 25000
var accc=accounts.filter(item=>item[2]=='savings').filter(item=>item[3]>25000)
console.log(accc);
