class student{
    constructor(fname,lname,gender,age,roll,occupation,email)
    {
        this.fname=fname;
        this.lname=lname;
        this.gender=gender;
        this.age=age;
        this.roll=roll;
        this.occupation=occupation;
        this.email=email;
    }
}
var stu=[];
document.getElementById("btn").onclick = function () {
    let x = document.forms["personal"]["fname"].value;
    if (x == "") {
        alerter();
        return;
    }
    if(!namecheck(x))
    {
        document.getElementById("message").innerHTML=document.getElementById("message").innerHTML+" First Name";
        return;
    }
    let fname=x;
    x = document.forms["personal"]["lname"].value;
    if (x == "") {
        alerter();
        return;
    }
    if(!namecheck(x))
    {
        document.getElementById("message").innerHTML=document.getElementById("message").innerHTML+" Last Name";
        return;
    }
    let lname=x;
    const choice = document.querySelectorAll('input[name="gender"]');
    let selectedValue;
    for (const i of choice) {
        if (i.checked) {
            selectedValue = i.value;
            break;
        }
    }
    if(selectedValue==undefined)
    {
        alerter();
        return;
    }
    let gender=selectedValue;
    x=document.forms["personal"]["age"].value;
    if( x=="")
    {
        alerter();
        return;
    }
    for(let i=0;i<x.length;i++)
    {
        if(isNaN(x.charAt(i)))
        {
            document.getElementById("message").innerHTML="Enter valid Age";
            document.getElementById("message").style.color="#FF0000";
            return;
        }
    }
    let age=x;
    x = document.forms["personal"]["roll"].value;
    if (x == "") {
        alerter();
        return;
    }
    let roll=x;
    x = document.forms["personal"]["occupation"].value;
    if (x == "") {
        alerter();
        return;
    }
    let occupation=x;
    x=document.getElementById("email").value;
    if(x=="")
    {
        alerter();
        return;
    }
    let email=x;
    document.getElementById("message").innerHTML="";
    stu.push(new student(fname,lname,gender,age,roll,occupation,email));
}
function alerter()
{
    document.getElementById("message").innerHTML="Fill all the fields";
    document.getElementById("message").style.color="#FF0000";
}
function namecheck(x)
{
    for(let i=0;i<x.length;i++)
    {
        if(!isNaN(x.charAt(i)))
        {
            document.getElementById("message").innerHTML="Enter valid ";
            document.getElementById("message").style.color="#FF0000";
            return false;
        }
    }
    return true;
}
document.getElementById("btn1").onclick = function () {
    let x = document.forms["get"]["roll"].value;
    for(let i=0;i<stu.length;i++)
    {
        if(stu[i].roll==x)
        {
            document.getElementById("search").innerHTML="Last Get:<br>First Name:"+stu[i].fname+"<br>Last Name:"+stu[i].lname+"<br>Gender:"+stu[i].gender+"<br>Age:"+stu[i].age+"<br>Roll No:"+stu[i].roll+"<br>Occupation:"+stu[i].occupation+"<br>Email:"+stu[i].email;
        }
    }
}