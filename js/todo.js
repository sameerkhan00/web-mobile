var list=document.getElementById("list");
function add_list(){
    var input=document.getElementById("input-list");
    var li=document.createElement("li");
    var liText=document.createTextNode(input.value);

//delte button
    var delbtn=document.createElement("button");
    var btn=document.createTextNode("Delete")


    delbtn.setAttribute("Class","btn-edit");
    delbtn.setAttribute("onclick","delete_item(this)")

    delbtn.appendChild(btn)

    //edit button
    var editbtn=document.createElement("Button");
    var e_btn=document.createTextNode("Edit")
    editbtn.appendChild(e_btn);
    editbtn.setAttribute("Class","btn-edit")
    editbtn.setAttribute("onclick","edit_text(this)")


  li.appendChild(liText)
  list.appendChild(li)
  li.appendChild(editbtn)
  li.appendChild(delbtn)
  input.value=""

   
}

function delete_item(e){
  (e.parentNode.remove())
    
}
function edit_text(e){
    var val=prompt("Enter update",e.parentNode.firstChild.nodeText)
    console.log(e.parentNode.firstChild.nodeValue=val)
}
function delete_All(){
list.innerHTML="";
}