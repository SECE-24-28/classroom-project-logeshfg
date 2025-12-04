function calculation(){
    let x=document.getElementById('i1').value;
    let y=document.getElementById('i2').value;

    let credentials={
        username:x,
        password:y
    };

    if(x=='logeshwaran' && y=='229')
    {
        window.location.href="../calculator/cal.html";
        alert("Loginned Successfully!");
        
    }

    else{
        alert("Invalid username or password!");
    }

}

function cal1()
{
    let a=parseInt(document.getElementById('num1').value);
    let b=parseInt(document.getElementById('num2').value);
    let c=a+b;
    alert("The sum of "+a+" and "+b+" is: "+c);
}

function cal2()
{
    let a=parseInt(document.getElementById('num1').value);
    let b=parseInt(document.getElementById('num2').value);
    let c=a-b;
    alert("The difference of "+a+" and "+b+" is: "+c);
}

function cal3()
{
    let a=parseInt(document.getElementById('num1').value);
    let b=parseInt(document.getElementById('num2').value);
    let c=a*b;
    alert("The product of "+a+" and "+b+" is: "+c);
}

function cal4()
{
    let a=parseInt(document.getElementById('num1').value);
    let b=parseInt(document.getElementById('num2').value);
    let c=a/b;
    alert("The division of "+a+" and "+b+" is: "+c);
}

