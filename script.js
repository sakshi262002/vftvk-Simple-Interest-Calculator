function compute()
  {
    p = document.getElementById("principal").value;
    r=document.getElementById("rate").value;
    n=document.getElementById("years").value;
    
    var result=((p*n*r)/100);
    document.getElementById("result").innerHTML=result;

   }
        
