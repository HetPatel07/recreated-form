
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Login</title>
<link rel="stylesheet" href="css/login_css.css" media="all" />
<style>
.forgot-grid {
    margin-top: 1.2em;
}
.forgot {
    float: right;
}
.forgot a {
    font-size: 1em;
    color: #555;
    display:block;
}
.forgot a:hover{
    color: #e94e02;
}
</style>        
<script type="text/ecmascript">
		 	function admin()
		{
			//Email Validation
		
			var x=document.getElementById('em1').value;

   			var atpos=x.indexOf("@");

   			var dotpos=x.lastIndexOf(".");

			if (x=="")
	
			{
				/*alert("Not a valid e-mail address");*/
				document.getElementById('msg1').innerHTML="Plese enter Email ID";
				return false;
			}
			
			else if(atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
			{
				document.getElementById('msg1').innerHTML="Not a valid e-mail address";
				return false;
			}
			else
			{
				document.getElementById('msg1').innerHTML="";
			}
			
			
			//Password validation
			
			if(document.fn.password.value == "")
			{
				document.getElementById('msg2').innerHTML="Please input Password";	
				return false;
			}	
			else
			{
				document.getElementById('msg2').innerHTML="";	
			}
	}

	</script>
</head>
<body>
<div class="login">
<div align="center"><img src="images/logo.jpg"  width="249" height="185"align="texttop"></div>
<h2 style="color:#FFFFFF; text-align:center;">
<h1>Admin Login</h1>
<form method="post" action="login.php" name="fn">
    	<input type="text" name="email" placeholder="Email" id="login_email"/>
        	<span id="msg1" style="color:red; font-weight:bold;"></span>

        
        <input type="password" name="password" placeholder="Password" maxlength="10" id="login_password">
        	<span id="msg2" style="color:red; font-weight:bold;"></span>

        <button type="submit" class="btn btn-primary btn-block btn-large" name="login" onClick="return(admin());">Login</button>
        
      <div class="forgot-grid">
					<div class="forgot">
						<a href="forget_pswd.php">forgot password?</a>
				    </div>
		</div>
    </form>
</body>
</html>