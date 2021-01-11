
document.getElementById("btn").onclick = function () {
    
    const choice = document.querySelectorAll('input[name="choice"]');
    let selectedValue;
    for (const i of choice) {
        if (i.checked) {
            selectedValue = i.value;
            break;
        }
    }
    if(selectedValue=="prime")
    {
        prime();
    }
    if(selectedValue=="cap")
    {
        invert();
    }
    if(selectedValue=="digit")
    {
        digit();
    }
    if(selectedValue=="sumdigit")
    {
        sumdigit();
    }
    }
//Finding Prime factors
    function prime()
    {
        let num=document.getElementById("Parameter").value;
        var result=[];
        if(isNaN(num))
        {
            document.getElementById("output").innerHTML="Enter a valid number";
            return;
        }
        for(let i=2;i<=num;i++)
        {
            if(num%i==0)
            {
                result.push(i);
                while(num%i==0)
                {
                    num=num/i;
                }
            }
        }
        document.getElementById("output").innerHTML="Prime Factors:"+result;
    }
    
//Inverting the cases in the string

    function invert()
    {
        let s=document.getElementById("Parameter").value;
        var temp='';
        for(let i=0;i<s.length;i++)
        {
            let t=s.charAt(i);
            if(t==t.toUpperCase())
            {
                temp=temp+t.toLowerCase();
            }
            else if(t==t.toLowerCase())
            {
                temp=temp+t.toUpperCase();
            }
        }
        document.getElementById("output").innerHTML="Inverted capitalization of "+s+" :"+temp;
    }

//Checking if all the digits in the number are the same

    function digit()
    {
        let s=document.getElementById("Parameter").value;
        if(isNaN(s))
        {
            document.getElementById("output").innerHTML="Enter a valid number";
            return;
        }
        let v=s.charAt(0);
        for(let i=1;i<s.length;i++)
        {
            if(s.charAt(i)!=v)
            {
                document.getElementById("output").innerHTML="All digits are not the same";
                return;
            }
        }
        document.getElementById("output").innerHTML="All digits are the same";
    }

//Calculating the sum of digits in the string
    function sumdigit()
    {
        let s=document.getElementById("Parameter").value;
        let v=0;
        for(let i=0;i<s.length;i++)
        {
            if(!isNaN(s.charAt(i)))
            {
                v+=parseInt(s.charAt(i));
            }
        }
        document.getElementById("output").innerHTML="The sum of digits in the string is "+v;
    }