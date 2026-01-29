function validateLoginForm() {
  let x = document.forms["loginform"]["email"].value;
  let y = document.forms["loginform"]["password"].value;
  if (x == ""|| y=="") 
    {
    alert("Each field is mandatory");
    return false;
  }
}

