firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
	var user = firebase.auth().currentUser;
	var ukey=user.uid;
	//alert(ukey);
  } else {
    // No user is signed in.
	window.location.replace("index.html");
	//alert("not signin");
  }
});
	
	var ref=firebase.database().ref().child("Product_Details");
		var a = "<a href='#'>EDIT</a>";
	//	var linkText = document.createTextNode("my title text");
		//a.appendChild(linkText);
//		a.title = "Edit";
	//	a.href = "http://example.com";
		
	var table=document.getElementById('table_my');
//	var nn=document..createElement('a');
	 var str = "Edit";
	 var elink=str.link("www.google.com");
	var rowi=2;
	var i=1;
//alert(ref);


		ref.once('value', function(snapshot) {
		  snapshot.forEach(function(childSnapshot) {
			var childKey = childSnapshot.key;
			var childData = childSnapshot.val();
			//alert(childKey);
			var user = firebase.auth().currentUser;
			var ukey=user.uid;
			var uid=childData.dis;
			
//			alert(uid);
//			alert(ukey);
		if(ukey==uid){
			
			var row=table.insertRow(rowi);
			var id=row.insertCell(0);
			
			var name=row.insertCell(1);
			var pimg=row.insertCell(2);
			var pdis=row.insertCell(3);
			var psp=row.insertCell(4);
			var prp=row.insertCell(5);
			var edit=row.insertCell(6);
			var deleteElement=row.insertCell(7);

			var pname=childData.productsname;
			var img=childData.image;
			var dis=childData.discription;
			var sp=childData.sellprice;
			var rp=childData.realprice;
			
			var aTag = document.createElement('a');
			aTag.setAttribute('href',"edit.js");
			aTag.setAttribute('class',"btn btn-primary m-2");
			aTag.innerHTML = "Edit";
			
			
			var deleteTag = document.createElement('a');
			deleteTag .setAttribute('href',"delete.js");
			deleteTag .setAttribute('class',"btn btn-danger m-2");
			deleteTag .innerHTML = "Delete";
			
			
			
			
			id.appendChild(document.createTextNode(i));
			name.appendChild(document.createTextNode(pname));
			pimg.appendChild(document.createTextNode(img));
			pdis.appendChild(document.createTextNode(dis));
			psp.appendChild(document.createTextNode(sp));
			prp.appendChild(document.createTextNode(rp));
			edit.appendChild(aTag);
		deleteElement.appendChild(deleteTag);
		
		//document.body.appendChild(a);
		//	edit.appendChild(document.createTextNode(a));

			rowi=rowi+1;
			i=i+1;
		}
		  });
		});