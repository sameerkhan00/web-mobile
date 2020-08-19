var list=document.getElementById("list");

firebase.database().ref('mydata').on('child_added',function(data){
  
  var li=document.createElement("li");
  var liText=document.createTextNode(data.val().value);


//delte button
  var delbtn=document.createElement("button");
  var btn=document.createTextNode("Delete")


  delbtn.setAttribute("Class","btn-edit");
  delbtn.setAttribute("onclick","delete_item(this)")
  
  delbtn.setAttribute('id',data.val().key)

  delbtn.appendChild(btn)

  //edit button
  var editbtn=document.createElement("Button");
  var e_btn=document.createTextNode("Edit")
  editbtn.appendChild(e_btn);
  editbtn.setAttribute('id', data.val().key)
  editbtn.setAttribute("Class","btn-edit")
  editbtn.setAttribute("onclick","edit_text(this)")


li.appendChild(liText)
list.appendChild(li)
li.appendChild(editbtn)
li.appendChild(delbtn)

 

}
)
function add_list(){
    var input=document.getElementById("input_list");
    // if (input.value == ''){
    //   alert("plz ! insert value ")
    // }
    // else{ 
    // var li=document.createElement("li");
    // var liText=document.createTextNode(input.value);
    console.log(input.value)
   var key= firebase.database().ref('mydata').push().key

   var todo={
     value:input.value,
     key:key
   }
   firebase.database().ref('mydata').child(key).set(todo)
    input.value=""

//delte button
//     var delbtn=document.createElement("button");
//     var btn=document.createTextNode("Delete")


//     delbtn.setAttribute("Class","btn-edit");
//     delbtn.setAttribute("onclick","delete_item(this)")

//     delbtn.appendChild(btn)

//     //edit button
//     var editbtn=document.createElement("Button");
//     var e_btn=document.createTextNode("Edit")
//     editbtn.appendChild(e_btn);
//     editbtn.setAttribute("Class","btn-edit")
//     editbtn.setAttribute("onclick","edit_text(this)")


//   li.appendChild(liText)
//   list.appendChild(li)
//   li.appendChild(editbtn)
//   li.appendChild(delbtn)
  
   
// }
//add data to firebase


}

function delete_item(e){
firebase.database().ref('mydata').child(e.id).remove()
  console.log(e.parentNode.remove());
  
}
function edit_text(e){

    var val=prompt("Enter update",e.parentNode.firstChild.nodeText)
    var data={
      value:val,
      key:e.id
    }
    firebase.database().ref('mydata').child(e.id).set(data)
    e.parentNode.firstChild.nodeValue=val
}
//delete all data from firebase
function delete_All(){
  firebase.database().ref('mydata').remove()
list.innerHTML="";
}
