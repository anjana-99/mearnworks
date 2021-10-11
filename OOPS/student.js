class student
{
    constructor(roll,course,student_name)
    //setperson(name,gender,age)
     {
         this.rollno=roll,
         this.course=course,
         this.student_name=student_name
        //console.log(this.rollno);
     }

     printstudent()
     {
         console.log(this.rollno,this.course,this.student_name);
     }
}

var obj1=new student(8,"mearn","anu")
// obj1.setperson(8,"mearn","anu")
obj1.printstudent()
//console.log(obj1.student_name,obj1.course);