// var n1=5,n2=10,n3=7

// if ((n1>n2)&(n1>n3)) 
// {
//     if (n2>n3) 
//     {
//         console.log(n1,n2,n3);
//     }
//     else
//     {
//         console.log(n1,n3,n2);
//     }
// }



var n1=1,n2=2,n3=3;

if (n1>n2)
{
    if(n1>n3)
    {
        if (n2>n3) 
        {
           console.log(n1,n2,n3);
        }

        else
        {
            console.log(n1,n3,n2);
        }
    }

    else
    {
        console.log(n3,n1,n2);
    }

}

else if (n2>n3)
 
{
    if (n1>n3) 
    {
        console.log(n2,n1,n3);
    }

    else
    {
        console.log(n2,n3,n1);
    }
} 

else
{
    console.log(n3,n2,n1);
}
    



