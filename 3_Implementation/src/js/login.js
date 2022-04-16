function check(form) {
    if(form.usrname.value == "admin" && form.psw.value == "")
     {

        window.open("adminview.html")
    }
    else if(form.usrname.value == "sanketh" && form.psw.value == "gowda")                {
         window.open('selectbank.html')
     }
      else
       {
         alert("Error. Please enter Username and passwor")
       }
      }