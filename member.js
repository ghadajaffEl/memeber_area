

function validate_name(){
	var name = document.forms["frm1"]["name"].value;
    var confirm=document.forms["frm1"]["confirm-pwd"].value;
         document.getElementById("err-name").innerHTML="";

	
   if (name.length<5){
      
   	  document.getElementById("err-name").innerHTML="full name minimum 6";
      return false;

   	  
    }
    else if(name.length>21)
    {   	  document.getElementById("err-name").innerHTML="full name maximum 20";
  return false;
   	
}
 }

function validate_pseudo()
{ 
		var pseudo = document.forms["frm1"]["pseudo"].value;
 document.getElementById("err-pseudo").innerHTML="";

       var regexp2=/((?=\w*\d)(?=\w*[a-z]))/;



    // var regexp=/^\w+$/;
    if(regexp2.test(pseudo)==false)
  {
  	 document.getElementById("err-pseudo").innerHTML="pseudo numbers + alphabets";
           return false;

}

}

function validate_email()
{
		var email = document.forms["frm1"]["email"].value;
        document.getElementById("err-email").innerHTML="";


	 var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(email)==false)
  {
  	document.getElementById("err-email").innerHTML="enter a valid email";
          return false;

   }
  }   

function validate_pwd()
{	var pwd=document.forms["frm1"]["pwd"].value;

    document.getElementById("err-pwd").innerHTML="";

  
   var regexp=/(\w*\d)(\w*[a-z])(\w*[A-Z])\w/;
   var regexp2=/((?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*\W).{6,})/;
  if(regexp2.test(pwd)==false)
  {
    document.getElementById("err-pwd").innerHTML="password : min 6 ,uppercase, at least a number  , at least a sepecial character";
  }
  
}

function confirm_pwd()
{
	var pwd=document.forms["frm1"]["pwd"].value;
	    var confirm=document.forms["frm1"]["confirm-pwd"].value;
       document.getElementById("err-confirm").innerHTML="";

if(pwd!=confirm)
{
 document.getElementById("err-confirm").innerHTML="password isn't the same";
 document.forms["frm1"]["pwd"].style.color="red";
  document.forms["frm1"]["confirm-pwd"].style.color="red";
        return false;


}
else{
document.forms["frm1"]["pwd"].style.color="green";
  document.forms["frm1"]["confirm-pwd"].style.color="green";
  return true;
}
}


			

function send()
{
return(validate_name() && validate_email() && validate_pseudo() && validate_pwd() && confirm_pwd());
  

  }
function connecter()
{
return(validate_pseudo() && validate_pwd());
  

  }

