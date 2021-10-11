var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourne",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10],
]

// print number of items in shop
console.log(products.length);

// print number of available items
let a=0;
for(let item of products)
{
    if(item[3]>0)
    {
        a++;
    }
}
console.log(a);

// print all product names only
var pdt_name= products.map(item=>item[1])
console.log(pdt_name);



// all out of stock products
var out_stocks=products.filter(item=>item[3]>0)
console.log(out_stocks);


//add 5 rs to all products whose stock greater than 50;

var stocks=products.filter(item=>item[3]>50).map(item=>item[2]+5)
console.log(stocks);