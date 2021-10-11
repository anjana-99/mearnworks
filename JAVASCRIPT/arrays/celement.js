var arr1=[10,11,22,12,21];
var arr2=[20,21,22,23,24];
 
arr1.sort((n1,n2)=>n1-n2);
arr2.sort((n1,n2)=>n1-n2);

var pos1=0,pos2=0;

while((pos1<arr1.length)&(pos2<arr2.length))
{
    if(arr1[pos1]==arr2[pos2])
    {
        console.log(arr1[pos1]);
        pos1++;
        pos2++;
    }

    else if(arr1[pos1]<arr2[pos2])
    {
        pos1++;
    }

    else if(arr1[pos1]>arr2[pos2])
    {
        pos2++
    }
}

