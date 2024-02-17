let boxes=document.querySelectorAll(".box");
let win_masage=document.querySelector(".winer");
win_masage.classList.add("on");
let reset=document.querySelector(".reset");
let turn=true;
let values=[[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]];
boxes.forEach((box)=>{
 box.addEventListener("click",()=>{
if(turn===true){
    box.innerHTML="o";
    turn=false;
}else{
    box.innerHTML="x";
    turn=true;
}
box.disabled=true;
find_value();
box.classList.add("glow");
 });
});

let disabled_box=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
let enable=()=>{
    for(let box of boxes){
box.innerHTML="";
box.disabled=false;
win_masage.classList.add("on");
box.classList.remove("glow")
    }
}

let winer=(win)=>{
win_masage.innerHTML=`winer is ${win}`;
win_masage.classList.remove("on");
win_masage.classList.add("win_glow")
disabled_box();
}



function find_value() {
    for (let value of values) {
       let val1=boxes[value[0]].innerHTML;
       let val2=boxes[value[1]].innerHTML;
       let val3=boxes[value[2]].innerHTML;
if(val1!==""&&val2!==""&&val3!==""){
    if(val1===val2&&val2===val3){
        winer(val1)
    }
}  
    }
}
reset.addEventListener("click",enable);
let on="on";
    reset.addEventListener("click",()=>{
if(on==="on"){
    reset.classList.add("reset_glow");
    on="off";
}else{
    reset.classList.remove("reset_glow")
    on="on";
}
    })