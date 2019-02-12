firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
	//var user = firebase.auth().currentUser;
	//var uid=user.uid;
	//alert("Sign in");
  } else {
    // No user is signed in.
	window.location.replace("index.html");
	//alert("not signin");
  }
});

	

	var title = document.getElementById('pt').value;
	var cat=document.getElementById('product_cat').value;
	var subcat=document.getElementById('product_sub_cat').value;
	var img1=document.getElementById('img1').value;
	var img2=document.getElementById('img2').value;
	var img3=document.getElementById('img3').value;
	var img4=document.getElementById('img4').value;
	var sprice=document.getElementById('psp').value;
	var rprice=document.getElementById('prp').value;
	
	var database = firebase.database().ref();
	var storage = firebase.storage().ref();
	
function add(){
	var title = document.getElementById('pt').value;
	var cat=document.getElementById('product_cat').value;
	var subcat=document.getElementById('product_sub_cat').value;
	var img1=document.getElementById('img1').value;
	var img2=document.getElementById('img2').value;
	var img3=document.getElementById('img3').value;
	var img4=document.getElementById('img4').value;
	var sprice=document.getElementById('psp').value;
	var rprice=document.getElementById('prp').value;
	
		//Prodcut Title validation
		
		if(title=="")
		{
			//alert("Please Enter Product Title");
			document.getElementById('msg1').innerHTML="Please Enter Product Name";
			return false;
		}
	
		else
		{
			document.getElementById('msg1').innerHTML="";
		}
		
		//Select Category validation
		
		if(product_cat.selectedIndex=="")
		{
			//alert ( "Please select Category!");
			document.getElementById('msg2').innerHTML="Please Select Category";
			return false;
		}
		else
		{
			document.getElementById('msg2').innerHTML="";
		}
		//SelectSubCat
		if(product_sub_cat.selectedIndex=="")
		{
			document.getElementById('msg3').innerHTML="Please Select Sub Category";
			return false;
		}
		else
		{
			document.getElementById('msg3').innerHTML="";
		}

		//image validation
		
		if(img1=="")
		{
			//alert("Please Enter Product Title");
			document.getElementById('msg5').innerHTML="Please choose img";
			return false;
		}
		else
		{
			document.getElementById('msg5').innerHTML="";
		}
		
		if(img2=="")
		{
			//alert("Please Enter Product Title");
			document.getElementById('msg51').innerHTML="Please choose img";
			return false;
		}
		else
		{
			document.getElementById('msg51').innerHTML="";
		}
	if(img3=="")
		{
			//alert("Please Enter Product Title");
			document.getElementById('msg52').innerHTML="Please choose img";
			return false;
		}
		else
		{
			document.getElementById('msg52').innerHTML="";
		}
		if(img4=="")
		{
			//alert("Please Enter Product Title");
			document.getElementById('msg53').innerHTML="Please choose img";
			return false;
		}
		else
		{
			document.getElementById('msg53').innerHTML="";
		}
	   //Price validation

		if(sprice=="")
		{
			//alert("Please Enter Product Title");
			document.getElementById('msg6').innerHTML="Please Sell Enter Price";
			return false;
		}
		if(!Number(sprice))
		{
			document.getElementById('msg6').innerHTML="Please Enter Numeric value only";
			return false;	
		}
		else
		{
			document.getElementById('msg6').innerHTML="";
		}
		if(rprice=="")
		{
			//alert("Please Enter Product Title");
			document.getElementById('msg61').innerHTML="Please Real Enter Price";
			return false;
		}
		if(!Number(rprice))
		{
			document.getElementById('msg61').innerHTML="Please Enter Numeric value only";
			return false;	
		}
		else
		{
			document.getElementById('msg61').innerHTML="";
		}
		
	  //description validation
		var  desc= document.getElementById('ds').value;
		if(desc=="")
		{
			//alert("Please Enter Product Title");
			document.getElementById('msg7').innerHTML="Please Enter Description";
			return false;
		}
		else
		{
			document.getElementById('msg7').innerHTML="";
		}
			var user = firebase.auth().currentUser;
			var uid=user.uid;	
		
		//var imagesRef = storage.child('images');
		//var spaceRef = imagesRef.child(img1);
		//var path = spaceRef.fullPath
		//var iname = spaceRef.name
		//var mimagesRef = spaceRef.parent;
		
		//alert(imagesRef);
		
		storage.child("images/*");
		
		var file=img1.fullpath;
		var URL=img1;
		
		var file    = document.querySelector('input[type=file]').files[img1];
  		var reader  = new FileReader();
		alert(file);

		
		storage.put(file).then(function(snapshot) {
  				console.log('Uploaded a blob or file!');
		});
		
		database.child("Product_Details").push().set({
			productsname:title,
			catagory:cat,
			subcatagory:subcat,
			sellprice:sprice,
			realprice:rprice,
			discription:desc,
			image:img1,
			dis:uid,

		});
			alert("Your Product Inserted");
		//database.child("Product_Details").child("catagory").push().set(cat);
		//database.child("Product_Details").child("subcatagory").push().set(subcat);
		//database.child("Product_Details").child("sell_price").push().set(sprice);
		//database.child("Product_Details").child("real_price").push().set(rprice);
		
		//var pro=database.child("Product_Details").set({
		//	product_name:product_name;
		//	sellprice:sprice;
		//	realprice:rprice;
		//},
		
		
		window.location.replace("insert_product.html");		
}