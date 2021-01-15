class funs
{
    constructor(s)
    {
        this.s=s;
    }
len()
{
    return this.s.length;
}
up()
{
    return this.s.toUpperCase();
}
lower()
{
    return this.s.toLowerCase();
}
sep()
{
    let v="";
    let c="";
    for(let i=0;i<this.s.length;i++)
    {
        let t=this.s.charAt(i).toLowerCase();
        if(t=='a' || t=='e' || t=='i' || t=='o' || t=='u')
        {
            v=v+this.s.charAt(i);
        }
        else{
            c=c+this.s.charAt(i);
        }
    }
    return "Vowels:"+v+ "  Consonants:"+c;
}
}
document.getElementById("btn").onclick=function(){
    document.getElementById("error").innerHTML="";
    document.getElementById("len").innerHTML="";
    document.getElementById("up").innerHTML="";
    document.getElementById("lo").innerHTML="";
    document.getElementById("vow").innerHTML="";
    let s=document.getElementById("in").value;
    for(let i=0;i<s.length;i++)
    {
        if(!isNaN(s.charAt(i)))
        {
            document.getElementById("error").innerHTML="The string contains numbers";
            document.getElementById("error").style.color="red";
            return;
        }
    }
    let inp=new funs(s);
    document.getElementById("len").innerHTML=inp.len();
    document.getElementById("up").innerHTML=inp.up();
    document.getElementById("lo").innerHTML=inp.lower();
    document.getElementById("vow").innerHTML=inp.sep();
};