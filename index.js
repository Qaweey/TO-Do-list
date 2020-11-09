let button= document.querySelector(".Btn");
let appendedvalue= document.querySelector("#appendedvalue");
let myinput= document.querySelector("#textvalue");
let todos= JSON.parse(localStorage.getItem("todos")) || [];
console.log(todos);

 document.addEventListener("DOMContentLoaded", () => {
    todos.forEach((todo)=>{
      let paragraph = document.createElement("p");
      paragraph.textContent = todo;
      appendedvalue.appendChild(paragraph);
      paragraph.classList.add("appendcontent");
      paragraph.addEventListener("click", ()=>{
        if (paragraph.classList.contains('checkedeffect')) {
          paragraph.classList.remove("checkedeffect");
          let index = todos.indexOf(paragraph.textContent);
          appendedvalue.removeChild(paragraph);
          todos.splice(index, 1);
          localStorage.setItem("todos",JSON.stringify(todos));
        } 
        else {
          paragraph.classList.add("checkedeffect");
        }
      }) 
    })        
 } )
 
//Adding items
button.addEventListener("click", function(){ 
   let paragraph = document.createElement("p");
   paragraph.innerText= myinput.value;
   todos.push(myinput.value);
   
   localStorage.setItem("todos",JSON.stringify(todos));
   appendedvalue.appendChild(paragraph);
     myinput.value="";
     paragraph.classList.add("appendcontent");   
     paragraph.addEventListener("click", ()=>{
      if (paragraph.classList.contains('checkedeffect')) {
        paragraph.classList.remove("checkedeffect");
        let index = todos.indexOf(paragraph);
        appendedvalue.removeChild(paragraph);
        todos.splice(index, 1);
        localStorage.setItem("todos",JSON.stringify(todos));
      } 
      else {
        paragraph.classList.add("checkedeffect");
      }
    }) 
})
 