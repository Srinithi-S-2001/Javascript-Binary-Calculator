let exp='';
document.getElementById('btn0').addEventListener("click",function(){
    exp+='0';
    res.innerHTML=exp;
});
document.getElementById('btn1').addEventListener("click",function(){
    exp+='1'; 
    res.innerHTML=exp;
});
document.getElementById('btnEql').addEventListener("click",function(){
    res.innerHTML=Math.floor(((eval(exp.replace(/[01]+/g, '0b$&')) >> 0))).toString(2);
    
});
document.getElementById('btnSum').addEventListener("click",function(){
    exp+='+';
    res.innerHTML=exp;    
});
document.getElementById('btnSub').addEventListener("click",function(){
    exp+='-';
    res.innerHTML=exp;
});
document.getElementById('btnMul').addEventListener("click",function(){
    exp+='*';
    res.innerHTML=exp;
});
document.getElementById('btnDiv').addEventListener("click",function(){
    exp+='/';
    res.innerHTML=exp;
});
document.getElementById('btnClr').addEventListener("click",function(){
    exp=' ';
    res.innerHTML=' ';
    
});