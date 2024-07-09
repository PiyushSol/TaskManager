console.log("Welcome to task manager")


let addtask = document.getElementsByClassName("btn")[0]
let add = document.getElementById("add")
let cancel = document.getElementById("cancel")
let form = document.getElementsByClassName("form")[0];


addtask.addEventListener("click", () => {
    form.style.display = "contents";
})

cancel.addEventListener("click", () => {
    form.style.display = "none";
})


add.addEventListener("click", () => {
    let heading = document.getElementById("heading");
    let taskbody = document.getElementById("taskvalue");

    let container = document.getElementsByClassName("container")[0];

    let div = document.createElement("div");
    div.style.border = "2px solid violet";
    div.style.margin = "5px";
    div.style.padding = "5px";
    div.style.minWidth = "20vw";
    div.style.fontFamily = "PT-Sans , sans-serif";

    container.insertAdjacentElement("beforeend", div); 

    div.innerHTML = div.innerHTML + `<h3 style="padding:2px; text-align:center; font-family:"PT-Sans , sans-serif" ">${heading.value}</h3>
            <p>${taskbody.value}</p>`;
    form.style.display = "none";
    heading.value = "";
    taskbody.value = ""
})
