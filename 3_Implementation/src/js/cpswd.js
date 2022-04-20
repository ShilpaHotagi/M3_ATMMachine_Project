 
  function myfun()
        {
          var val1=document.getElementById("pswd1").value;
          console.log(val1);
          var val2=document.getElementById("pswd2").value;
          console.log(val2);
          if(val1==val2)
          {
            alert('You have entered both password correct');
            alert('Successfully Reseted Your Password');
            window.open('home.html');
          }
          else if(val1=="")
          {
            alert('Enter password');
          }
          else if(val2=="")
          {
            alert('Enter re type password');
          }
          else
          {
            alert('Wrong password. Enter again');
          }    
        }
     