var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourne",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10],
]

var srh=products.find(item=>item[1]=='treat');
console.log(srh);

console.log('.............................');
//some
var is_available=products.some(item=>item[2]<30);
console.log(is_available);

console.log('..............................');
//foreach
products.map(item=>item[1]).forEach(names=>console.log(names));