ref.on("child_added",snap=>{
	   
	   var name=snap.child("productsname").val();
//	   var cat=snap.child("catagory").val();
		var img=snap.child("image").val();
		var dis=snap.child("discription").val();
		var sp=snap.child("sellprice").val();
		var rp=snap.child("realprice").val();
	   
//		alert(snap.val());
//		alert(name);

		my.append(name);
		tbimg.append(img);
		tb_dis.append(dis);
		tb_sp.append(sp);
		tb_rp.append(rp);
		});// JavaScript Document