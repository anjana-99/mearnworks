var product= 
{
    p_code:100,
    name:"product1",
    price:250,
    aval_qnty:50
}

console.log(product.name);

product.aval_qnty+=13
console.log(product.aval_qnty);

// whether there is a discount key
console.log("discount" in product);

// add 10% discount
product.discount="10%";
console.log(product.discount);

console.log(product);

// chech batchcode key is present
console.log("batchcode");