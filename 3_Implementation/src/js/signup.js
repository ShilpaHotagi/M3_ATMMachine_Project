function myfun()
{   
    var val1=document.getElementById("user").value;
    console.log(val1);
    var val2=document.getElementById("password").value;  
    var val3=document.getElementById("repassword").value; 
    console.log(val2);
    console.log(val3);
    if(val1=="")
    {
        alert('Please enter name.');
        return false;
    }
    else if(val2=="")
    {
        alert('Please enter password.');
        return false;
    }
    else if(val3=="")
    {
        alert('Please enter re-type password.');
        return false;
    }
    else if(val2==val3)
    {
       alert('You have entered both password correct.');
       alert('Successfully registered.');
       window.open('selectbank.html');
    }
    else
    {
      alert('Please enter both passwords same.');
    } 
    
}