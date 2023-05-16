const draggableDiv = document.querySelector("#draggable_div");
header = draggableDiv.querySelector("header");

function onMouseDrag({movementX,movementY}){
    let getStyle = window.getComputedStyle(draggableDiv);
    let left =parseInt(getStyle.left) ;
    let top =parseInt(getStyle.top) ;
    console.log(left,top);
    draggableDiv.style.left=`${left + movementX}px`;
    draggableDiv.style.top=`${top + movementY}px;`
}

header.addEventListener("mousedown",()=>{
    header.addEventListener("mousemove",onMouseDrag)
})

document.addEventListener("mouseup",()=>{
    header.removeEventListener("mousemove",onMouseDrag)
})