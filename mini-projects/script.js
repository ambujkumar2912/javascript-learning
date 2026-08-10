let title = document.querySelector("#title");
let  studentlist = document.querySelector("#studentlist");
let btn = document.querySelector("#addbtn");
let input = document.querySelector("#studentinput");
btn.addEventListener("click" , function(){
  
      let name = input.value;
  if (name === "") {
    return;
}
if (name.trim() === "") {
    return;
}
  let li = document.createElement("li");

  li.innerText = name;
   studentlist.append(li);
    input.value = "";
   if(input.value === ""){
    return;
   }

   studentlist.addEventListener("click" , function(event){
    event.target.remove();
   });
});