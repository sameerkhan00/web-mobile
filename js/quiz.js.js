function quiz(){
    var score=0;
    var ques1=document.getElementById("question1-a1");
    var right=document.getElementById("question1-a2");
    var ques1=document.getElementById("question1-a3");
    var ques1=document.getElementById("question1-a4");
    if (right.checked==true ){
alert("question 1 is correct")
score++
    }
    else{
        alert("Question 1 is wrong")
    }


    var right2=document.getElementById("question2-a4");
    if(right2.checked==true){
        score++
        alert("question 2 is correct")
    }
    else{
        alert("Question 2 is wrong")
    }
    var right3=document.getElementById("question3-a1");
    if(right3.checked==true){
        score++
        alert("question 3 is correct")
    }
    else{
        alert("Question 3 is wrong")
    }
    
    alert("your total score is "+score++)

}
