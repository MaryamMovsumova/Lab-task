const accordion_box = document.querySelectorAll(".accordion_box");

const accordion_box_icon = document.querySelectorAll(".accordion_box_icon");

console.log(accordion_box)
accordion_box.forEach((item)=>{
    item.addEventListener("click", ()=>{
        console.log("clicked");
        item.classList.toggle("active")
    })
})