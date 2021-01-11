document.getElementById("btn").onclick = function () {
    var x = document.forms["personal"]["fname"].value;
    let details={};
    if (x == "") {
        alerter();
        return;
    }
    if(!namecheck(x))
    {
        document.getElementById("message").innerHTML=document.getElementById("message").innerHTML+" First Name";
        return;
    }
    details["First Name"]=x;
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
    details["Last Name"]=x;
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
    details["Gender"]=selectedValue;
    x=document.getElementById("age").value;
    if(x=="")
    {
        alerter();
        return;
    }
    details["Age"]=x;
    x=document.getElementById("email").value;
    if(x=="")
    {
        alerter();
        return;
    }
    details["Email"]=x;
    document.getElementById("message").innerHTML="";
    console.log(details);
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