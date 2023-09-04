function pushRules(list){

var add_list=document.querySelector("#three");
add_list.addEventListener('click', function() {
  var w=document.querySelector("#in").value;
  var li =document.createElement("li");
  var rule=document.createTextNode(w);
  li.appendChild(rule);

var removeBtn=document.createElement("input");
removeBtn.type= "button";
removeBtn.value = "Remove";
removeBtn.id="rmv";
removeBtn.addEventListener('click', function(e) {


  var el=e.target;
  el.parentNode.remove();
});
li.appendChild(removeBtn);


document.querySelector("#list").appendChild(li);



})
}
window.onload = function () {
    document.getElementById("three").onclick = pushRules();


}
