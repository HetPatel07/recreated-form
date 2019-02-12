firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
	window.location.replace("home.html");
	//alert("Sign in");
  } else {
    // No user is signed in.
	//alert("not signin");
  }
});
	
function login(){
	
var email=document.getElementById("login_email").value;
var password=document.getElementById("login_password").value;
//window.alert("done");
var x=document.getElementById('login_email').value;

   			var atpos=x.indexOf("@");

   			var dotpos=x.lastIndexOf(".");

			if (x=="")
	
			{
				/*alert("Not a valid e-mail address");*/
				document.getElementById('msg1').innerHTML="Plese Enter Email ID";
				return false;
			}
			
			else if(atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
			{
				document.getElementById('msg1').innerHTML="Not a valid E-mail address";
				return false;
			}
			else
			{
				document.getElementById('msg1').innerHTML="";
			}
			
			
			//Password validation
			
			if(password== "")
			{
				document.getElementById('msg2').innerHTML="Please input Password";	
				return false;
			}	
			else
			{
				document.getElementById('msg2').innerHTML="";	
			}
			

firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
//          if (errorCode === 'auth/wrong-password') {
  //          alert('Wrong password.');
    //      } else {
      //      alert(errorMessage);
        //  }
          //console.log(error);
          //document.getElementById('quickstart-sign-in').disabled = false;
          // [END_EXCLUDE]
		  
		  if(errorMessage == null)
		  {
			   alert("signin");
		  }
		  else
		  {
			alert(errorMessage);
			}
        });
}



function logout(){
	firebase.auth().signOut().then(function() {
  // Sign-out successful.
  alert("Sign out");
	}).catch(function(error) {
  // An error happened.
});
}