function check(form) {
    if(form.usrname.value == "Admin" && form.psw.value == "Admin123")
     {
        alert('Successfully Login');
        window.open("adminview.html")
    }
    else if(form.usrname.value == "Shilpa" && form.psw.value == "Shilpa123")   
     {
        alert('Successfully Login');
         window.open('selectbank.html')
     }
      else
       {
         alert("Error. Please enter correct Username");
       }
      }
       