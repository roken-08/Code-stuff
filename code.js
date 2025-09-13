let dt1 = document.querySelector("#dat");
let b = document.querySelector("body");

dt1.addEventListener("click" , () =>{
    b.style.backgroundColor = "black";
})

dt1.addEventListener("dblclick", () =>{
    b.style.backgroundColor = "white";
})