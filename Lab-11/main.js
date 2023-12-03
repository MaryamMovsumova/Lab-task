const box = document.querySelector(".to_do_list_box_input");
const btn = document.querySelector(".to_do_list_box_btn");
const planList = document.querySelector(".to_do_plan_list")



btn.addEventListener("click", () => {
    const text = document.createElement("li");
    text.innerHTML = box.value.trim();
    text.classList.add("text");

    const removeBtn = document.createElement("p")
    removeBtn.innerHTML = "x";
    removeBtn.classList.add("removeBtn");

    const list = document.createElement("div");
    list.classList.add("list");
    list.appendChild(text);
    list.appendChild(removeBtn);

    if (box.value.length > 0) {
        planList.appendChild("list");
    }
    else {
        alert('Please write anything');
    }
    removeBtn.addEventListener("click", () => {
        list.remove();
    });

    box.value = "" 

});





