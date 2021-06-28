function compute()
	{
    var p,n,r,a;
    p = document.getElementById("principal").value;
    n = document.getElementById("years").value;
    r = document.getElementById("rate").value;
    a = (p*n*r)/100;
    var b = Number(a)+Number(p) ; 
    var s=Number(n)+2021;
	
        document.getElementById("result").innerHTML = a;
	      document.getElementById("amount").innerHTML = b;
        document.getElementById("pri").innerHTML = p;
        document.getElementById("ir").innerHTML = r;
	      document.getElementById("time").innerHTML = s;
       
	}
        
