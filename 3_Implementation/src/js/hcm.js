
  function check(form) {
                if(form.userid.value == "admin" && form.pswrd.value == "gowda") {


                    window.open("adminhome.html")
                }
                else {

                    alert("Error. Please enter correct Username")

                }
            }


 function dcheck(form) {
                if(form.userid.value == "sanketh" && form.pswrd.value == "gowda") {

                    window.open('patienthome.html')
                }
                else {

                    alert("Error. Please enter correct Username")

                }
            }


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("mySidenav").style.top = "85px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}


function checkPassword(form) {
    password1 = form.pass1.value;
    password2 = form.pass2.value;


    if (password1 == '')
        alert("Please enter Password");


    else if (password2 == '')
        alert("Please enter confirm password");


    else if (password1 != password2) {
        alert("\nPassword did not match. Make both passwords are same.");
        return false;
    }


    else {
        alert("Doctor data add successfuly..");
        window.open('p.html');
        return true;

    }
}


function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
