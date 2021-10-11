var student={
    roll:007,
    name:'anjana',
    cource:'mearn',
}

for(let key in student)
{
    //console.log(key);
    console.log(student[key]);
}

if(!("batch" in student))
{
    student.batch='mearn_aug'
}

console.log(student);