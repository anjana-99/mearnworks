var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourne",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10],
]
// costly product
var costly_pdt=products.reduce((item1,item2)=>item1[2]>item2[2]?item1:item2);
console.log(costly_pdt);

//low cost pdt
var low=products.reduce((item1,item2)=>item1[2]<item2[2]?item1:item2);
console.log(low);

// if there is multiple values with same price then last value with lowest price will be displayed
