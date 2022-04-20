function myfun()
{   
    var val1=document.getElementById("fname").value;
    console.log(val1);
    var val2=document.getElementById("lname").value;  
    var val3=document.getElementById("place").value; 
    var val4=document.getElementById("subject").value; 
    console.log(val2);
    console.log(val3);
    console.log(val4);

    if(val1=="")
    {
        alert('Please enter name.');
        return false;
    }
    else if(val2=="")
    {
        alert('Please enter lastname');
        return false;
    }
    else if(val3=="")
    {
        alert('Please Select place');
        return false;
    }
    else if(val4=="")
    {
        alert('Please write your query');
        return false;
    }
    else
    {
       alert('Successfully Submitted');
       window.open('home.html');
    }
    
}