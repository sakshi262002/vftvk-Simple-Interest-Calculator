function compute()
	{
    		var n=document.querySelector("select").value;
    		var p,r,a;
    		p = document.getElementById("principal").value;
		if(p<=0)
		{
		 alert("Invalid Input!! Enter a Positive number");
		 return false;
		}
		
    		r = document.getElementById("rate").value;
   		a = (p*n*r)/100;
    		var b = Number(p)+ Number(a);
		var s = Number(n)+2021;
	
    		document.getElementById("result").innerHTML = a;
		document.getElementById("amount").innerHTML = b;
   		document.getElementById("pri").innerHTML = p;
		document.getElementById("time").innerHTML = s;
		document.getElementById("ra").innerHTML = r;
	}
