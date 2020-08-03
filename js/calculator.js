function getNum(num){
    var result=document.getElementById("result");
   result.value +=num;
}
function clearResult(){
    var result=document.getElementById("result");
    result.value=" ";
}
function resultbtn(){
    var result=document.getElementById("result");
    result.value=eval(result.value);
}
function cosFunc(){
    var result=document.getElementById("result");
    result.value=Math.cos(result.value);
}
function sinFunc(){
    var result=document.getElementById("result");
    result.value=Math.sin(result.value);
}
function tanFunc(){
    var result=document.getElementById("result");
    result.value=Math.tan(result.value);
}
function squareFunc(){
    var result=document.getElementById("result");
    result.value=Math.sqrt(result.value);
}

function back(){
    var result=document.getElementById("result");
result.value=result.value.slice(0,-1);
}