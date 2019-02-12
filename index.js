
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
	var user = firebase.auth().currentUser;
	var email;
	
	email=user.email;
	//alert("Welcome=" + email);
	document.getElementById("name_admin").innerHTML=email

  } else {
    // No user is signed in.
	window.location.replace("index.html");
	//alert("not signin");
  }
});
function logout(){
	firebase.auth().signOut().then(function() {
  // Sign-out successful.
  alert("Sign out");
	}).catch(function(error) {
  // An error happened.
});
}