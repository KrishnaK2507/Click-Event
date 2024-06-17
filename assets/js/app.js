const cl = console.log;

const btn = document.getElementById("btn");
const box = document.getElementById("box");
const btn01 = document.getElementById("btn01");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const btn02 = document.getElementById("btn02");
const btn03 = document.getElementById("btn03");
const box4 = document.getElementById("box4");

let flag = true;
const onClick = (eve) => {
  if(flag){
    box.classList.toggle("d-none");
    eve.target.innerHTML = "Show Nature Image"
    eve.target.className = "btn btn-outline-success";
  }else{
     box.classList.toggle("d-none");
     btn.innerHTML = "Hide Nature Image"
     btn.className = "btn btn-outline-danger";
  }
   flag = !flag
}

let Magnus = true;
const onClick01 = (eve) => {
    if(Magnus){
        eve.target.innerHTML = "Show Waterfall Image";
        eve.target.className = "btn btn-outline-success";
        box2.classList.toggle("d-none");
    }else{
        eve.target.innerHTML = "Hide Waterfall Image";
        eve.target.className = "btn btn-outline-danger";
        box2.classList.toggle("d-none")
    }
    Magnus = !Magnus
}

let vishy = true;
const onClick02 = (eve) => {
    if(vishy){
        eve.target.className = "btn btn-outline-success";
        eve.target.innerHTML = "Show PC Image";
        box3.classList.toggle("d-none");
    }else{
        eve.target.className = "btn btn-outline-danger";
        eve.target.innerHTML = "Hide PC Image";
        box3.classList.toggle("d-none");
    }
    vishy = !vishy
}

let Pragg = true;
const onClick03 = (eve) => {
    if(Pragg){
        eve.target.innerHTML = "Show Image";
        eve.target.className = "btn btn-outline-success";
        box4.classList.toggle("d-none");
    }else{
        eve.target.innerHTML = "Hide Image";
        eve.target.className = "btn btn-outline-danger";
        box4.classList.toggle("d-none");
    }
    Pragg = !Pragg;
}

btn.addEventListener("click",onClick);
btn01.addEventListener("click",onClick01);
btn02.addEventListener("click",onClick02);
btn03.addEventListener("click",onClick03);
