function validation (){
    var x = document.getElementById("fname").value;
    var y = document.getElementById("lname").value;
    var z = document.getElementById("phone").value;
    var a = document.getElementById("email").value;
    if (x===""){
      document.getElementById("firstName").innerHTML = "Please fill in the First Name.";
    }
    if (y ===""){
        document.getElementById("lastName").innerHTML = "Please fill in the Last Name.";
    }
    if (z===""){
        document.getElementById("formEmail").innerHTML = "Please fill in the Email.";
    }
    if (a===""){
        document.getElementById("formPhone").innerHTML = "Please fill in the Phone.";
    }
     return false;

}