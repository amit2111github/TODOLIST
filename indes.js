// to delete

function remove(e){
	e.parentElement.remove();
}

function myRemove(e){
	console.log(e.path[0].parentElement)
	e.path[0].parentElement.remove()
}
//to add


 document.querySelector(".button").addEventListener("click",ADD)
 function ADD(e){


 	var parentinsert = document.querySelector(".outer");

  var Taskname  = e.value;
  var newelement = document.createElement("div");
  var  p=  document.createElement("p");
  var  button =  document.createElement("button");
  p.innerHTML =  Taskname;
  button.innerHTML = "X";
  newelement.appendChild(p);
  newelement.appendChild(button);
  parentinsert.appendChild(newelement)
  newelement.className = "task1";
  newelement.style.display = "grid";
  newelement.style.gridTemplateColumns = "80% 20%";
  newelement.style.margin = "20px 0";
  button.className  =  "btn";
  button.addEventListener("click",myRemove)

  console.log(button);


 }
