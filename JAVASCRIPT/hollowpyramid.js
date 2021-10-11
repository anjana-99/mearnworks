
var str=" ";

for(let row=0;row<4;row++)
{
    
    for(let space=0;space<(4-row-1);space++)
    {
        str+=" ";
    
    for(let col=1;col<=6;col++){

    if(row==3|row+col==3|col-row==3)
    {
       str+="*";

    }
}
}
}

    console.log(str);

