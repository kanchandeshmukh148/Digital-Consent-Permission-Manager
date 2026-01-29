function validateRegisterForm() {
  /*let x = document.forms["registerform"]["email"].value;
  let y = document.forms["registerform"]["password"].value;
  let z = document.forms["registerform"]["fname"].value;*/
  let x= document.getElementById("fname").value;
  let y= document.getElementById("fname").value;
  let z= document.getElementById("fname").value;


  
  
  if (x == ""|| y==""||z==""||x=="" && y==""||x==""&&z==""||y=="" && z=="") 
    {
    alert("Each field is mandatory");
    return false;
  }
}