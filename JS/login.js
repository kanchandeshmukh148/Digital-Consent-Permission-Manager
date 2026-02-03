function validateLoginForm() {
  let x = document.forms["loginform"]["email"].value;
  let y = document.forms["loginform"]["password"].value;
  if (x == ""|| y=="") 
    {
    alert("Each field is mandatory");
    return false;
  }
  else if(x=="admin@gmail.com" && y=="admin123")
  {
      document.location.href="adminDashboard.html";
      return false;
  }
  else if(x=="user@gmail.com" && y=="user123")
  {
      document.location.href="userDashboard.html";
      return false;
  }
  else if(x=="app@gmail.com" && y=="app123")
  {
      document.location.href="approverDashboard.html";
      return false;
  }
  else {
    alert("Invalid email or password");
    return false;
  }
}

