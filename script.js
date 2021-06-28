function compute()
{
    p = document.getElementById("principal").value;
    r=document.getElementById("rate").value;
    n=document.getElementById("years").value;
    
    result=parseInt((p*n*r)/100);
    document.getElementById('num').innerHTML="SIMPLE INTEREST:"+result;
    
}
        
