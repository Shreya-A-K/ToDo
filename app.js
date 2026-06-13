let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
    let li = document.createElement("li");
    let delbtn= document.createElement("button");
    delbtn.innerText="Delete task ";
    delbtn.classList.add("delete");
    li.innerHTML=inp.value+"&nbsp";
    li.appendChild(delbtn);
    inp.value="";
    ul.append(li);

})
ul.addEventListener("click",function(event){
    if (event.target.nodeName=="BUTTON"){
        event.target.parentElement.remove()
    }
})
